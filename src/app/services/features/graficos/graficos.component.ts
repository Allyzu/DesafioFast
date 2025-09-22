import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ColaboradorService } from '../../colaborador.service';
import { WorkshopService } from '../../workshop.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-graficos',
  standalone: true,
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.scss']
})
export class GraficosComponent implements OnInit, AfterViewInit {
  colaboradores: any[] = [];
  workshops: any[] = [];
  barChart: any;
  pieChart: any;

  constructor(
    private colaboradorService: ColaboradorService,
    private workshopService: WorkshopService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  ngAfterViewInit() {}

  loadData() {
    // Pega todos os colaboradores
    this.colaboradorService.getAll().subscribe((data: any) => {
      this.colaboradores = data;

      // Pega todos os workshops
      this.workshopService.getAll().subscribe((ws: any) => {
        this.workshops = ws;

        // Após carregar os dados, inicializa os gráficos
        setTimeout(() => this.initCharts(), 100);
      });
    });
  }

  initCharts() {
    // Gráfico de Barras: Quantidade de workshops por colaborador
    const ctxBar = document.getElementById('barChart') as HTMLCanvasElement;
    this.barChart = new Chart(ctxBar, {
      type: 'bar',
      data: {
        labels: this.colaboradores.map(c => c.nome),
        datasets: [{
          label: 'Participações',
          data: this.colaboradores.map(c => c.workshops?.length || 0),
          backgroundColor: 'rgba(54, 162, 235, 0.6)'
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: true } }
      }
    });

    // Gráfico de Pizza: Quantidade de colaboradores por workshop
    const ctxPie = document.getElementById('pieChart') as HTMLCanvasElement;
    this.pieChart = new Chart(ctxPie, {
      type: 'pie',
      data: {
        labels: this.workshops.map(w => w.nome),
        datasets: [{
          label: 'Colaboradores',
          data: this.workshops.map(w => w.colaboradores?.length || 0),
          backgroundColor: this.workshops.map(() => this.randomColor())
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom' } }
      }
    });
  }

  // Função para gerar cores aleatórias para pizza
  randomColor() {
    return `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;
  }
}
