import { Component, signal, inject, AfterViewInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FooterComponent } from "./components/footer/footer";
import { HeaderComponent } from "./components/header/header";
import { UsuariosComponent } from "./components/usuarios/usuarios";
import { ScrollService } from './services/scroll';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FooterComponent, HeaderComponent, UsuariosComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements AfterViewInit {
  protected readonly title = signal('neon-royale-casino');
  protected readonly scrollService = inject(ScrollService);
  private readonly platformId = inject(PLATFORM_ID);

  showLogin = signal(false);
  showRegister = signal(false);

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

  // Juegos destacados
  gameCards = [
    {
      title: 'Neon Slots',
      category: 'Slots',
      badge: 'NUEVO',
      rating: 5,
      image: 'img/Slots.jpg'
    },
    {
      title: 'Gold Roulette',
      category: 'Mesa',
      badge: 'HOT',
      rating: 5,
      image: 'img/gold.jpg'
    },
    {
      title: 'Blackjack VIP',
      category: 'Cartas',
      badge: '',
      rating: 5,
      image: 'img/VIP.jpg'
    },
    {
      title: 'Poker Master',
      category: 'Cartas',
      badge: 'HOT',
      rating: 5,
      image: 'img/Master.jpg'
    },
    {
      title: 'Crash Royale',
      category: 'Crash',
      badge: 'NUEVO',
      rating: 4,
      image: 'img/clash.jpg'
    },
    {
      title: 'Mega Wheel',
      category: 'En Vivo',
      badge: '',
      rating: 5,
      image: 'img/Wheel.jpg'
    },
    {
      title: 'Golden Keno',
      category: 'Lotería',
      badge: '',
      rating: 4,
      image: 'img/Keno.jpg'
    },
    {
      title: 'Baccarat Gold',
      category: 'Mesa',
      badge: 'NUEVO',
      rating: 5,
      image: 'img/Baccarat.jpg'
    }
  ];

  scrollTo(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
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
