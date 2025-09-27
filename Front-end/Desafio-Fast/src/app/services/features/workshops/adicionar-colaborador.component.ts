import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ColaboradorService } from '../../colaborador.service';
import { WorkshopService } from '../../workshop.service';
import { HttpClient } from '@angular/common/http';
import { AtaService } from '../../ata.service';

@Component({
  selector: 'app-adicionar-colaborador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adicionar-colaborador.component.html',
  styleUrls: ['./adicionar-colaborador.component.scss']
})
export class AdicionarColaboradorComponent implements OnInit {
  private http = inject(HttpClient);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private colaboradorService = inject(ColaboradorService);
  private workshopService = inject(WorkshopService);
  private ataService = inject(AtaService);

  workshopId!: number;
  workshopNome: string = '';
  workshopDescricao: string = '';
  colaboradorNome: string = '';

  ngOnInit() {
  this.route.queryParams.subscribe(params => {
    this.workshopId = +params['workshopId'];
    console.log('Workshop ID:', this.workshopId); // debug
    if (this.workshopId) {
      this.loadWorkshopDetails();
    }
  });
}
  loadWorkshopDetails() {
    this.workshopService.getById(this.workshopId).subscribe({
  next: (res: any) => {
    console.log('Workshop carregado:', res); // debug
    this.workshopNome = res?.nome || '';
    this.workshopDescricao = res?.descricao || '';
  },
  error: (err) => {
    console.error('Erro ao carregar workshop:', err);
    this.workshopNome = 'Workshop não encontrado';
    this.workshopDescricao = '';
  }
});
  }

  adicionarColaborador() {
    if (!this.colaboradorNome.trim()) {
      alert('Informe o nome do colaborador!');
      return;
    }

    const nomeTrimmed = this.colaboradorNome.trim();

    // Adiciona o colaborador ao workshop
    this.colaboradorService.addToWorkshop(nomeTrimmed, this.workshopId)
      .subscribe({
        next: () => {
          alert('Colaborador adicionado ao workshop com sucesso!');
          this.colaboradorNome = '';

          // Atualiza a ata automaticamente se já existir
          this.ataService.getByWorkshop(this.workshopId).subscribe({
            next: (res: any) => {
              if (res.sucesso && res.dados?.id) {
                // Redireciona para a página de detalhe da ata
                this.router.navigate(['/atas', res.dados.id]);
              }
            },
            error: (err: any) => console.warn('Nenhuma ata encontrada para atualização', err)
          });
        },
        error: (err: any) => {
          if (err.status === 400 && err.error?.mensagem) {
            alert(err.error.mensagem);
          } else if (err.status === 401) {
            alert('Não autorizado. Faça login novamente.');
          } else {
            alert('Erro ao adicionar colaborador.');
          }
        }
      });
  }



  voltar() {
    this.router.navigate(['/workshops']);
  }
}
