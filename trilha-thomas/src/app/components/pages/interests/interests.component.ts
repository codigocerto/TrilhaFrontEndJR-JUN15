import { Component } from '@angular/core';
import { boxContent } from '../../../models/BoxContent.interface';
import { sample_boxes } from '../../../data/interests-img';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss', './interests.responsive.scss'],
})
export class InterestsComponent {
  boxes: boxContent[] = sample_boxes;

  contentObj!: boxContent;

  showContent(getContent: string, getImage: string, getAlt: string) {
    this.contentObj = { content: getContent, image: getImage, alt: getAlt };
  }
}
