import { Component, input, output, signal, effect, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

const SYMBOLS = ['🍒', '💎', '🔔', '7️⃣', '🎰', '🍋', '🍉', '🍇', '⭐'];
const SUITS = ['♥️', '♦️', '♣️', '♠️'];
const VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// Números de la ruleta en orden estándar de casino (0-36)
const ROULETTE_NUMBERS = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];

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

  // ===================== LÓGICA DE SLOTS =====================
  reels = signal<string[][]>([['❓'], ['❓'], ['❓']]);
  isSpinning = signal<boolean>(false);

  async spinSlots() {
    if (this.balance() < this.betAmount()) return this.setMsg('Fondos insuficientes');
    this.balance.update(b => b - this.betAmount());
    this.isSpinning.set(true);
    this.lastWin.set(0);
    this.setMsg('Girando la suerte...');
    
    const newReels: string[][] = [];
    for (let i = 0; i < 3; i++) {
       const column: string[] = [];
       for (let j = 0; j < 20; j++) {
         column.push(SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]);
       }
       newReels.push(column);
    }
    this.reels.set(newReels);

    await this.delay(2000); 
    
    this.isSpinning.set(false);
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

    this.crashTarget = 1.00 + (Math.random() * Math.random() * 8);

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

  // ===================== LÓGICA DE RULETA (CIRCULAR) =====================
  rouletteActive = signal<boolean>(false);
  winningNumber = signal<number | null>(null);
  rouletteRotation = signal<number>(0);

  async spinRoulette() {
    if (this.balance() < this.betAmount()) return this.setMsg('Fondos insuficientes');
    if (this.rouletteActive()) return;

    this.balance.update(b => b - this.betAmount());
    this.rouletteActive.set(true);
    this.lastWin.set(0);
    this.setMsg('¡No va más! Girando la ruleta...');

    const randomIndex = Math.floor(Math.random() * ROULETTE_NUMBERS.length);
    const winner = ROULETTE_NUMBERS[randomIndex];
    
    // Cada número ocupa 360 / 37 grados (~9.72 deg)
    const anglePerNumber = 360 / 37;
    // Rotación acumulativa: rotación actual + 5 vueltas + ángulo del ganador
    const extraSpins = 360 * 5;
    const targetAngle = randomIndex * anglePerNumber;
    
    this.rouletteRotation.update(curr => curr + extraSpins + targetAngle);

    await this.delay(5000); 
    
    this.rouletteActive.set(false);
    this.winningNumber.set(winner);

    if (winner === 0) {
       let prize = this.betAmount() * 35;
       this.balance.update(b => b + prize);
       this.lastWin.set(prize);
       this.setMsg(`¡EL CERRRRRRO! Premio Mayor: $${prize}`);
    } else if (randomIndex % 2 !== 0) { // En nuestro array los impares son rojos (simplificado)
       let prize = this.betAmount() * 2;
       this.balance.update(b => b + prize);
       this.lastWin.set(prize);
       this.setMsg(`¡ROJO gana! Salió el ${winner}. Ganaste $${prize}`);
    } else {
       this.setMsg(`Salió el ${winner} (Negro). Gana la casa.`);
    }
  }

  // ===================== LÓGICA DE CARTAS =====================
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

    this.setMsg('Repartiendo cartas...');
    await this.addCard('player');
    await this.addCard('dealer');
    await this.addCard('player');

    const pTotal = this.getHandTotal(this.playerHand());
    if (pTotal === 21) {
      this.resolveCards();
    } else {
      this.setMsg(`Total: ${pTotal}. Tu turno.`);
    }
  }

  async addCard(who: 'player' | 'dealer') {
    await this.delay(400); 
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
    }
  }

  async standCard() {
    if (!this.cardsActive() || this.gameOver()) return;
    this.setMsg('Crupier jugando...');
    
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
      this.setMsg('Te pasaste. Gana la casa.');
    } else if (d > 21 || p > d) {
       let prize = p === 21 && this.playerHand().length === 2 ? this.betAmount() * 2.5 : this.betAmount() * 2;
       this.balance.update(b => b + prize);
       this.lastWin.set(prize);
       this.setMsg(`¡Ganas tú! ${p} vs ${d}. Premio: $${prize}`);
    } else if (p === d) {
       this.balance.update(b => b + this.betAmount());
       this.setMsg('Push (Empate). Se devuelve apuesta.');
    } else {
       this.setMsg(`La casa gana (${d}).`);
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
