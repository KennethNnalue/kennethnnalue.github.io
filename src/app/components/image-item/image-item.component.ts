import { Image } from '../../interfaces/internal/image';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss'],
})
export class ImageItemComponent implements OnInit {
  image: Image | undefined;
  images: string[] = [
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNjcxODV8MHwxfHNlYXJjaHwxMnx8b2ZmaWNlfGVufDB8fHx8MTY2NDU3MTg2MQ&ixlib=rb-1.2.1&q=80',
    'https://images.unsplash.com/photo-1570126688035-1e6adbd61053?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNjcxODV8MHwxfHNlYXJjaHwxNXx8b2ZmaWNlfGVufDB8fHx8MTY2NDU3MTg2MQ&ixlib=rb-1.2.1&q=80',
    'https://images.unsplash.com/photo-1577017040065-650ee4d43339?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNjcxODV8MHwxfHNlYXJjaHwxOHx8b2ZmaWNlfGVufDB8fHx8MTY2NDU3MTg2MQ&ixlib=rb-1.2.1&q=80',
    'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNjcxODV8MHwxfHNlYXJjaHwxN3x8b2ZmaWNlfGVufDB8fHx8MTY2NDU3MTg2MQ&ixlib=rb-1.2.1&q=80',
  ];
  constructor() {
    this.image = {
      url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNjcxODV8MHwxfHNlYXJjaHwxMXx8b2ZmaWNlfGVufDB8fHx8MTY2NDU3MTg2MQ&ixlib=rb-1.2.1&q=80',
      row: '1/3',
      col: '',
    };
  }
  ngOnInit(): void {}
}
