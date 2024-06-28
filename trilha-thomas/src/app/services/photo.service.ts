import { Injectable } from '@angular/core';
import { sample_images } from '../data/education-img';

interface image {
  itemImageSrc: string;
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  allImages: image[] = sample_images;

  constructor() {}

  public getImages() {
    return this.allImages;
  }
}
