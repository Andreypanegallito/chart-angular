import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import Chart from 'chart.js/auto';
import { SharedModule } from '../services/shared.module';
import { PrismService } from '../services/prism.service';
type IndexAxisOption = 'x' | 'y';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'chart-angular';
  chartsBar: any = [];
  chartsBarGroup: any = [];
  highlighted = false;

  constructor(private readonly prismService: PrismService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.createChart('chartBarX', 'x');
      this.createChart('chartBarY', 'y');
      this.createChartGroup('chartBarGroupX', 'x');
      this.createChartGroup('chartBarGroupY', 'y');
    }, 1000);
  }

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.prismService.highlightAll();
      this.highlighted = true;
    }
  }

  createChart(chartName: string, indexXYAxis: IndexAxisOption) {
    try {
      new Chart(chartName, {
        type: 'bar', //Esse é o tipo do gráfico
        data: {
          labels: ['2022-05-10', '2022-05-11', '2022-05-12'], // As legendas referentes aos valores no gráfico
          datasets: [
            //Os valores dos gráficos
            {
              label: 'Parte 1',
              data: [1, 2, 3],
              backgroundColor: '#4287f5',
            },
            {
              label: 'Parte 2',
              data: [4, 5, 6],
              backgroundColor: '#2ebf52',
            },
            {
              label: 'Parte 3',
              data: [7, 8, 9],
              backgroundColor: '#bf2e2e',
            },
          ],
        },

        options: {
          responsive: true,
          indexAxis: indexXYAxis,
        },
      });
    } catch (error) {}
  }

  createChartGroup(chartName: string, indexXYAxis: IndexAxisOption) {
    try {
      new Chart(chartName, {
        type: 'bar',
        data: {
          labels: ['2022-05-10', '2022-05-11', '2022-05-12'],
          datasets: [
            {
              label: 'Parte 1',
              data: [1, 2, 3],
              backgroundColor: '#4287f5',
            },
            {
              label: 'Parte 2',
              data: [4, 5, 6],
              backgroundColor: '#2ebf52',
            },
            {
              label: 'Parte 3',
              data: [7, 8, 9],
              backgroundColor: '#bf2e2e',
            },
          ],
        },
        options: {
          responsive: true,
          indexAxis: indexXYAxis,
          scales: {
            y: {
              stacked: true,
            },
            x: {
              stacked: true,
            },
          },
        },
      });
    } catch (error) {}
  }
}
