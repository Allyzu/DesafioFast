import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../app.config';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WorkshopService {
  private apiUrl = `${environment.apiUrl}/workshops`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAll() {
  return this.http.get(`${this.apiUrl}/GetAllWorkshops`, {
    headers: this.authService.getAuthHeaders()
  });
}

  create(workshop: any) {
    return this.http.post(`${this.apiUrl}/criar`, workshop, {
      headers: this.authService.getAuthHeaders()
    });
  }

  getByDate(date: string) {
  return this.http.get(`${this.apiUrl}/buscar-data?data=${date}`, {
    headers: this.authService.getAuthHeaders()
  });
}

  getById(id: number) {
  return this.http.get(`${this.apiUrl}/${id}`, {
    headers: this.authService.getAuthHeaders()
  });
}

// Novo método para adicionar pelo NOME
  addColaboradorAoWorkshopPorNome(nome: string, workshopId: number): Observable<any> {
  return this.http.post<any>(`https://localhost:7084/api/workshops/colaborador/${nome}/workshops/${workshopId}`, {});
}
}
