import { Component, input, output, signal, effect, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

const SYMBOLS = ['🍒', '💎', '🔔', '7️⃣', '🎰'];

@Component({
  selector: 'app-game-engine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-engine.html',
  styleUrl: './game-engine.css'
})
export class GameEngineComponent implements OnDestroy {
  // Input: { title: "Blackjack", category: "Cartas" }
  gameData = input<{title: string, category: string}>();
  // Output para cerrar la ventana
  exitGame = output<void>();

  // SALDO VIRTUAL COMPARTIDO
  balance = signal<number>(1000);
  betAmount = signal<number>(10);
  lastMessage = signal<string>('Bienvenido. Haz tu apuesta.');
  lastWin = signal<number>(0);

  // ===================== LÓGICA DE SLOTS =====================
  reels = signal<string[]>(['❓', '❓', '❓']);
  isSpinning = signal<boolean>(false);

  spinSlots() {
    if (this.balance() < this.betAmount()) return this.setMsg('Fondos insuficientes');
    this.balance.update(b => b - this.betAmount());
    this.isSpinning.set(true);
    this.lastWin.set(0);
    this.setMsg('Girando...');
    
    let spins = 0;
    const interval = setInterval(() => {
      this.reels.set([
        SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
      ]);
      spins++;
      if (spins > 10) {
        clearInterval(interval);
        this.isSpinning.set(false);
        this.checkSlotWin();
      }
    }, 100);
  }

  checkSlotWin() {
    const finalReels = this.reels();
    if (finalReels[0] === finalReels[1] && finalReels[1] === finalReels[2]) {
      // Jackpot
      let prize = finalReels[0] === '💎' ? this.betAmount() * 50 : this.betAmount() * 10;
      this.balance.update(b => b + prize);
      this.lastWin.set(prize);
      this.setMsg(`¡JACKPOT! Ganaste $${prize}`);
    } else if (finalReels[0] === finalReels[1] || finalReels[1] === finalReels[2]) {
      // 2 coincidencias simples
      let prize = this.betAmount() * 2;
      this.balance.update(b => b + prize);
      this.lastWin.set(prize);
      this.setMsg(`Ganancia menor: $${prize}`);
    } else {
      this.setMsg('Suerte a la próxima');
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

    // Determinar cuando crashea (mayormente entre 1.00 y 3.00, pero podría subir más)
    this.crashTarget = 1.00 + (Math.random() * Math.random() * 5); // Pesado hacia números bajos

    this.crashInterval = setInterval(() => {
      this.crashMultiplier.update(m => m + 0.03);
      if (this.crashMultiplier() >= this.crashTarget) {
        clearInterval(this.crashInterval);
        this.crashActive.set(false);
        this.hasCrashed.set(true);
        this.setMsg('¡CRASHED! Perdiste la apuesta.');
      }
    }, 50);
  }

  cashOut() {
    if (!this.crashActive()) return;
    clearInterval(this.crashInterval);
    this.crashActive.set(false);
    let prize = parseFloat((this.betAmount() * this.crashMultiplier()).toFixed(2));
    this.balance.update(b => b + prize);
    this.lastWin.set(prize);
    this.setMsg(`¡Retirado con éxito a ${this.crashMultiplier().toFixed(2)}x! Ganancia: $${prize}`);
  }

  // ===================== LÓGICA DE CARTAS (Blackjack Simplificado) =====================
  playerTotal = signal<number>(0);
  dealerTotal = signal<number>(0);
  cardsActive = signal<boolean>(false);
  gameOver = signal<boolean>(false);

  getRandomCardValue(): number {
    // 2-11
    return Math.floor(Math.random() * 10) + 2;
  }

  playCards() {
    if (this.balance() < this.betAmount()) return this.setMsg('Fondos insuficientes');
    this.balance.update(b => b - this.betAmount());
    this.cardsActive.set(true);
    this.gameOver.set(false);
    this.lastWin.set(0);

    this.playerTotal.set(this.getRandomCardValue() + this.getRandomCardValue());
    this.dealerTotal.set(this.getRandomCardValue()); // Solo muestra una
    this.setMsg(this.playerTotal() === 21 ? '¡BLACKJACK Inmediato!' : 'Elige: Pedir o Quedarte');
    
    if (this.playerTotal() === 21) {
      this.resolveCardsWrapUp();
    }
  }

  hitCard() {
    if (!this.cardsActive() || this.gameOver()) return;
    this.playerTotal.update(p => p + this.getRandomCardValue());
    if (this.playerTotal() > 21) {
      this.cardsActive.set(false);
      this.gameOver.set(true);
      this.setMsg('¡Te pasaste de 21! Gana la casa.');
    }
  }

  standCard() {
    if (!this.cardsActive() || this.gameOver()) return;
    let dealer = this.dealerTotal();
    while (dealer < 17) {
      dealer += this.getRandomCardValue();
    }
    this.dealerTotal.set(dealer);
    this.resolveCardsWrapUp();
  }

  resolveCardsWrapUp() {
    this.cardsActive.set(false);
    this.gameOver.set(true);
    const p = this.playerTotal();
    const d = this.dealerTotal();

    if (p === 21 && d !== 21) { // Blackjack natural asumiendo q si saca 21 gana
       let prize = this.betAmount() * 2.5; 
       this.balance.update(b => b + prize);
       this.lastWin.set(prize);
       this.setMsg(`¡Blackjack! Ganaste $${prize}`);
    } else if (p > 21) {
       this.setMsg('Perdiste.');
    } else if (d > 21 || p > d) {
       let prize = this.betAmount() * 2;
       this.balance.update(b => b + prize);
       this.lastWin.set(prize);
       this.setMsg(`¡Le ganaste a la casa! Reclama $${prize}`);
    } else if (p === d) {
       this.balance.update(b => b + this.betAmount());
       this.setMsg(`Empate. Se devuelve tu apuesta de $${this.betAmount()}`);
    } else {
       this.setMsg(`La casa gana (${d} vs ${p}).`);
    }
  }

  // ===================== GENERALES =====================

  setMsg(text: string) {
    this.lastMessage.set(text);
  }

  adjustBet(amount: number) {
    if (this.isSpinning() || this.crashActive() || this.cardsActive()) return;
    
    let current = this.betAmount() + amount;
    if (current < 10) current = 10;
    if (current > 500) current = 500;
    this.betAmount.set(current);
  }

  ngOnDestroy() {
    if (this.crashInterval) clearInterval(this.crashInterval);
  }
}
