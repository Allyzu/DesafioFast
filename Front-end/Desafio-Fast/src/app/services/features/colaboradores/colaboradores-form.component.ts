import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../../colaborador.service';
import { WorkshopService } from '../../workshop.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-colaboradores-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './colaboradores-form.component.html',
  styleUrls: ['./colaboradores-form.component.scss']
})
export class ColaboradoresFormComponent implements OnInit {
  nome = '';
  workshops: any[] = [];
  selectedWorkshopId: number | null = null;

  constructor(
    private service: ColaboradorService,
    private workshopService: WorkshopService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadWorkshops();
  }

  loadWorkshops() {
    this.workshopService.getAll().subscribe({
      next: (res: any) => {
        // Garantindo que sempre seja um array
        this.workshops = Array.isArray(res?.dados) ? res.dados : [];
      },
      error: (err) => {
        console.error('Erro ao carregar workshops:', err);
        this.workshops = [];
      }
    });
  }

  save() {
  if (!this.nome || !this.selectedWorkshopId) return;

  // Objeto com propriedades no formato esperado pelo backend
  const colaboradorPayload = {
    nome: this.nome,               // minúsculo
    workshopId: this.selectedWorkshopId
  };

  this.service.criarColaborador(colaboradorPayload)
    .subscribe({
      next: () => {
        alert('Colaborador criado com sucesso!');
        this.router.navigate(['/colaboradores']);
      },
      error: (err: any) => {
        console.error('Erro ao criar colaborador:', err);
        alert(err.error?.mensagem || 'Erro ao criar colaborador.');
      }
    });
}
}
