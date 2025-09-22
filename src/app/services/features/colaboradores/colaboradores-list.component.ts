import { Component, OnInit, inject } from '@angular/core';
import { ColaboradorService } from '../../colaborador.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-colaboradores-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colaboradores-list.component.html',
  styleUrls: ['./colaboradores-list.component.scss']
})
export class ColaboradoresListComponent implements OnInit {
  private colaboradorService = inject(ColaboradorService);
  private router = inject(Router);
  colaboradores: any[] = [];

  ngOnInit() {
    this.loadColaboradores();
  }

  loadColaboradores() {
    this.colaboradorService.getAll().subscribe({
      next: (res: any) => this.colaboradores = res,
      error: (err) => console.error('Erro ao carregar colaboradores:', err)
    });
  }

  listarPorOrdemAlfabetica() {
    // Redireciona para o componente de colaboradores ordenados
    this.router.navigate(['/colaboradores/ordenados']);
  }

  novoColaborador() {
    this.router.navigate(['/colaboradores/novo']);
  }
}
