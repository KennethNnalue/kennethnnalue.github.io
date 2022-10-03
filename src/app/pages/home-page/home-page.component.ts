import { Subscription } from 'rxjs';

import { ImageService } from './../../services/image.service';
import { ApiService } from './../../services/api.service';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Photo } from 'src/app/interfaces/internal/photo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  images: Photo[] = [];
  newImages: Photo[] = [];
  pageNumber: number = 1;
  searchString: string = '';
  loadMore: boolean = true;
  searchActive: boolean = false;
  apiSubscription: Subscription = undefined;
  @ViewChild('username') input: ElementRef<HTMLInputElement>;

  totalNumberOfPages: number | undefined;
  totalItems: number | undefined;

  constructor(
    private apiService: ApiService,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    let randomWord = new Date().toDateString().substring(0, 1);
    this.getImages(randomWord);
  }

  onSubmit(form: NgForm) {
    this.searchActive = true;
    this.searchString = String(form.value['searchKeyword']);
    this.pageNumber = 1;
    this.getImages(this.searchString);
  }
  private getImages(searchString: string) {
    this.apiSubscription = this.apiService
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
      this.loadMore = false;
      return;
    }
    this.getImages(this.searchString);
  }
  changeSearchString(inputElement: HTMLElement) {
    this.searchActive = true;
    this.images = [];
    let inputValue = inputElement.innerHTML.substring(
      0,
      inputElement.innerHTML.length - 1
    );
    this.searchString = inputValue;
    this.getImages(inputValue);
  }

  ngOnDestroy(): void {
    this.apiSubscription.unsubscribe();
  }
}
