import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../app.config';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ColaboradorService {
  private apiUrl = `${environment.apiUrl}/colaboradores`; 

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/listarcolaboradores`, {
      headers: this.authService.getAuthHeaders()
    });
  }

  getOrdenados(): Observable<any> {
    return this.http.get(`${this.apiUrl}/ordenados`, {
      headers: this.authService.getAuthHeaders()
    });
  }

  criarColaborador(colaborador: { nome: string; workshopId: number }): Observable<any> {
  const token = localStorage.getItem('auth_token'); 
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  return this.http.post(`${this.apiUrl}/Criarcolaboradores`, colaborador, { headers });
}

  addToWorkshop(nome: string, workshopId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${nome}/workshops/${workshopId}`, {}, {
      headers: this.authService.getAuthHeaders()
    });
  }

}