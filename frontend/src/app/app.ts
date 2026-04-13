import { Component, signal, inject, AfterViewInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FooterComponent } from "./components/footer/footer";
import { HeaderComponent } from "./components/header/header";
import { UsuariosComponent } from "./components/usuarios/usuarios";
import { AdminComponent } from "./components/admin/admin";
import { SoporteComponent } from "./components/soporte/soporte";
import { ScrollService } from './services/scroll';
import { JuegosService } from './services/juegos.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FooterComponent, HeaderComponent, UsuariosComponent, AdminComponent, SoporteComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements AfterViewInit {
  protected readonly title = signal('neon-royale-casino');
  protected readonly scrollService = inject(ScrollService);
  protected readonly juegosService = inject(JuegosService);
  protected readonly authService = inject(AuthService);
  private readonly platformId = inject(PLATFORM_ID);

  showLogin = signal(false);
  showRegister = signal(false);
  showSoporte = signal(false);

  // Loading sim mode
  gameLoading = signal<{active: boolean, title: string}>({active: false, title: ''});
  isVip = signal(false);

  // Contact Form State
  contactData = {
    name: signal(''),
    email: signal(''),
    message: signal('')
  };
  contactErrors = signal<any>({});

  // Salas de juego con scroll horizontal
  gameRooms = [
    {
      title: 'SALA PREMIUM',
      description: 'Experiencia VIP exclusiva',
      badge: 'ELITE',
      image: 'img/1.jpg'
    },
    {
      title: 'RULETA DORADA',
      description: 'Juego clásico de mesa',
      badge: 'POPULAR',
      image: 'img/2.jpg'
    },
    {
      title: 'POKER ELITE',
      description: 'Torneos de alto nivel',
      badge: 'NUEVO',
      image: 'img/3.jpg'
    },
    {
      title: 'BACCARAT ROYAL',
      description: 'Juego de elegancia',
      badge: 'PREMIUM',
      image: 'img/baca.jpg'
    },
    {
      title: 'BLACKJACK VIP',
      description: 'Mesa privada 24/7',
      badge: 'EXCLUSIVO',
      image: 'img/black.jpg'
    },
    {
      title: 'SLOTS LUXE',
      description: 'Máquinas modernas',
      badge: 'HOT',
      image: 'img/dorado.jpg'
    },
    {
      title: 'CLUB ELITE',
      description: 'Acceso restringido',
      badge: 'VIP',
      image: 'img/elite.jpg'
    },
    {
      title: 'NEON LOUNGE',
      description: 'Ambiente futurista',
      badge: 'TRENDING',
      image: 'img/neon.jpg'
    },
    {
      title: 'SALA PRIVADA',
      description: 'Máxima discreción',
      badge: 'ULTIMATE',
      image: 'img/sala.jpg'
    }
  ];

  // Juegos destacados - ahora consumen el JuegosService directamente en el HTML


  scrollTo(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
  }

  jugarAhora(title: string) {
    this.gameLoading.set({ active: true, title });
    setTimeout(() => {
      this.gameLoading.set({ active: false, title: '' });
      alert(`🎮 Iniciando entorno inmersivo para: ${title}\n(¡Simulación completada!)`);
    }, 2500);
  }

  reclamarVIP() {
    if (this.authService.isAuthenticated()) {
      this.isVip.set(true);
      setTimeout(() => this.isVip.set(false), 4000);
    } else {
      this.showLogin.set(true);
    }
  }

  enviarContacto() {
    const errors: any = {};
    if (!this.contactData.name()) errors.name = 'El nombre es obligatorio';
    if (!this.contactData.email()) {
      errors.email = 'El correo es obligatorio';
    } else if (!this.validateEmail(this.contactData.email())) {
      errors.email = 'Correo electrónico no válido';
    }
    if (!this.contactData.message()) errors.message = 'El mensaje no puede estar vacío';

    this.contactErrors.set(errors);

    if (Object.keys(errors).length === 0) {
      console.log('Formulario de contacto enviado:', {
        name: this.contactData.name(),
        email: this.contactData.email(),
        message: this.contactData.message()
      });
      // Reset form
      this.contactData.name.set('');
      this.contactData.email.set('');
      this.contactData.message.set('');
      alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
    }
  }

  onLoginClose() {
    this.showLogin.set(false);
  }

  onRegisterClose() {
    this.showRegister.set(false);
  }

  onSwitchToRegister() {
    this.showLogin.set(false);
    this.showRegister.set(true);
  }

  onSwitchToLogin() {
    this.showRegister.set(false);
    this.showLogin.set(true);
  }

  private validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  ngAfterViewInit() {
    this.initRevealOnScroll();
  }

  private initRevealOnScroll() {
    if (!isPlatformBrowser(this.platformId)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const targets = document.querySelectorAll('.reveal-on-scroll');
    targets.forEach(target => observer.observe(target));
  }
}
