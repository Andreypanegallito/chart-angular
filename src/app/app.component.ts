import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import Chart from 'chart.js/auto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'chart-angular';
  chartsBar: any = [];
  chartsBarGroup: any = [];

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.createChart();
      this.createChartGroup();
    }, 1000);
  }

  createChart() {
    var ctx = `chartBar`;
    var chart = new Chart(ctx, {
      type: 'bar', //this denotes tha type of chart
      data: {
        // values on X-Axis
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
        aspectRatio: 2.5,
      },
    });
    this.chartsBar.push(chart);
  }
  createChartGroup() {
    try {
      var chartName = `chartBarGroup`;
      var chart = new Chart(chartName, {
        type: 'bar',
        data: {
          labels: ['1', '2', '3'],
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
          animation: false,

          elements: {
            line: {
              fill: false,
            },
            point: {
              hoverRadius: 7,
              radius: 5,
            },
          },

          //aspectRatio: 2.5,
          indexAxis: 'y',
          //scaleShowValues: true,
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
      this.chartsBarGroup.push(chart);
    } catch (error) {}
  }
}
