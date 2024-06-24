import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home.responsive.scss'],
})
export class HomeComponent {
  links: string[] = [
    'https://www.linkedin.com/in/thomas-edson-dev/',
    'https://github.com/developer-thomas',
    'mailto:andepipous@gmail.com',
  ];
}
