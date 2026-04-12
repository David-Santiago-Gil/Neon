import { Component, input, output, signal, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class UsuariosComponent {
  private readonly authService = inject(AuthService);
  private readonly platformId = inject(PLATFORM_ID);

  showLogin = input<boolean>(false);
  showRegister = input<boolean>(false);

  closeLogin = output<void>();
  closeRegister = output<void>();
  switchToRegister = output<void>();
  switchToLogin = output<void>();

  isLoading = signal(false);
  loginSuccess = signal(false);
  registerSuccess = signal(false);

  // Login Form State
  loginData = {
    user: signal(''),
    pass: signal(''),
  };
  loginErrors = signal<any>({});
  loginServerError = signal('');

  // Register Form State
  regData = {
    name: signal(''),
    email: signal(''),
    user: signal(''),
    pass: signal(''),
    confirmPass: signal(''),
  };
  regErrors = signal<any>({});
  regServerError = signal('');

  autenticar() {
    const errors: any = {};
    if (!this.loginData.user()) errors.user = 'El usuario es obligatorio';
    if (!this.loginData.pass()) errors.pass = 'La contraseña es obligatoria';

    this.loginErrors.set(errors);
    this.loginServerError.set('');

    if (Object.keys(errors).length === 0) {
      this.isLoading.set(true);
      this.authService
        .login(this.loginData.user(), this.loginData.pass())
        .subscribe({
          next: (res) => {
            this.isLoading.set(false);
            this.loginSuccess.set(true);
            setTimeout(() => {
              this.loginSuccess.set(false);
              this.closeLogin.emit();
              this.loginData.user.set('');
              this.loginData.pass.set('');
            }, 1500);
          },
          error: (err) => {
            this.isLoading.set(false);
            this.loginServerError.set(
              err.error?.message || 'Error al iniciar sesión'
            );
          },
        });
    }
  }

  crearCuenta() {
    const errors: any = {};
    if (!this.regData.name()) errors.name = 'El nombre es obligatorio';
    if (!this.regData.email()) {
      errors.email = 'El correo es obligatorio';
    } else if (!this.validateEmail(this.regData.email())) {
      errors.email = 'Correo no válido';
    }
    if (!this.regData.user()) errors.user = 'El usuario es obligatorio';
    if (!this.regData.pass()) errors.pass = 'La contraseña es obligatoria';
    if (this.regData.pass() !== this.regData.confirmPass()) {
      errors.confirmPass = 'Las contraseñas no coinciden';
    }

    this.regErrors.set(errors);
    this.regServerError.set('');

    if (Object.keys(errors).length === 0) {
      this.isLoading.set(true);
      this.authService
        .register(
          this.regData.name(),
          this.regData.email(),
          this.regData.user(),
          this.regData.pass()
        )
        .subscribe({
          next: (res) => {
            this.isLoading.set(false);
            this.registerSuccess.set(true);
            setTimeout(() => {
              this.registerSuccess.set(false);
              this.closeRegister.emit();
              this.regData.name.set('');
              this.regData.email.set('');
              this.regData.user.set('');
              this.regData.pass.set('');
              this.regData.confirmPass.set('');
            }, 1500);
          },
          error: (err) => {
            this.isLoading.set(false);
            this.regServerError.set(
              err.error?.message || 'Error al registrar'
            );
          },
        });
    }
  }

  onOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('usuarios-overlay')) {
      if (this.showLogin()) this.closeLogin.emit();
      if (this.showRegister()) this.closeRegister.emit();
    }
  }

  private validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
