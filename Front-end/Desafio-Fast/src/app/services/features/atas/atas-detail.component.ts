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
    this.service.getById(id).subscribe({
      next: (res: any) => {
        this.ata = res.dados;
        this.colaboradores = res.dados?.colaboradores || [];
      },
      error: (err) => {
        console.error('Erro ao carregar ata:', err);
        this.ata = null;
        this.colaboradores = [];
      }
    });
  }

removerColaborador(colaboradorId: number) {
  if (!confirm('Tem certeza que deseja remover este colaborador?')) return;

  this.service.removerColaborador(this.ata.id, colaboradorId).subscribe({
    next: (res: any) => {
      if (res.sucesso) {
        // Atualiza a lista local de colaboradores
        this.colaboradores = this.colaboradores.filter(c => c.id !== colaboradorId);

        // Exibe a mensagem de sucesso retornada do backend
        alert(res.mensagem);
      } else {
        // Mensagem de erro retornada do backend
        alert(res.mensagem || 'Erro ao remover colaborador.');
        console.warn('Erro ao remover colaborador:', res);
      }
    },
    error: (err: any) => {
      // Log detalhado sem quebrar a interface
      console.error('Erro inesperado ao remover colaborador:', err);
      alert('Ocorreu um erro inesperado ao remover o colaborador.');
    }
  });
}




}
