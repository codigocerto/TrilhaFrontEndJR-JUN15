import { AfterViewInit, Component } from '@angular/core';
interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', './about.responsive.scss'],
})
export class AboutComponent implements AfterViewInit {
  basicData: any;
  basicOptions: any;

  events: EventItem[];

  constructor() {
    this.events = [
      {
        status: 'Analista de Infraestrutura',
        date: '2018',
      },
      {
        status: '2022',
        date: 'Início na Programação',
      },
      {
        status: 'Front End com Angular',
        date: '2023',
      },
      {
        status: 'Back End com Nodejs',
        date: '2024',
      },
      {
        status: 'Até 2025',
        date: 'Migração de Carreira',
      },
    ];
  }
  ngAfterViewInit() {
    this.basicData = {
      labels: [
        'Javascript',
        'Typescript',
        'Angular',
        'Sass',
        'Css',
        'Bootstrap',
        'Tailwind',

        'Git',
        'Nodejs',
        'Mongodb',
        'PostgreSQL',
        'Linux',
        'Photoshop',
      ],
      datasets: [
        {
          label: 'Skills',
          data: [75, 80, 87, 72, 80, 80, 70, 60, 65, 60, 70, 60, 65, 100],
          backgroundColor: ['white'],
        },
      ],
    };

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: 'white',
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: 'white',
          },
        },
        x: {
          ticks: {
            color: 'white',
          },
        },
      },
    };
  }
}
