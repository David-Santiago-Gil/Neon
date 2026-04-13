import { Component, inject, output, signal } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  protected readonly scrollService = inject(ScrollService);
  public readonly authService = inject(AuthService);

  openLogin = output<void>();
  openRegister = output<void>();
  
  isMenuOpen = signal<boolean>(false);

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  scrollTo(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
  }
}
