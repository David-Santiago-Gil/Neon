import { Component, inject, output } from '@angular/core';
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

  scrollTo(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
  }
}
