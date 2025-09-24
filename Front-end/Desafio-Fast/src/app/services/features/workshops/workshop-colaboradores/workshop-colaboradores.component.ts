import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WorkshopService } from '../../../workshop.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-workshop-colaboradores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './workshop-colaboradores.component.html',
  styleUrls: ['./workshop-colaboradores.component.scss']
})
export class WorkshopColaboradoresComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private workshopService = inject(WorkshopService);

  workshopId!: number;
  workshopNome: string = '';
  colaboradores: any[] = [];

  ngOnInit() {
    this.workshopId = Number(this.route.snapshot.paramMap.get('id'));
    if (!this.workshopId) {
      alert('Workshop inválido!');
      this.router.navigate(['/workshops']);
      return;
    }
    this.loadColaboradores();
  }

  loadColaboradores() {
    this.workshopService.getById(this.workshopId).subscribe({
      next: (res: any) => {
        this.workshopNome = res?.nome;
        this.colaboradores = res?.colaboradores || [];
      },
      error: (err: any) => console.error('Erro ao carregar colaboradores:', err)
    });
  }

  voltar() {
    this.router.navigate(['/workshops']);
  }
}
