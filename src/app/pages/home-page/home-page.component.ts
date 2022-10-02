import { Urls } from './../../interfaces/internal/photo';
import { User } from './../../interfaces/internal/photo';
import { ImageService } from './../../services/image.service';
import { ApiService } from './../../services/api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { APIResponse, Photo } from 'src/app/interfaces/internal/photo';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public searchKeyword: string = '';
  images: Photo[] = [];
  newImages: Photo[] = [];
  public imageList: any = [];
  pageNumber: number = 1;
  searchString: string = '';

  totalNumberOfPages: number | undefined;
  totalItems: number | undefined;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    let randomWord = new Date().toDateString().substring(0, 1);
    //this.getImages(randomWord + 'a');
  }

  onSubmit(form: NgForm) {
    this.searchString = String(form.value['searchKeyword']);
    console.log(form.value);
    this.pageNumber = 1;
    this.getImages(this.searchString);
  }
  private getImages(searchString: string) {
    this.apiService
      .fetchImageList(searchString, this.pageNumber)
      .subscribe((res) => {
        let results = res['results'];

        this.totalNumberOfPages = res['total_pages'];
        this.totalItems = res['total'];
        if (this.pageNumber == 1) {
          this.newImages = [];
          this.images = this.imageService.transformImage(results);
        } else if (this.pageNumber > 1) {
          this.newImages = this.imageService.transformImage(results);
          this.images = [...this.images, ...this.newImages];
        }
      });
  }

  loadMorePages() {
    if (this.searchString === '') return;

    this.pageNumber++;
    if (this.pageNumber > this.totalNumberOfPages) {
      console.log('totalNumberOfPages', this.totalNumberOfPages);
      console.log('pageNumber', this.pageNumber);

      return;
    }
    this.getImages(this.searchString);
  }
}
