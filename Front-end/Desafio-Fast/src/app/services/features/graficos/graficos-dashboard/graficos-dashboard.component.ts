import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { GraficosService } from '../../../graficos.service';

Chart.register(...registerables);

@Component({
  selector: 'app-graficos-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './graficos-dashboard.component.html',
  styleUrls: ['./graficos-dashboard.component.scss']
})
export class GraficosDashboardComponent implements OnInit {
  private graficosService = inject(GraficosService);

  ngOnInit() {
    this.loadWorkshopsPorColaborador();
    this.loadColaboradoresPorWorkshop();
  }

  loadWorkshopsPorColaborador() {
    this.graficosService.getWorkshopsPorColaborador().subscribe({
      next: (data: any) => {
        const ctx: any = document.getElementById('barrasColaborador');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: data.map((d: any) => d.nome),
            datasets: [{
              label: 'Workshops por Colaborador',
              data: data.map((d: any) => d.totalWorkshops),
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }]
          },
          options: { responsive: true }
        });
      },
      error: (err) => console.error('Erro ao carregar gráfico de barras', err)
    });
  }

  loadColaboradoresPorWorkshop() {
    this.graficosService.getColaboradoresPorWorkshop().subscribe({
      next: (data: any) => {
        const ctx: any = document.getElementById('pizzaWorkshop');
        new Chart(ctx, {
          type: 'pie',
          data: {
            labels: data.map((d: any) => d.nome),
            datasets: [{
              label: 'Colaboradores por Workshop',
              data: data.map((d: any) => d.totalColaboradores),
              backgroundColor: [
                '#FF6384','#36A2EB','#FFCE56','#4BC0C0','#9966FF','#FF9F40'
              ]
            }]
          },
          options: { responsive: true }
        });
      },
      error: (err) => console.error('Erro ao carregar gráfico de pizza', err)
    });
  }
}
