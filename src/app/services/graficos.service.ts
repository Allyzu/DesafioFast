import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../app.config';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GraficosService {
  private apiUrl = `${environment.apiUrl}/graficos`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getWorkshopsPorColaborador(): Observable<any> {
    return this.http.get(`${this.apiUrl}/workshops-por-colaborador`, {
      headers: this.authService.getAuthHeaders()
    });
  }

  getColaboradoresPorWorkshop(): Observable<any> {
    return this.http.get(`${this.apiUrl}/colaboradores-por-workshop`, {
      headers: this.authService.getAuthHeaders()
    });
  }
}
