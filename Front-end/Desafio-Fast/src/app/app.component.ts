import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './services/features/navbar/navbar.component';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, NavbarComponent, CommonModule, RouterModule],
  template: `
    <app-navbar *ngIf="authService.isLoggedIn$ | async"></app-navbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Desafiofast';

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
  this.authService.setLoggedIn(this.authService.isLoggedIn());
}

  
}
