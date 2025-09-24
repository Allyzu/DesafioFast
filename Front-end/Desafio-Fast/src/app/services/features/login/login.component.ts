import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  Email = '';
  Senha = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login({ email: this.Email, senha: this.Senha })
      .subscribe({
        next: (res) => {
         // localStorage.setItem('token', res.token); // salva token
          this.router.navigate(['/colaboradores']);
        },
        error: () => {
          this.error = 'Login inválido';
        }
      });
  }
}
