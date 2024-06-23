import { AfterViewInit, Component } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home.responsive.scss'],
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    AOS.init();
  }

  links: string[] = [
    'https://www.linkedin.com/in/thomas-edson-dev/',
    'https://github.com/developer-thomas',
    'mailto:andepipous@gmail.com',
  ];
}
