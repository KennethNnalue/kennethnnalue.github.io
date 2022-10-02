import { environment } from './../../environments/environment.prod';
import { Photo } from './../interfaces/internal/photo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, Subject, throwError } from 'rxjs';
import { APIResponse } from '../interfaces/internal/photo';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  publicUrl = `${environment.BASE_URL}query=`;

  //publicUrl =
  //  'https://api.unsplash.com/search/photos?client_id=zjn4tlTA9aEXUQ_OLyqDI435zfkP7gJBQUZW7yUcjiI&query=';
  constructor(private http: HttpClient) {}

  fetchImageList(searchKeyword: string, pageNumber: number) {
    return this.http.get(
      this.publicUrl + searchKeyword + `&page=${pageNumber}`
    );
  }
}
