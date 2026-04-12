import { Injectable, inject, PLATFORM_ID, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

export interface AuthResponse {
  message: string;
  token: string;
  user: {
    id: number;
    nombre: string;
    email: string;
    usuario: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);

  // URL del backend - provista por el entorno
  private readonly apiUrl = environment.apiUrl;

  currentUser = signal<any>(null);
  isAuthenticated = signal(false);

  constructor() {
    this.loadUser();
  }

  login(usuario: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.apiUrl}/auth/login`, { usuario, password })
      .pipe(
        tap((res) => {
          this.saveToken(res.token);
          this.currentUser.set(res.user);
          this.isAuthenticated.set(true);
        })
      );
  }

  register(
    nombre: string,
    email: string,
    usuario: string,
    password: string
  ): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.apiUrl}/auth/register`, {
        nombre,
        email,
        usuario,
        password,
      })
      .pipe(
        tap((res) => {
          this.saveToken(res.token);
          this.currentUser.set(res.user);
          this.isAuthenticated.set(true);
        })
      );
  }

  getProfile(): Observable<any> {
    const token = this.getToken();
    return this.http.get(`${this.apiUrl}/auth/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('neon_token');
    }
    this.currentUser.set(null);
    this.isAuthenticated.set(false);
  }

  private saveToken(token: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('neon_token', token);
    }
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('neon_token');
    }
    return null;
  }

  private loadUser() {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('neon_token');
      if (token) {
        this.isAuthenticated.set(true);
        // Optionally load profile
        this.getProfile().subscribe({
          next: (res) => this.currentUser.set(res.user),
          error: () => this.logout(),
        });
      }
    }
  }
}
