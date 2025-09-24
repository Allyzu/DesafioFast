import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // necessário para *ngFor e | date
import { AtaService } from '../../ata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atas-list',
  standalone: true,
  imports: [CommonModule], // ✅ inclui diretivas e pipes do Angular
  templateUrl: './atas-list.component.html',
  styleUrls: ['./atas-list.component.scss']
})
export class AtasListComponent implements OnInit {
  atas: any[] = [];

  constructor(private atasService: AtaService, private router: Router) {}

  ngOnInit() {
    this.loadAtas();
  }

  loadAtas() {
  this.atasService.getAll().subscribe({
    next: (res: any) => {
      this.atas = Array.isArray(res?.dados) ? res.dados : [];
    },
    error: (err) => {
      console.error('Erro ao carregar atas:', err);
      this.atas = [];
    }
  });
}

criarAta(workshopId: number) {
  this.atasService.criar(workshopId).subscribe({
    next: (data: any) => {
      alert('Ata criada com sucesso!');
      this.loadAtas(); // atualiza a lista depois de criar
    },
    error: (err) => {
      alert(err.error.mensagem || 'Erro ao criar ata');
    }
  });
}

  openAta(ataId: number) {
    this.router.navigate(['/atas', ataId]);
  }
}
