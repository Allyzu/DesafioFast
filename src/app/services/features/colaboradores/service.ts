import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradorService } from '../../colaborador.service';

@Component({
  selector: 'app-colaboradores-ordenados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.html',
  styleUrls: ['./service.scss']
})
export class ColaboradoresOrdenadosComponent implements OnInit {
  private colaboradorService = inject(ColaboradorService);
  colaboradores: any[] = [];

  ngOnInit() {
    this.loadColaboradoresOrdenados();
  }

  loadColaboradoresOrdenados() {
    this.colaboradorService.getOrdenados().subscribe({
  next: (res: any) => {
    this.colaboradores = res;
  },
  error: (err: any) => {
    console.error('Erro ao carregar colaboradores ordenados:', err);
  }
    });
  }
}
