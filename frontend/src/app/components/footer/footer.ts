import { Component, output } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  
  scrollToNav = output<string>();
  abrirSoporte = output<void>();

  scrollAction(seccion: string, event: Event) {
    event.preventDefault();
    this.scrollToNav.emit(seccion);
  }

  showApoyo(event: Event) {
    event.preventDefault();
    this.abrirSoporte.emit();
  }
}
