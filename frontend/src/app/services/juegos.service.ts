import { Injectable, inject, PLATFORM_ID, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export interface Juego {
  id?: number;
  title: string;
  category: string;
  badge: string;
  rating: number;
  image: string;
  created_at?: string;
}

@Injectable({
  providedIn: 'root'
})
export class JuegosService {
  private readonly http = inject(HttpClient);
  private readonly authService = inject(AuthService);
  private readonly apiUrl = environment.apiUrl;
  
  // Estado local para compartir los juegos a través de la app
  juegos = signal<Juego[]>([]);

  constructor() {
    this.cargarJuegos();
  }

  cargarJuegos() {
    this.getJuegos().subscribe({
      next: (data) => this.juegos.set(data),
      error: (err) => console.error('Error cargando juegos', err)
    });
  }

  getJuegos(): Observable<Juego[]> {
    return this.http.get<Juego[]>(`${this.apiUrl}/juegos`);
  }

  addJuego(juego: Juego): Observable<any> {
    const token = this.authService.getToken();
    return this.http.post(`${this.apiUrl}/juegos`, juego, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }

  deleteJuego(id: number): Observable<any> {
    const token = this.authService.getToken();
    return this.http.delete(`${this.apiUrl}/juegos/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
}
