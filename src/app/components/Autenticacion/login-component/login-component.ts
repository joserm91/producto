import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username === environment.autenticacion.user && this.password === environment.autenticacion.pass) {
      // Autenticación exitosa, redirigir a alguna página
      this.router.navigate(['/']); // O a una página principal
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}
