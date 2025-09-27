import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../app.config';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AtaService {
  private apiUrl = `${environment.apiUrl}/atas`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Listar todas as atas
  getAll() {
    return this.http.get(`${this.apiUrl}/listar`, {
      headers: this.authService.getAuthHeaders()
    });
  }

  // Buscar ata por id
  getById(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`, { // <-- rota corrigida
      headers: this.authService.getAuthHeaders()
    });
  }

  // Criar ata automaticamente
  criar(workshopId: number) {
    return this.http.post(`${this.apiUrl}/gerar-ata/${workshopId}`, {}, {
      headers: this.authService.getAuthHeaders()
    });
  }

  // Adicionar colaborador à ata
  adicionarColaborador(ataId: number, colaboradorId: number) {
    return this.http.put(`${this.apiUrl}/${ataId}/colaboradores/${colaboradorId}`, {}, {
      headers: this.authService.getAuthHeaders()
    });
  }

  getByWorkshop(workshopId: number) {
    return this.http.get(`${this.apiUrl}/workshop/${workshopId}`, {
      headers: this.authService.getAuthHeaders()
    });
  }

  // Remover colaborador da ata
  removerColaborador(ataId: number, colaboradorId: number) {
    return this.http.delete(`${this.apiUrl}/${ataId}/colaboradores/${colaboradorId}`, {
      headers: this.authService.getAuthHeaders()
    });
  }
}
