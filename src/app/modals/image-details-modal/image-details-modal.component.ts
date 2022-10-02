import { Photo } from 'src/app/interfaces/internal/photo';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-details-modal',
  templateUrl: './image-details-modal.component.html',
  styleUrls: ['./image-details-modal.component.scss'],
})
export class ImageDetailsModalComponent implements OnInit {
  public image: Photo;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.image = data;
  }

  ngOnInit(): void {}
}
