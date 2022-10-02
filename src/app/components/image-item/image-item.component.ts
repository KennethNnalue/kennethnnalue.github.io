import { ImageDetailsModalComponent } from './../../modals/image-details-modal/image-details-modal.component';
import { User } from './../../interfaces/internal/photo';
import { Photo } from '../../interfaces/internal/photo';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss'],
})
export class ImageItemComponent implements OnInit {
  @Input() imageUrl: string = '';
  @Input() imageDescription: string = '';
  @Input() ownerPictureUrl: string = '';
  @Input() ownerFirstName: string = '';
  @Input() ownerLastName: string = '';
  @Input() image: any;
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {}

  openImageDetails() {
    this.dialog.open(ImageDetailsModalComponent, {
      height: '90vh',
      width: '80vw',
      data: this.image,
    });
  }
}
