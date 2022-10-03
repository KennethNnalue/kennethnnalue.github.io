import { Photo } from './../../interfaces/internal/photo';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageDetailsModalComponent } from 'src/app/modals/image-details-modal/image-details-modal.component';
//import { Image } from '../../interfaces/internal/photo';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss'],
})
export class ImageListComponent implements OnInit {
  photoLiked: boolean = false;
  @Input() searchActive: boolean = false;
  @Input() searchString: string = '';
  @Input() imageList: Photo[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openImageDetails(image: Photo) {
    this.dialog.open(ImageDetailsModalComponent, {
      height: '90vh',
      width: '80vw',
      data: image,
    });
  }

  likePhoto() {
    this.photoLiked = !this.photoLiked;
  }

  getClass(value: number) {
    return `gallery__img--${value + 1}`;
  }
}
