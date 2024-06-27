import { AfterViewInit, Component, OnInit } from '@angular/core';
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
export class AboutComponent implements OnInit {
  basicData: any;
  basicOptions: any;

  events: EventItem[];

  constructor() {
    this.events = [
      {
        date: '2018',
        status: 'Analista de Infraestrutura',
      },
      {
        date: '2022',
        status: 'Início na Programação',
      },
      {
        date: '2023',
        status: 'Front End com Angular',
      },
      {
        date: '2024',
        status: 'Back End com Nodejs',
      },
      {
        date: 'Até 2025',
        status: 'Migração de Carreira',
      },
      {
        date: '',
        status: '...',
      },
    ];
  }
  ngOnInit() {
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
