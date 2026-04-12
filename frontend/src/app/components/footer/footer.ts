import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  
  simularCarga(juego: string, event: Event) {
    event.preventDefault();
    alert(`🎮 Cargando recurso inmersivo: ${juego}`);
  }

  mostrarPromocion(promo: string, event: Event) {
    event.preventDefault();
    alert(`💎 Has descubierto la promoción oculta: ${promo}! Entrando a la zona Elite...`);
  }

  redireccionDummy(sitio: string, event: Event) {
    event.preventDefault();
    alert(`🔌 Conectando a los servidores de ${sitio}... (Sistemas activos)`);
  }
}
