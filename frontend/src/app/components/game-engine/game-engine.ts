import { Component, input, output, signal, effect, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

const SYMBOLS = ['🍒', '💎', '🔔', '7️⃣', '🎰', '🍋', '🍉', '🍇', '⭐'];
const SUITS = ['♥️', '♦️', '♣️', '♠️'];
const VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

interface Card {
  value: string;
  suit: string;
  points: number;
}

@Component({
  selector: 'app-game-engine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-engine.html',
  styleUrl: './game-engine.css'
})
export class GameEngineComponent implements OnDestroy {
  gameData = input<{title: string, category: string}>();
  exitGame = output<void>();

  balance = signal<number>(1000);
  betAmount = signal<number>(10);
  lastMessage = signal<string>('Bienvenido. Haz tu apuesta.');
  lastWin = signal<number>(0);

  // ===================== LÓGICA DE SLOTS (Mejorado) =====================
  reels = signal<string[][]>([['❓'], ['❓'], ['❓']]);
  isSpinning = signal<boolean>(false);

  async spinSlots() {
    if (this.balance() < this.betAmount()) return this.setMsg('Fondos insuficientes');
    this.balance.update(b => b - this.betAmount());
    this.isSpinning.set(true);
    this.lastWin.set(0);
    this.setMsg('Girando la suerte...');
    
    // Generar secuencias de símbolos para el efecto de scroll
    const newReels: string[][] = [];
    for (let i = 0; i < 3; i++) {
       const column: string[] = [];
       for (let j = 0; j < 20; j++) {
         column.push(SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]);
       }
       newReels.push(column);
    }
    this.reels.set(newReels);

    await this.delay(2000); // Duración del giro visual
    
    this.isSpinning.set(false);
    // Verificar victoria basado en el último elemento de cada columna
    this.checkSlotWin();
  }

  checkSlotWin() {
    const final = this.reels().map(r => r[r.length - 1]);
    if (final[0] === final[1] && final[1] === final[2]) {
      let extra = final[0] === '💎' ? 50 : final[0] === '🎰' ? 25 : 10;
      let prize = this.betAmount() * extra;
      this.balance.update(b => b + prize);
      this.lastWin.set(prize);
      this.setMsg(`¡INCREÍBLE! Combinación de ${final[0]}. Ganaste $${prize}`);
    } else if (final[0] === final[1] || final[1] === final[2] || final[0] === final[2]) {
       let prize = this.betAmount() * 2;
       this.balance.update(b => b + prize);
       this.lastWin.set(prize);
       this.setMsg(`¡Par de ${final[1]}! Ganancia: $${prize}`);
    } else {
      this.setMsg('Casi lo tienes. Intenta de nuevo.');
    }
  }

  // ===================== LÓGICA DE CRASH =====================
  crashMultiplier = signal<number>(1.00);
  crashActive = signal<boolean>(false);
  hasCrashed = signal<boolean>(false);
  crashInterval: any;
  crashTarget = 0;

  playCrash() {
    if (this.balance() < this.betAmount()) return this.setMsg('Fondos insuficientes');
    this.balance.update(b => b - this.betAmount());
    this.crashActive.set(true);
    this.hasCrashed.set(false);
    this.crashMultiplier.set(1.00);
    this.lastWin.set(0);
    this.setMsg('Volando... presiona "Retirarse" antes de explotar.');

    this.crashTarget = 1.00 + (Math.random() * Math.random() * 8); // Más volátil

    this.crashInterval = setInterval(() => {
      this.crashMultiplier.update(m => m + 0.02);
      if (this.crashMultiplier() >= this.crashTarget) {
        clearInterval(this.crashInterval);
        this.crashActive.set(false);
        this.hasCrashed.set(true);
        this.setMsg('¡EXPLOTÓ! Suerte la próxima.');
      }
    }, 40);
  }

  cashOut() {
    if (!this.crashActive()) return;
    clearInterval(this.crashInterval);
    this.crashActive.set(false);
    let prize = parseFloat((this.betAmount() * this.crashMultiplier()).toFixed(2));
    this.balance.update(b => b + prize);
    this.lastWin.set(prize);
    this.setMsg(`¡Retirada Exitosa! Ganancia de $${prize}`);
  }

  // ===================== LÓGICA DE RULETA (Horizontal Tape) =====================
  rouletteActive = signal<boolean>(false);
  rouletteTape = signal<number[]>([]);
  winningNumber = signal<number | null>(null);
  rouletteOffset = signal<number>(0);

  async spinRoulette() {
    if (this.balance() < this.betAmount()) return this.setMsg('Fondos insuficientes');
    if (this.rouletteActive()) return;

    this.balance.update(b => b - this.betAmount());
    this.rouletteActive.set(true);
    this.lastWin.set(0);
    this.setMsg('Hagan sus apuestas... ¡Girando!');

    // Generar cinta de 80 números
    const tape: number[] = [];
    for (let i = 0; i < 80; i++) {
      tape.push(Math.floor(Math.random() * 37));
    }
    this.rouletteTape.set(tape);

    // El ganador es el número en la posición 75 (para que ruede bastante)
    const winner = tape[75];
    this.winningNumber.set(null);
    
    // Animación visual de desplazamiento (offset)
    // 75 números * 80px cada número aprox
    this.rouletteOffset.set(75 * 80);

    await this.delay(5000); // Tiempo del giro cinemático
    
    this.rouletteActive.set(false);
    this.winningNumber.set(winner);

    // Lógica simple: Ganas si el número es par o si es el 0 (suerte extrema)
    if (winner === 0) {
       let prize = this.betAmount() * 35;
       this.balance.update(b => b + prize);
       this.lastWin.set(prize);
       this.setMsg(`¡CERO REAL! Increíble premio de $${prize}`);
    } else if (winner % 2 === 0) {
       let prize = this.betAmount() * 2;
       this.balance.update(b => b + prize);
       this.lastWin.set(prize);
       this.setMsg(`¡Rojo/Par gana! Número ${winner}. Ganancia: $${prize}`);
    } else {
       this.setMsg(`Salió el ${winner}. Gana la casa.`);
    }
  }

  // ===================== LÓGICA DE CARTAS (Visual Hands) =====================
  playerHand = signal<Card[]>([]);
  dealerHand = signal<Card[]>([]);
  cardsActive = signal<boolean>(false);
  gameOver = signal<boolean>(false);

  createCard(): Card {
    const v = VALUES[Math.floor(Math.random() * VALUES.length)];
    const s = SUITS[Math.floor(Math.random() * SUITS.length)];
    let points = parseInt(v);
    if (isNaN(points)) points = v === 'A' ? 11 : 10;
    return { value: v, suit: s, points };
  }

  getHandTotal(hand: Card[]): number {
    let total = hand.reduce((acc, c) => acc + c.points, 0);
    // Ajustar Ases
    let aces = hand.filter(c => c.value === 'A').length;
    while (total > 21 && aces > 0) {
      total -= 10;
      aces--;
    }
    return total;
  }

  async playCards() {
    if (this.balance() < this.betAmount()) return this.setMsg('Fondos insuficientes');
    this.balance.update(b => b - this.betAmount());
    this.cardsActive.set(true);
    this.gameOver.set(false);
    this.lastWin.set(0);
    this.playerHand.set([]);
    this.dealerHand.set([]);

    // Reparto inicial con delay para "vuelo"
    this.setMsg('Repartiendo cartas...');
    await this.addCard('player');
    await this.addCard('dealer');
    await this.addCard('player');

    const pTotal = this.getHandTotal(this.playerHand());
    if (pTotal === 21) {
      this.resolveCards();
    } else {
      this.setMsg(`Tienes ${pTotal}. ¿Pides o te quedas?`);
    }
  }

  async addCard(who: 'player' | 'dealer') {
    await this.delay(400); // Delay de vuelo
    const card = this.createCard();
    if (who === 'player') this.playerHand.update(h => [...h, card]);
    else this.dealerHand.update(h => [...h, card]);
  }

  async hitCard() {
    if (!this.cardsActive() || this.gameOver()) return;
    await this.addCard('player');
    const total = this.getHandTotal(this.playerHand());
    if (total > 21) {
       this.resolveCards();
    } else {
       this.setMsg(`Total: ${total}. ¿Otra?`);
    }
  }

  async standCard() {
    if (!this.cardsActive() || this.gameOver()) return;
    this.setMsg('Turno del Crupier...');
    
    let dTotal = this.getHandTotal(this.dealerHand());
    while (dTotal < 17) {
      await this.addCard('dealer');
      dTotal = this.getHandTotal(this.dealerHand());
    }
    this.resolveCards();
  }

  resolveCards() {
    this.cardsActive.set(false);
    this.gameOver.set(true);
    const p = this.getHandTotal(this.playerHand());
    const d = this.getHandTotal(this.dealerHand());

    if (p > 21) {
      this.setMsg('¡Te pasaste! La casa gana.');
    } else if (d > 21 || p > d) {
       let prize = p === 21 && this.playerHand().length === 2 ? this.betAmount() * 2.5 : this.betAmount() * 2;
       this.balance.update(b => b + prize);
       this.lastWin.set(prize);
       this.setMsg(`¡Ganaste! ${p} vs ${d}. Premio: $${prize}`);
    } else if (p === d) {
       this.balance.update(b => b + this.betAmount());
       this.setMsg('Empate técnico. Recuperas tu apuesta.');
    } else {
       this.setMsg(`La casa gana con ${d}.`);
    }
  }

  // ===================== GENERALES =====================
  setMsg(text: string) {
    this.lastMessage.set(text);
  }

  adjustBet(amount: number) {
    if (this.isSpinning() || this.crashActive() || this.cardsActive() || this.rouletteActive()) return;
    let current = this.betAmount() + amount;
    if (current < 10) current = 10;
    if (current > 500) current = 500;
    this.betAmount.set(current);
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  ngOnDestroy() {
    if (this.crashInterval) clearInterval(this.crashInterval);
  }
}
