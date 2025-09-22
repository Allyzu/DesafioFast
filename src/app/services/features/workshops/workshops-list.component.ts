import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { WorkshopService } from '../../workshop.service';
import { CommonModule, DatePipe } from '@angular/common'; 
import { AtaService } from '../atas/service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-workshops-list',
  standalone: true,
  imports: [CommonModule, DatePipe, FormsModule],
  templateUrl: './workshops-list.component.html',
  styleUrls: ['./workshops-list.component.scss']
})
export class WorkshopsListComponent implements OnInit {

  private workshopService = inject(WorkshopService);
  private ataService = inject(AtaService);
  private router = inject(Router);

  workshops: any[] = [];
  filteredWorkshops: any[] = [];

  filtroAtivo: boolean = false;
  filtroDataAtivo: boolean = false;

  ngOnInit() {
    this.loadWorkshops();
  }

  loadWorkshops() {
    this.workshopService.getAll().subscribe({
      next: (res: any) => {
        this.workshops = Array.isArray(res?.dados) ? res.dados : [];
        this.filteredWorkshops = this.workshops;
      },
      error: (err) => {
        console.error('Erro ao carregar workshops:', err);
        this.workshops = [];
        this.filteredWorkshops = [];
      }
    });
  }

  filterByName(event: Event) {
    const value = (event.target as HTMLInputElement)?.value ?? '';
    this.filtroAtivo = value.trim().length > 0;
    this.filteredWorkshops = this.workshops.filter(w =>
      w.nome.toLowerCase().includes(value.toLowerCase())
    );
  }

  filterByDate(event: Event) {
    const dateStr = (event.target as HTMLInputElement).value;
    this.filtroDataAtivo = !!dateStr;
    if (!dateStr) {
      this.loadWorkshops();
      return;
    }
    this.workshopService.getByDate(dateStr).subscribe({
      next: (res: any) => this.filteredWorkshops = Array.isArray(res) ? res : [],
      error: (err) => {
        console.error('Erro ao filtrar workshops por data:', err);
        this.filteredWorkshops = [];
      }
    });
  }

  verColaboradores(workshopId: number) {
    this.router.navigate(['/workshops', workshopId, 'colaboradores']);
  }

  addColaborador(workshopId: number) {
    this.router.navigate(['/workshops/adicionar-colaborador'], { queryParams: { workshopId } });
  }

  novoWorkshop() {
    this.router.navigate(['/workshops/novo']);
  }

  gerarAta(workshop: any) {
    this.ataService.gerarAta(workshop.id).subscribe({
      next: (res: any) => {
        if (res.sucesso) alert('Ata criada com sucesso!');
        else alert(res.mensagem);
      },
      error: (err: any) => alert(err.error?.mensagem || 'Erro ao criar ata')
    });
  }

  abrirAta(workshop: any) {
    this.router.navigate(['/atas', workshop.id]);
  }
}
