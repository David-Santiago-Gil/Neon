import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JuegosService, Juego } from '../../services/juegos.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class AdminComponent {
  public readonly juegosService = inject(JuegosService);
  
  isSubmitting = signal(false);
  serverMessage = signal('');
  serverError = signal('');

  newJuego: Juego = {
    title: '',
    category: '',
    badge: '',
    rating: 5,
    image: 'img/gold.jpg'
  };

  agregarJuego() {
    if (!this.newJuego.title || !this.newJuego.category || !this.newJuego.image) {
      this.serverError.set('Título, categoría e imagen son obligatorios');
      return;
    }

    this.isSubmitting.set(true);
    this.serverError.set('');
    this.serverMessage.set('');

    this.juegosService.addJuego(this.newJuego).subscribe({
      next: () => {
        this.serverMessage.set('¡Juego agregado exitosamente!');
        this.isSubmitting.set(false);
        // Reset
        this.newJuego = { title: '', category: '', badge: '', rating: 5, image: 'img/gold.jpg' };
        // Refrescar lista completa para que los otros componentes se actualicen solos
        this.juegosService.cargarJuegos();
        setTimeout(() => this.serverMessage.set(''), 3000);
      },
      error: (err) => {
        this.isSubmitting.set(false);
        this.serverError.set(err.error?.message || 'Error al agregar el juego');
      }
    });
  }

  borrarJuego(id: number | undefined) {
    if (!id) return;
    if (!confirm('¿Estás seguro de borrar este juego del sistema?')) return;

    this.juegosService.deleteJuego(id).subscribe({
      next: () => {
        this.juegosService.cargarJuegos();
      },
      error: (err) => {
        alert('Error: ' + (err.error?.message || 'No se pudo eliminar'));
      }
    });
  }
}
