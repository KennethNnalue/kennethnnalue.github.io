import { Injectable } from '@angular/core';
import { Photo, Urls, User } from '../interfaces/internal/photo';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor() {}

  transformImage(imageList: any) {
    let photoList: Photo[] = [];
    imageList.forEach((image) => {
      let user: User = {
        first_name: image.user.first_name,
        last_name: image.user.last_name,
        twitter_username: image.user.twitter_username,
        portfolio_url: image.user.porfolio_url,
        profile_image: image.user.profile_image.medium,
        location: image.user.location,
        total_photos: image.user.total_photos,
      };
      let urls: Urls = {
        full: image.urls.full,
        regular: image.urls.regular,
        download: image.links.download_location,
      };

      let photo: Photo = {
        id: image.id,
        width: image.width,
        height: image.height,
        url: urls,
        createdBy: user,
        description: image.description,
        views: image.user.total_photos,
        likes: image.likes,
        created_at: image.created_at,
      };
      photoList.push(photo);
    });

    return photoList;
  }
  // transformImage(imageList: any) {
  //   let photoList: Photo[] = [];
  //   for (var image of Object.keys(imageList)) {
  //     if (image === 'id') break;

  //     let user: User = {
  //       first_name: imageList[image].user.first_name,
  //       last_name: imageList[image].user.last_name,
  //       twitter_username: imageList[image].user.twitter_username,
  //       portfolio_url: imageList[image].user.porfolio_url,
  //       profile_image: imageList[image].user.profile_image.medium,
  //       location: imageList[image].user.location,
  //       total_photos: imageList[image].user.total_photos,
  //     };
  //     let urls: Urls = {
  //       full: imageList[image].urls.full,
  //       regular: imageList[image].urls.regular,
  //       download: imageList[image].links.download_location,
  //     };

  //     let photo: Photo = {
  //       id: imageList[image].id,
  //       width: imageList[image].width,
  //       height: imageList[image].height,
  //       url: urls,
  //       createdBy: user,
  //       description: imageList[image].description,
  //       views: imageList[image].user.total_photos,
  //       likes: imageList[image].likes,
  //       created_at: imageList[image].created_at,
  //     };
  //     photoList.push(photo);
  //   }
  //   return photoList;
  // }
}
