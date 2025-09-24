import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { environment } from '../app.config';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'auth_token';
  //private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Verifica se já existe token no localStorage
  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  // Login - envia email e senha para o backend
  login(credentials: { email: string; senha: string }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.apiUrl}/auth/login`, credentials)
      .pipe(
        tap(res => {
          localStorage.setItem(this.tokenKey, res.token);
          this.isLoggedInSubject.next(true);
        })
      );
  }

  // Chamado no app.component.ts no ngOnInit()


  // Logout - remove token e atualiza estado
  logout() {
    localStorage.removeItem(this.tokenKey);
    this.isLoggedInSubject.next(false);
  }

  // Retorna token atual
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Cabeçalhos autorizados para requisições
  getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      Authorization: token ? `Bearer ${token}` : ''
    });
  }

  // Função simples de verificação de login (boolean)
  isLoggedIn(): boolean {
    return this.hasToken();
  }
}
