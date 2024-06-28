import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

interface image {
  value: string;
}
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss', './education.responsive.scss'],
})
export class EducationComponent implements OnInit {
  images: any[] | undefined;

  responsiveOptions: any[] | undefined;

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.images = this.photoService.getImages();

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];
  }
}
