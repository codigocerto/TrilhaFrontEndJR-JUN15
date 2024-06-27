import { Component } from '@angular/core';
import { boxContent } from '../../../models/BoxContent.interface';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss', './interests.responsive.scss'],
})
export class InterestsComponent {
  content!: string | undefined;
  image!: string | undefined;

  boxes: boxContent[] = [
    {
      id: 1,
      icon: '../../../../assets/interests/icons/kung-fu-icon.png',
      content: 'Sou Maai Saang Chong em Wing Chun e N3 em Sanda',
      image: '../../../../assets/interests/content-img/kungfu-img.jpg',
    },
    {
      id: 2,
      icon: '../../../../assets/interests/icons/sing-icon.png',
      content: 'Canto em casas de shows e sou vocalista de uma banda de rock',
      image: '../../../../assets/interests/content-img/sing-img.jpg',
    },
    {
      id: 3,
      icon: '../../../../assets/interests/icons/xadrez-icon.png',
      content: 'Jogo xadrez desde criança e já ganhei alguns campeonatos',
      image: '../../../../assets/interests/content-img/xadrez-img.jpeg',
    },
    {
      id: 4,
      icon: '../../../../assets/interests/icons/videogame-icon.png',
      content: 'Nas horas vagas jogo video-games, prefiro MMORPGS',
      image: '../../../../assets/interests/content-img/videogame-img.jpg',
    },
    {
      id: 5,
      icon: '../../../../assets/interests/icons/travel-icon.png',
      content: 'Destaque no curso de formação e ganhei uma viagem world-wide',
      image: '../../../../assets/interests/content-img/travel-img.jpg',
    },
    {
      id: 6,
      icon: '../../../../assets/interests/icons/officer-icon.png',
      content: 'Em 2018 ingressei na marinha por cuncurso público',
      image: '../../../../assets/interests/content-img/officer-img.jpg',
    },
    {
      id: 7,
      icon: '../../../../assets/interests/icons/motorcycle-icon.png',
      content: 'Gosto de pegar a estrada de moto e fazer trilhas em ramais',
      image: '../../../../assets/interests/content-img/motor-img.jpg',
    },
    {
      id: 8,
      icon: '../../../../assets/interests/icons/futebol-icon.png',
      content: 'Como goleiro participo de campeonatos de futebol',
      image: '../../../../assets/interests/content-img/futebol-img.jpeg',
    },
    {
      id: 9,
      icon: '../../../../assets/interests/icons/cooker-icon.png',
      content: 'Sou cozinheiro e já trabalhei em cozinhas industriais',
      image: '../../../../assets/interests/content-img/cooker-img.jpg',
    },
  ];

  teste(content: string | undefined, image: string | undefined) {
    this.content = content;
    this.image = image;
  }
}
