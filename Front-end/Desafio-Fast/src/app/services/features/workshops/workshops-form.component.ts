import { Component } from '@angular/core';
import { WorkshopService } from '../../workshop.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-workshops-form',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ necessário para ngModel
  templateUrl: './workshops-form.component.html',
  styleUrls: ['./workshops-form.component.scss']
})
export class WorkshopsFormComponent {
  nome = '';
  descricao = '';
  dataRealizacao: string = '';

  constructor(private service: WorkshopService, private router: Router) {}

  save() {
  if (!this.nome || !this.dataRealizacao) return;

  this.service.create({ nome: this.nome, descricao: this.descricao, dataRealizacao: this.dataRealizacao })
    .subscribe({
      next: () => {
        alert('Workshop criado com sucesso!');
        this.router.navigate(['/workshops']);
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao criar o workshop. Tente novamente.');
      }
    });
}
}
