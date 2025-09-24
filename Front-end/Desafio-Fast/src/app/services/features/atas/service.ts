import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../app.config';
import { AuthService } from '../../auth.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AtaService {
  private apiUrl = `${environment.apiUrl}/atas`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  /** Método para gerar ata automaticamente */
  gerarAta(workshopId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/gerar-ata/${workshopId}`, {}, {
      headers: this.authService.getAuthHeaders()
    });
  }
}