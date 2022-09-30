import { Component, OnInit } from '@angular/core';
import { Image } from '../../interfaces/internal/image';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss'],
})
export class ImageListComponent implements OnInit {
  public images: Image[] | undefined;

  constructor() {
    this.images = [
      {
        url: 'assets/images/image1.jpg',
        row: '1/3',
        col: '',
      },
      {
        url: 'assets/images/image2.jpg',
        row: '',
        col: '',
      },
      {
        url: 'assets/images/image3.jpg',
        row: '',
        col: '',
      },
      {
        url: 'assets/images/image4.jpg',
        row: '',
        col: '',
      },
      {
        url: 'assets/images/image2.jpg',
        row: '',
        col: '',
      },
      {
        url: 'assets/images/image3.jpg',
        row: '2/4',
        col: '3',
      },
      {
        url: 'assets/images/image4.jpg',
        row: '2/2',
        col: '',
      },
      {
        url: 'assets/images/image4.jpg',
        row: '',
        col: '',
      },
      {
        url: 'assets/images/image2.jpg',
        row: '',
        col: '',
      },
      {
        url: 'assets/images/image3.jpg',
        row: '',
        col: '',
      },
    ];
  }

  ngOnInit(): void {}
}
