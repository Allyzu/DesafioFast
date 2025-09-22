import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // necessário para *ngIf, *ngFor e | date
import { AtaService } from '../../ata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atas-detail',
  standalone: true,
  imports: [CommonModule], // ✅ inclui diretivas e pipes do Angular
  templateUrl: './atas-detail.component.html',
  styleUrls: ['./atas-detail.component.scss']
})
export class AtasDetailComponent implements OnInit {
  ata: any;
  colaboradores: any[] = [];

  constructor(private service: AtaService, private route: ActivatedRoute) {}

 ngOnInit() {
  const id = +this.route.snapshot.paramMap.get('id')!;
  this.loadAta(id);
}

loadAta(id: number) {
  this.service.getById(id).subscribe((data: any) => {
    this.ata = data; 
    this.colaboradores = data.colaboradores; // já vem com id e nome corretos
  });
}

removerColaborador(colaboradorId: number) {
  if (!confirm('Tem certeza que deseja remover este colaborador?')) return;

  this.service.removerColaborador(this.ata.id, colaboradorId).subscribe({
    next: () => {
      this.colaboradores = this.colaboradores.filter(c => c.id !== colaboradorId);
    },
    error: (err) => console.error('Erro ao remover colaborador:', err)
  });
}

}
