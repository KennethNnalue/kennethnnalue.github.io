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
  @Input() imageList: Photo[] = [];
  // imageList = [
  //   {
  //     id: '0',
  //     created_at: '2022-09-30T22:01:10Z',
  //     updated_at: '2022-10-01T09:33:06Z',
  //     promoted_at: null,
  //     width: 7102,
  //     height: 4735,
  //     color: '#c0c0a6',
  //     blur_hash: 'LWF=z8a$bbRj4Txts:t8o}R+V@xF',
  //     description: null,
  //     alt_description: null,
  //     urls: {
  //       raw: 'https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixid=MnwzNjcxODV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1',
  //       full: 'https://images.unsplash.com/photo-1664575197229-3bbebc281874?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNjcxODV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80',
  //       regular:
  //         'https://images.unsplash.com/photo-1664575197229-3bbebc281874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=1080',
  //       small:
  //         'https://images.unsplash.com/photo-1664575197229-3bbebc281874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=400',
  //       thumb:
  //         'https://images.unsplash.com/photo-1664575197229-3bbebc281874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=200',
  //       small_s3:
  //         'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1664575197229-3bbebc281874',
  //     },
  //     links: {
  //       self: 'https://api.unsplash.com/photos/MYomVPpR5FU',
  //       html: 'https://unsplash.com/photos/MYomVPpR5FU',
  //       download:
  //         'https://unsplash.com/photos/MYomVPpR5FU/download?ixid=MnwzNjcxODV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY2NDYyMTY4Ng',
  //       download_location:
  //         'https://api.unsplash.com/photos/MYomVPpR5FU/download?ixid=MnwzNjcxODV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY2NDYyMTY4Ng',
  //     },
  //     likes: 3,
  //     liked_by_user: false,
  //     current_user_collections: [],
  //     sponsorship: {
  //       impression_urls: [
  //         'https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=10864971&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif',
  //       ],
  //       tagline: 'Closer to what you love',
  //       tagline_url:
  //         'https://www.microsoft.com/windows/?ocid=UnsplashFY22_soc_pmc_win_',
  //       sponsor: {
  //         id: 'kSlnstJTnY8',
  //         updated_at: '2022-10-01T10:40:13Z',
  //         username: 'windows',
  //         name: 'Windows',
  //         first_name: 'Windows',
  //         last_name: null,
  //         twitter_username: 'windows',
  //         portfolio_url: 'https://www.windows.com',
  //         bio: 'Makes the everyday easier.',
  //         location: null,
  //         links: {
  //           self: 'https://api.unsplash.com/users/windows',
  //           html: 'https://unsplash.com/@windows',
  //           photos: 'https://api.unsplash.com/users/windows/photos',
  //           likes: 'https://api.unsplash.com/users/windows/likes',
  //           portfolio: 'https://api.unsplash.com/users/windows/portfolio',
  //           following: 'https://api.unsplash.com/users/windows/following',
  //           followers: 'https://api.unsplash.com/users/windows/followers',
  //         },
  //         profile_image: {
  //           small:
  //             'https://images.unsplash.com/profile-1633364056312-0319b9fc4586image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32',
  //           medium:
  //             'https://images.unsplash.com/profile-1633364056312-0319b9fc4586image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64',
  //           large:
  //             'https://images.unsplash.com/profile-1633364056312-0319b9fc4586image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128',
  //         },
  //         instagram_username: 'windows',
  //         total_collections: 1,
  //         total_likes: 0,
  //         total_photos: 179,
  //         accepted_tos: true,
  //         for_hire: false,
  //         social: {
  //           instagram_username: 'windows',
  //           portfolio_url: 'https://www.windows.com',
  //           twitter_username: 'windows',
  //           paypal_email: null,
  //         },
  //       },
  //     },
  //     topic_submissions: {},
  //     user: {
  //       id: 'kSlnstJTnY8',
  //       updated_at: '2022-10-01T10:40:13Z',
  //       username: 'windows',
  //       name: 'Windows',
  //       first_name: 'Windows',
  //       last_name: null,
  //       twitter_username: 'windows',
  //       portfolio_url: 'https://www.windows.com',
  //       bio: 'Makes the everyday easier.',
  //       location: null,
  //       links: {
  //         self: 'https://api.unsplash.com/users/windows',
  //         html: 'https://unsplash.com/@windows',
  //         photos: 'https://api.unsplash.com/users/windows/photos',
  //         likes: 'https://api.unsplash.com/users/windows/likes',
  //         portfolio: 'https://api.unsplash.com/users/windows/portfolio',
  //         following: 'https://api.unsplash.com/users/windows/following',
  //         followers: 'https://api.unsplash.com/users/windows/followers',
  //       },
  //       profile_image: {
  //         small:
  //           'https://images.unsplash.com/profile-1633364056312-0319b9fc4586image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32',
  //         medium:
  //           'https://images.unsplash.com/profile-1633364056312-0319b9fc4586image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64',
  //         large:
  //           'https://images.unsplash.com/profile-1633364056312-0319b9fc4586image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128',
  //       },
  //       instagram_username: 'windows',
  //       total_collections: 1,
  //       total_likes: 0,
  //       total_photos: 179,
  //       accepted_tos: true,
  //       for_hire: false,
  //       social: {
  //         instagram_username: 'windows',
  //         portfolio_url: 'https://www.windows.com',
  //         twitter_username: 'windows',
  //         paypal_email: null,
  //       },
  //     },
  //   },
  //   {
  //     id: '1',
  //     created_at: '2022-09-29T12:24:57Z',
  //     updated_at: '2022-10-01T09:32:01Z',
  //     promoted_at: '2022-10-01T09:32:01Z',
  //     width: 6000,
  //     height: 4000,
  //     color: '#262626',
  //     blur_hash: 'LNEeiR%g1J$*HrIoENV@ADo0-Bbv',
  //     description: 'My desk setup.',
  //     alt_description: null,
  //     urls: {
  //       raw: 'https://images.unsplash.com/photo-1664454217818-11e5baf60205?ixid=MnwzNjcxODV8MHwxfGFsbHwyfHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1',
  //       full: 'https://images.unsplash.com/photo-1664454217818-11e5baf60205?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHwyfHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80',
  //       regular:
  //         'https://images.unsplash.com/photo-1664454217818-11e5baf60205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHwyfHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=1080',
  //       small:
  //         'https://images.unsplash.com/photo-1664454217818-11e5baf60205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHwyfHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=400',
  //       thumb:
  //         'https://images.unsplash.com/photo-1664454217818-11e5baf60205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHwyfHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=200',
  //       small_s3:
  //         'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1664454217818-11e5baf60205',
  //     },
  //     links: {
  //       self: 'https://api.unsplash.com/photos/eQ49f7jKSa0',
  //       html: 'https://unsplash.com/photos/eQ49f7jKSa0',
  //       download:
  //         'https://unsplash.com/photos/eQ49f7jKSa0/download?ixid=MnwzNjcxODV8MHwxfGFsbHwyfHx8fHx8Mnx8MTY2NDYyMTY4Ng',
  //       download_location:
  //         'https://api.unsplash.com/photos/eQ49f7jKSa0/download?ixid=MnwzNjcxODV8MHwxfGFsbHwyfHx8fHx8Mnx8MTY2NDYyMTY4Ng',
  //     },
  //     likes: 10,
  //     liked_by_user: false,
  //     current_user_collections: [],
  //     sponsorship: null,
  //     topic_submissions: {},
  //     user: {
  //       id: 'VoM9Yv1pmqc',
  //       updated_at: '2022-10-01T10:45:08Z',
  //       username: 'chamavito',
  //       name: 'Victor Carvalho',
  //       first_name: 'Victor',
  //       last_name: 'Carvalho',
  //       twitter_username: 'chamavito',
  //       portfolio_url: 'http://eixoxyz.com',
  //       bio: 'I do it for fun.',
  //       location: 'Brazil',
  //       links: {
  //         self: 'https://api.unsplash.com/users/chamavito',
  //         html: 'https://unsplash.com/@chamavito',
  //         photos: 'https://api.unsplash.com/users/chamavito/photos',
  //         likes: 'https://api.unsplash.com/users/chamavito/likes',
  //         portfolio: 'https://api.unsplash.com/users/chamavito/portfolio',
  //         following: 'https://api.unsplash.com/users/chamavito/following',
  //         followers: 'https://api.unsplash.com/users/chamavito/followers',
  //       },
  //       profile_image: {
  //         small:
  //           'https://images.unsplash.com/profile-1656622262075-13115d190481image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32',
  //         medium:
  //           'https://images.unsplash.com/profile-1656622262075-13115d190481image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64',
  //         large:
  //           'https://images.unsplash.com/profile-1656622262075-13115d190481image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128',
  //       },
  //       instagram_username: 'chamavito',
  //       total_collections: 0,
  //       total_likes: 0,
  //       total_photos: 13,
  //       accepted_tos: true,
  //       for_hire: false,
  //       social: {
  //         instagram_username: 'chamavito',
  //         portfolio_url: 'http://eixoxyz.com',
  //         twitter_username: 'chamavito',
  //         paypal_email: null,
  //       },
  //     },
  //   },
  //   {
  //     id: '2',
  //     created_at: '2022-10-01T08:45:19Z',
  //     updated_at: '2022-10-01T09:27:29Z',
  //     promoted_at: '2022-10-01T09:27:29Z',
  //     width: 5464,
  //     height: 8192,
  //     color: '#262626',
  //     blur_hash: 'L46*XNj^E1M{~Bt7Ipn$rpD%oz?a',
  //     description: null,
  //     alt_description: null,
  //     urls: {
  //       raw: 'https://images.unsplash.com/photo-1664613910899-f91c3452744d?ixid=MnwzNjcxODV8MHwxfGFsbHwzfHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1',
  //       full: 'https://images.unsplash.com/photo-1664613910899-f91c3452744d?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHwzfHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80',
  //       regular:
  //         'https://images.unsplash.com/photo-1664613910899-f91c3452744d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHwzfHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=1080',
  //       small:
  //         'https://images.unsplash.com/photo-1664613910899-f91c3452744d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHwzfHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=400',
  //       thumb:
  //         'https://images.unsplash.com/photo-1664613910899-f91c3452744d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHwzfHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=200',
  //       small_s3:
  //         'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1664613910899-f91c3452744d',
  //     },
  //     links: {
  //       self: 'https://api.unsplash.com/photos/2bwzDf5gUUc',
  //       html: 'https://unsplash.com/photos/2bwzDf5gUUc',
  //       download:
  //         'https://unsplash.com/photos/2bwzDf5gUUc/download?ixid=MnwzNjcxODV8MHwxfGFsbHwzfHx8fHx8Mnx8MTY2NDYyMTY4Ng',
  //       download_location:
  //         'https://api.unsplash.com/photos/2bwzDf5gUUc/download?ixid=MnwzNjcxODV8MHwxfGFsbHwzfHx8fHx8Mnx8MTY2NDYyMTY4Ng',
  //     },
  //     likes: 9,
  //     liked_by_user: false,
  //     current_user_collections: [],
  //     sponsorship: null,
  //     topic_submissions: {},
  //     user: {
  //       id: '3Cewz0pqEyY',
  //       updated_at: '2022-10-01T10:32:39Z',
  //       username: 'isaac_taylor',
  //       name: 'Isaac Mitchell',
  //       first_name: 'Isaac',
  //       last_name: 'Mitchell',
  //       twitter_username: null,
  //       portfolio_url: 'http://instagram.com/isaactmitchell',
  //       bio: 'Showing you my life through the lens of my R5\r\n-Donations are greatly appreciated ',
  //       location: 'Idaho',
  //       links: {
  //         self: 'https://api.unsplash.com/users/isaac_taylor',
  //         html: 'https://unsplash.com/@isaac_taylor',
  //         photos: 'https://api.unsplash.com/users/isaac_taylor/photos',
  //         likes: 'https://api.unsplash.com/users/isaac_taylor/likes',
  //         portfolio: 'https://api.unsplash.com/users/isaac_taylor/portfolio',
  //         following: 'https://api.unsplash.com/users/isaac_taylor/following',
  //         followers: 'https://api.unsplash.com/users/isaac_taylor/followers',
  //       },
  //       profile_image: {
  //         small:
  //           'https://images.unsplash.com/profile-1663909525936-99798453cdbd?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32',
  //         medium:
  //           'https://images.unsplash.com/profile-1663909525936-99798453cdbd?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64',
  //         large:
  //           'https://images.unsplash.com/profile-1663909525936-99798453cdbd?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128',
  //       },
  //       instagram_username: 'isaac.tayylor',
  //       total_collections: 0,
  //       total_likes: 25,
  //       total_photos: 104,
  //       accepted_tos: true,
  //       for_hire: true,
  //       social: {
  //         instagram_username: 'isaac.tayylor',
  //         portfolio_url: 'http://instagram.com/isaactmitchell',
  //         twitter_username: null,
  //         paypal_email: null,
  //       },
  //     },
  //   },
  //   {
  //     id: '3',
  //     created_at: '2022-09-26T18:08:16Z',
  //     updated_at: '2022-10-01T09:30:03Z',
  //     promoted_at: '2022-10-01T09:26:34Z',
  //     width: 5472,
  //     height: 3648,
  //     color: '#0c2640',
  //     blur_hash: 'LJ7nwUx]M{bbx^t7aej[4TRPtRjY',
  //     description: null,
  //     alt_description: null,
  //     urls: {
  //       raw: 'https://images.unsplash.com/photo-1664215623224-9e3eeea3e050?ixid=MnwzNjcxODV8MHwxfGFsbHw0fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1',
  //       full: 'https://images.unsplash.com/photo-1664215623224-9e3eeea3e050?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHw0fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80',
  //       regular:
  //         'https://images.unsplash.com/photo-1664215623224-9e3eeea3e050?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHw0fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=1080',
  //       small:
  //         'https://images.unsplash.com/photo-1664215623224-9e3eeea3e050?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHw0fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=400',
  //       thumb:
  //         'https://images.unsplash.com/photo-1664215623224-9e3eeea3e050?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHw0fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=200',
  //       small_s3:
  //         'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1664215623224-9e3eeea3e050',
  //     },
  //     links: {
  //       self: 'https://api.unsplash.com/photos/Ux5qauJBztE',
  //       html: 'https://unsplash.com/photos/Ux5qauJBztE',
  //       download:
  //         'https://unsplash.com/photos/Ux5qauJBztE/download?ixid=MnwzNjcxODV8MHwxfGFsbHw0fHx8fHx8Mnx8MTY2NDYyMTY4Ng',
  //       download_location:
  //         'https://api.unsplash.com/photos/Ux5qauJBztE/download?ixid=MnwzNjcxODV8MHwxfGFsbHw0fHx8fHx8Mnx8MTY2NDYyMTY4Ng',
  //     },
  //     likes: 12,
  //     liked_by_user: false,
  //     current_user_collections: [],
  //     sponsorship: null,
  //     topic_submissions: {
  //       nature: {
  //         status: 'unevaluated',
  //       },
  //       travel: {
  //         status: 'unevaluated',
  //       },
  //       wallpapers: {
  //         status: 'unevaluated',
  //       },
  //       film: {
  //         status: 'unevaluated',
  //       },
  //     },
  //     user: {
  //       id: '1STlsXjQf9Q',
  //       updated_at: '2022-10-01T10:40:13Z',
  //       username: 'neha1301039',
  //       name: 'Neha Maheen Mahfin',
  //       first_name: 'Neha',
  //       last_name: 'Maheen Mahfin',
  //       twitter_username: null,
  //       portfolio_url: 'https://www.instagram.com/maheen_mahfin_neha/',
  //       bio: "Hello,I'm Neha. A Muslim Bangladeshi Girl and a student of Architecture of Bangladesh University of Engineering and Technology. Photography and Travelling is my craze and hobby.",
  //       location: 'Dhaka,Bangladesh',
  //       links: {
  //         self: 'https://api.unsplash.com/users/neha1301039',
  //         html: 'https://unsplash.com/@neha1301039',
  //         photos: 'https://api.unsplash.com/users/neha1301039/photos',
  //         likes: 'https://api.unsplash.com/users/neha1301039/likes',
  //         portfolio: 'https://api.unsplash.com/users/neha1301039/portfolio',
  //         following: 'https://api.unsplash.com/users/neha1301039/following',
  //         followers: 'https://api.unsplash.com/users/neha1301039/followers',
  //       },
  //       profile_image: {
  //         small:
  //           'https://images.unsplash.com/profile-1645374962062-217a853cedb2image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32',
  //         medium:
  //           'https://images.unsplash.com/profile-1645374962062-217a853cedb2image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64',
  //         large:
  //           'https://images.unsplash.com/profile-1645374962062-217a853cedb2image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128',
  //       },
  //       instagram_username: 'https://www.instagram.com/maheen_mahfin_neha/',
  //       total_collections: 6,
  //       total_likes: 438,
  //       total_photos: 229,
  //       accepted_tos: true,
  //       for_hire: false,
  //       social: {
  //         instagram_username: 'https://www.instagram.com/maheen_mahfin_neha/',
  //         portfolio_url: 'https://www.instagram.com/maheen_mahfin_neha/',
  //         twitter_username: null,
  //         paypal_email: null,
  //       },
  //     },
  //   },
  //   {
  //     id: '4',
  //     created_at: '2022-09-30T23:03:50Z',
  //     updated_at: '2022-10-01T09:17:49Z',
  //     promoted_at: '2022-10-01T08:44:33Z',
  //     width: 5138,
  //     height: 3848,
  //     color: '#f3a626',
  //     blur_hash: 'L$J~*[]~I=n+}RxYJBjGR+NeR*sl',
  //     description: 'sandy ponds',
  //     alt_description: null,
  //     urls: {
  //       raw: 'https://images.unsplash.com/photo-1664578876668-5b9eab5d0a8e?ixid=MnwzNjcxODV8MHwxfGFsbHw1fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1',
  //       full: 'https://images.unsplash.com/photo-1664578876668-5b9eab5d0a8e?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHw1fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80',
  //       regular:
  //         'https://images.unsplash.com/photo-1664578876668-5b9eab5d0a8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHw1fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=1080',
  //       small:
  //         'https://images.unsplash.com/photo-1664578876668-5b9eab5d0a8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHw1fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=400',
  //       thumb:
  //         'https://images.unsplash.com/photo-1664578876668-5b9eab5d0a8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHw1fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=200',
  //       small_s3:
  //         'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1664578876668-5b9eab5d0a8e',
  //     },
  //     links: {
  //       self: 'https://api.unsplash.com/photos/epXy5fYr8PA',
  //       html: 'https://unsplash.com/photos/epXy5fYr8PA',
  //       download:
  //         'https://unsplash.com/photos/epXy5fYr8PA/download?ixid=MnwzNjcxODV8MHwxfGFsbHw1fHx8fHx8Mnx8MTY2NDYyMTY4Ng',
  //       download_location:
  //         'https://api.unsplash.com/photos/epXy5fYr8PA/download?ixid=MnwzNjcxODV8MHwxfGFsbHw1fHx8fHx8Mnx8MTY2NDYyMTY4Ng',
  //     },
  //     likes: 20,
  //     liked_by_user: false,
  //     current_user_collections: [],
  //     sponsorship: null,
  //     topic_submissions: {},
  //     user: {
  //       id: 'x8DjI2amVk4',
  //       updated_at: '2022-10-01T10:40:10Z',
  //       username: 'unstable_affliction',
  //       name: 'Ivan Bandura',
  //       first_name: 'Ivan',
  //       last_name: 'Bandura',
  //       twitter_username: null,
  //       portfolio_url: 'https://ivan.graphics',
  //       bio: null,
  //       location: null,
  //       links: {
  //         self: 'https://api.unsplash.com/users/unstable_affliction',
  //         html: 'https://unsplash.com/@unstable_affliction',
  //         photos: 'https://api.unsplash.com/users/unstable_affliction/photos',
  //         likes: 'https://api.unsplash.com/users/unstable_affliction/likes',
  //         portfolio:
  //           'https://api.unsplash.com/users/unstable_affliction/portfolio',
  //         following:
  //           'https://api.unsplash.com/users/unstable_affliction/following',
  //         followers:
  //           'https://api.unsplash.com/users/unstable_affliction/followers',
  //       },
  //       profile_image: {
  //         small:
  //           'https://images.unsplash.com/profile-1618347101827-5bbe4dd61412image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32',
  //         medium:
  //           'https://images.unsplash.com/profile-1618347101827-5bbe4dd61412image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64',
  //         large:
  //           'https://images.unsplash.com/profile-1618347101827-5bbe4dd61412image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128',
  //       },
  //       instagram_username: null,
  //       total_collections: 3,
  //       total_likes: 315,
  //       total_photos: 280,
  //       accepted_tos: true,
  //       for_hire: true,
  //       social: {
  //         instagram_username: null,
  //         portfolio_url: 'https://ivan.graphics',
  //         twitter_username: null,
  //         paypal_email: null,
  //       },
  //     },
  //   },
  //   {
  //     id: '5',
  //     created_at: '2022-09-30T22:06:54Z',
  //     updated_at: '2022-10-01T06:22:35Z',
  //     promoted_at: null,
  //     width: 6720,
  //     height: 4480,
  //     color: '#8c7359',
  //     blur_hash: 'LGG8r_Dh-6K7tLMyXTVt00-pNeRP',
  //     description: null,
  //     alt_description: null,
  //     urls: {
  //       raw: 'https://images.unsplash.com/photo-1664575599736-c5197c684128?ixid=MnwzNjcxODV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1',
  //       full: 'https://images.unsplash.com/photo-1664575599736-c5197c684128?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNjcxODV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80',
  //       regular:
  //         'https://images.unsplash.com/photo-1664575599736-c5197c684128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=1080',
  //       small:
  //         'https://images.unsplash.com/photo-1664575599736-c5197c684128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=400',
  //       thumb:
  //         'https://images.unsplash.com/photo-1664575599736-c5197c684128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=200',
  //       small_s3:
  //         'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1664575599736-c5197c684128',
  //     },
  //     links: {
  //       self: 'https://api.unsplash.com/photos/FHhbHW4vFxc',
  //       html: 'https://unsplash.com/photos/FHhbHW4vFxc',
  //       download:
  //         'https://unsplash.com/photos/FHhbHW4vFxc/download?ixid=MnwzNjcxODV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY2NDYyMTY4Ng',
  //       download_location:
  //         'https://api.unsplash.com/photos/FHhbHW4vFxc/download?ixid=MnwzNjcxODV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY2NDYyMTY4Ng',
  //     },
  //     likes: 2,
  //     liked_by_user: false,
  //     current_user_collections: [],
  //     sponsorship: {
  //       impression_urls: [
  //         'https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=10864983&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif',
  //       ],
  //       tagline: 'Make the most of your 365',
  //       tagline_url: 'https://www.microsoft.com/en-us/microsoft-365',
  //       sponsor: {
  //         id: 'VKlg9Ffk2GE',
  //         updated_at: '2022-10-01T10:45:08Z',
  //         username: 'microsoft365',
  //         name: 'Microsoft 365',
  //         first_name: 'Microsoft',
  //         last_name: '365',
  //         twitter_username: 'Microsoft365',
  //         portfolio_url: 'https://www.microsoft.com/en-us/microsoft-365',
  //         bio: 'Microsoft 365 is designed to help you achieve more across work and life with innovative Office apps, intelligent cloud services, and world-class security.',
  //         location: null,
  //         links: {
  //           self: 'https://api.unsplash.com/users/microsoft365',
  //           html: 'https://unsplash.com/@microsoft365',
  //           photos: 'https://api.unsplash.com/users/microsoft365/photos',
  //           likes: 'https://api.unsplash.com/users/microsoft365/likes',
  //           portfolio: 'https://api.unsplash.com/users/microsoft365/portfolio',
  //           following: 'https://api.unsplash.com/users/microsoft365/following',
  //           followers: 'https://api.unsplash.com/users/microsoft365/followers',
  //         },
  //         profile_image: {
  //           small:
  //             'https://images.unsplash.com/profile-1605642019416-f1f5d5d75bfbimage?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32',
  //           medium:
  //             'https://images.unsplash.com/profile-1605642019416-f1f5d5d75bfbimage?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64',
  //           large:
  //             'https://images.unsplash.com/profile-1605642019416-f1f5d5d75bfbimage?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128',
  //         },
  //         instagram_username: null,
  //         total_collections: 0,
  //         total_likes: 0,
  //         total_photos: 21,
  //         accepted_tos: true,
  //         for_hire: false,
  //         social: {
  //           instagram_username: null,
  //           portfolio_url: 'https://www.microsoft.com/en-us/microsoft-365',
  //           twitter_username: 'Microsoft365',
  //           paypal_email: null,
  //         },
  //       },
  //     },
  //     topic_submissions: {},
  //     user: {
  //       id: 'VKlg9Ffk2GE',
  //       updated_at: '2022-10-01T10:45:08Z',
  //       username: 'microsoft365',
  //       name: 'Microsoft 365',
  //       first_name: 'Microsoft',
  //       last_name: '365',
  //       twitter_username: 'Microsoft365',
  //       portfolio_url: 'https://www.microsoft.com/en-us/microsoft-365',
  //       bio: 'Microsoft 365 is designed to help you achieve more across work and life with innovative Office apps, intelligent cloud services, and world-class security.',
  //       location: null,
  //       links: {
  //         self: 'https://api.unsplash.com/users/microsoft365',
  //         html: 'https://unsplash.com/@microsoft365',
  //         photos: 'https://api.unsplash.com/users/microsoft365/photos',
  //         likes: 'https://api.unsplash.com/users/microsoft365/likes',
  //         portfolio: 'https://api.unsplash.com/users/microsoft365/portfolio',
  //         following: 'https://api.unsplash.com/users/microsoft365/following',
  //         followers: 'https://api.unsplash.com/users/microsoft365/followers',
  //       },
  //       profile_image: {
  //         small:
  //           'https://images.unsplash.com/profile-1605642019416-f1f5d5d75bfbimage?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32',
  //         medium:
  //           'https://images.unsplash.com/profile-1605642019416-f1f5d5d75bfbimage?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64',
  //         large:
  //           'https://images.unsplash.com/profile-1605642019416-f1f5d5d75bfbimage?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128',
  //       },
  //       instagram_username: null,
  //       total_collections: 0,
  //       total_likes: 0,
  //       total_photos: 21,
  //       accepted_tos: true,
  //       for_hire: false,
  //       social: {
  //         instagram_username: null,
  //         portfolio_url: 'https://www.microsoft.com/en-us/microsoft-365',
  //         twitter_username: 'Microsoft365',
  //         paypal_email: null,
  //       },
  //     },
  //   },
  //   {
  //     id: '6',
  //     created_at: '2022-10-01T08:42:31Z',
  //     updated_at: '2022-10-01T08:44:19Z',
  //     promoted_at: '2022-10-01T08:44:18Z',
  //     width: 5464,
  //     height: 8192,
  //     color: '#262626',
  //     blur_hash: 'L34-@Jv#EQjZ1jI:-TWV#6xaNIj[',
  //     description: null,
  //     alt_description: null,
  //     urls: {
  //       raw: 'https://images.unsplash.com/photo-1664613739289-d3ea34524a88?ixid=MnwzNjcxODV8MHwxfGFsbHw3fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1',
  //       full: 'https://images.unsplash.com/photo-1664613739289-d3ea34524a88?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHw3fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80',
  //       regular:
  //         'https://images.unsplash.com/photo-1664613739289-d3ea34524a88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHw3fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=1080',
  //       small:
  //         'https://images.unsplash.com/photo-1664613739289-d3ea34524a88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHw3fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=400',
  //       thumb:
  //         'https://images.unsplash.com/photo-1664613739289-d3ea34524a88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHw3fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=200',
  //       small_s3:
  //         'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1664613739289-d3ea34524a88',
  //     },
  //     links: {
  //       self: 'https://api.unsplash.com/photos/3NKFQ_fkL6o',
  //       html: 'https://unsplash.com/photos/3NKFQ_fkL6o',
  //       download:
  //         'https://unsplash.com/photos/3NKFQ_fkL6o/download?ixid=MnwzNjcxODV8MHwxfGFsbHw3fHx8fHx8Mnx8MTY2NDYyMTY4Ng',
  //       download_location:
  //         'https://api.unsplash.com/photos/3NKFQ_fkL6o/download?ixid=MnwzNjcxODV8MHwxfGFsbHw3fHx8fHx8Mnx8MTY2NDYyMTY4Ng',
  //     },
  //     likes: 11,
  //     liked_by_user: false,
  //     current_user_collections: [],
  //     sponsorship: null,
  //     topic_submissions: {},
  //     user: {
  //       id: '3Cewz0pqEyY',
  //       updated_at: '2022-10-01T10:32:39Z',
  //       username: 'isaac_taylor',
  //       name: 'Isaac Mitchell',
  //       first_name: 'Isaac',
  //       last_name: 'Mitchell',
  //       twitter_username: null,
  //       portfolio_url: 'http://instagram.com/isaactmitchell',
  //       bio: 'Showing you my life through the lens of my R5\r\n-Donations are greatly appreciated ',
  //       location: 'Idaho',
  //       links: {
  //         self: 'https://api.unsplash.com/users/isaac_taylor',
  //         html: 'https://unsplash.com/@isaac_taylor',
  //         photos: 'https://api.unsplash.com/users/isaac_taylor/photos',
  //         likes: 'https://api.unsplash.com/users/isaac_taylor/likes',
  //         portfolio: 'https://api.unsplash.com/users/isaac_taylor/portfolio',
  //         following: 'https://api.unsplash.com/users/isaac_taylor/following',
  //         followers: 'https://api.unsplash.com/users/isaac_taylor/followers',
  //       },
  //       profile_image: {
  //         small:
  //           'https://images.unsplash.com/profile-1663909525936-99798453cdbd?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32',
  //         medium:
  //           'https://images.unsplash.com/profile-1663909525936-99798453cdbd?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64',
  //         large:
  //           'https://images.unsplash.com/profile-1663909525936-99798453cdbd?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128',
  //       },
  //       instagram_username: 'isaac.tayylor',
  //       total_collections: 0,
  //       total_likes: 25,
  //       total_photos: 104,
  //       accepted_tos: true,
  //       for_hire: true,
  //       social: {
  //         instagram_username: 'isaac.tayylor',
  //         portfolio_url: 'http://instagram.com/isaactmitchell',
  //         twitter_username: null,
  //         paypal_email: null,
  //       },
  //     },
  //   },
  //   {
  //     id: '7',
  //     created_at: '2022-09-29T11:01:12Z',
  //     updated_at: '2022-10-01T08:44:09Z',
  //     promoted_at: '2022-10-01T08:44:09Z',
  //     width: 3840,
  //     height: 5760,
  //     color: '#262626',
  //     blur_hash: 'L88;3|%20eI:J7kB%2xaEKt7%1n$',
  //     description: null,
  //     alt_description: null,
  //     urls: {
  //       raw: 'https://images.unsplash.com/photo-1664449159341-77f4a7215eda?ixid=MnwzNjcxODV8MHwxfGFsbHw4fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1',
  //       full: 'https://images.unsplash.com/photo-1664449159341-77f4a7215eda?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHw4fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80',
  //       regular:
  //         'https://images.unsplash.com/photo-1664449159341-77f4a7215eda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHw4fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=1080',
  //       small:
  //         'https://images.unsplash.com/photo-1664449159341-77f4a7215eda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHw4fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=400',
  //       thumb:
  //         'https://images.unsplash.com/photo-1664449159341-77f4a7215eda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHw4fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=200',
  //       small_s3:
  //         'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1664449159341-77f4a7215eda',
  //     },
  //     links: {
  //       self: 'https://api.unsplash.com/photos/N4Fia3WA9jU',
  //       html: 'https://unsplash.com/photos/N4Fia3WA9jU',
  //       download:
  //         'https://unsplash.com/photos/N4Fia3WA9jU/download?ixid=MnwzNjcxODV8MHwxfGFsbHw4fHx8fHx8Mnx8MTY2NDYyMTY4Ng',
  //       download_location:
  //         'https://api.unsplash.com/photos/N4Fia3WA9jU/download?ixid=MnwzNjcxODV8MHwxfGFsbHw4fHx8fHx8Mnx8MTY2NDYyMTY4Ng',
  //     },
  //     likes: 0,
  //     liked_by_user: false,
  //     current_user_collections: [],
  //     sponsorship: null,
  //     topic_submissions: {},
  //     user: {
  //       id: '5Uev-NHV3Pw',
  //       updated_at: '2022-10-01T10:15:09Z',
  //       username: 'ozzzyphotos',
  //       name: 'Oswald Elsaboath',
  //       first_name: 'Oswald',
  //       last_name: 'Elsaboath',
  //       twitter_username: null,
  //       portfolio_url: '',
  //       bio: 'taking pictures to another level based on your satisfaction  Text me on Instagram for any photo request @ozzzybabyyy\r\nyour feedbacks, Donation, compliments and thought towards my work helps me to be more creative ',
  //       location: 'turkey',
  //       links: {
  //         self: 'https://api.unsplash.com/users/ozzzyphotos',
  //         html: 'https://unsplash.com/@ozzzyphotos',
  //         photos: 'https://api.unsplash.com/users/ozzzyphotos/photos',
  //         likes: 'https://api.unsplash.com/users/ozzzyphotos/likes',
  //         portfolio: 'https://api.unsplash.com/users/ozzzyphotos/portfolio',
  //         following: 'https://api.unsplash.com/users/ozzzyphotos/following',
  //         followers: 'https://api.unsplash.com/users/ozzzyphotos/followers',
  //       },
  //       profile_image: {
  //         small:
  //           'https://images.unsplash.com/profile-1615071030378-1e9958cec50eimage?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32',
  //         medium:
  //           'https://images.unsplash.com/profile-1615071030378-1e9958cec50eimage?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64',
  //         large:
  //           'https://images.unsplash.com/profile-1615071030378-1e9958cec50eimage?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128',
  //       },
  //       instagram_username: 'ozzzyphotos',
  //       total_collections: 0,
  //       total_likes: 55,
  //       total_photos: 361,
  //       accepted_tos: true,
  //       for_hire: true,
  //       social: {
  //         instagram_username: 'ozzzyphotos',
  //         portfolio_url: '',
  //         twitter_username: null,
  //         paypal_email: null,
  //       },
  //     },
  //   },
  //   {
  //     id: '8',
  //     created_at: '2022-09-29T10:50:15Z',
  //     updated_at: '2022-10-01T08:34:33Z',
  //     promoted_at: '2022-10-01T08:34:33Z',
  //     width: 4000,
  //     height: 3000,
  //     color: '#595959',
  //     blur_hash: 'L7DS%hNH01j]xuoLWYs:4.s.snWB',
  //     description: 'Large Language Models. Artist: Tim West',
  //     alt_description: null,
  //     urls: {
  //       raw: 'https://images.unsplash.com/photo-1664448021787-7893ce42f81a?ixid=MnwzNjcxODV8MHwxfGFsbHw5fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1',
  //       full: 'https://images.unsplash.com/photo-1664448021787-7893ce42f81a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHw5fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80',
  //       regular:
  //         'https://images.unsplash.com/photo-1664448021787-7893ce42f81a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHw5fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=1080',
  //       small:
  //         'https://images.unsplash.com/photo-1664448021787-7893ce42f81a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHw5fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=400',
  //       thumb:
  //         'https://images.unsplash.com/photo-1664448021787-7893ce42f81a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHw5fHx8fHx8Mnx8MTY2NDYyMTY4Ng&ixlib=rb-1.2.1&q=80&w=200',
  //       small_s3:
  //         'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1664448021787-7893ce42f81a',
  //     },
  //     links: {
  //       self: 'https://api.unsplash.com/photos/Lsf2CjZUygs',
  //       html: 'https://unsplash.com/photos/Lsf2CjZUygs',
  //       download:
  //         'https://unsplash.com/photos/Lsf2CjZUygs/download?ixid=MnwzNjcxODV8MHwxfGFsbHw5fHx8fHx8Mnx8MTY2NDYyMTY4Ng',
  //       download_location:
  //         'https://api.unsplash.com/photos/Lsf2CjZUygs/download?ixid=MnwzNjcxODV8MHwxfGFsbHw5fHx8fHx8Mnx8MTY2NDYyMTY4Ng',
  //     },
  //     likes: 8,
  //     liked_by_user: false,
  //     current_user_collections: [],
  //     sponsorship: null,
  //     topic_submissions: {
  //       '3d-renders': {
  //         status: 'unevaluated',
  //       },
  //     },
  //     user: {
  //       id: '1yTi39xvCxo',
  //       updated_at: '2022-10-01T10:50:10Z',
  //       username: 'deepmind',
  //       name: 'DeepMind',
  //       first_name: 'DeepMind',
  //       last_name: null,
  //       twitter_username: 'deepmind',
  //       portfolio_url: 'http://www.deepmind.com',
  //       bio: 'We’re a team of scientists, engineers, ethicists and more, committed to solving intelligence, to advance science and benefit humanity.',
  //       location: null,
  //       links: {
  //         self: 'https://api.unsplash.com/users/deepmind',
  //         html: 'https://unsplash.com/@deepmind',
  //         photos: 'https://api.unsplash.com/users/deepmind/photos',
  //         likes: 'https://api.unsplash.com/users/deepmind/likes',
  //         portfolio: 'https://api.unsplash.com/users/deepmind/portfolio',
  //         following: 'https://api.unsplash.com/users/deepmind/following',
  //         followers: 'https://api.unsplash.com/users/deepmind/followers',
  //       },
  //       profile_image: {
  //         small:
  //           'https://images.unsplash.com/profile-1655482131364-7a94ac363a7bimage?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32',
  //         medium:
  //           'https://images.unsplash.com/profile-1655482131364-7a94ac363a7bimage?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64',
  //         large:
  //           'https://images.unsplash.com/profile-1655482131364-7a94ac363a7bimage?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128',
  //       },
  //       instagram_username: 'visualising.ai',
  //       total_collections: 4,
  //       total_likes: 0,
  //       total_photos: 62,
  //       accepted_tos: true,
  //       for_hire: false,
  //       social: {
  //         instagram_username: 'visualising.ai',
  //         portfolio_url: 'http://www.deepmind.com',
  //         twitter_username: 'deepmind',
  //         paypal_email: null,
  //       },
  //     },
  //   },
  //   {
  //     id: '9',
  //     created_at: '2022-08-19T13:00:46Z',
  //     updated_at: '2022-10-01T10:30:08Z',
  //     promoted_at: '2022-10-01T08:34:26Z',
  //     width: 2976,
  //     height: 4464,
  //     color: '#c0a68c',
  //     blur_hash: 'LOL3$04.nNe.~CIAS2RiNIM_afsl',
  //     description: 'Christmas-themed crystal spheres and pyramids',
  //     alt_description: null,
  //     urls: {
  //       raw: 'https://images.unsplash.com/photo-1660911866937-9399bf71af1e?ixid=MnwzNjcxODV8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NjQ2MjE2ODY&ixlib=rb-1.2.1',
  //       full: 'https://images.unsplash.com/photo-1660911866937-9399bf71af1e?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NjQ2MjE2ODY&ixlib=rb-1.2.1&q=80',
  //       regular:
  //         'https://images.unsplash.com/photo-1660911866937-9399bf71af1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NjQ2MjE2ODY&ixlib=rb-1.2.1&q=80&w=1080',
  //       small:
  //         'https://images.unsplash.com/photo-1660911866937-9399bf71af1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NjQ2MjE2ODY&ixlib=rb-1.2.1&q=80&w=400',
  //       thumb:
  //         'https://images.unsplash.com/photo-1660911866937-9399bf71af1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjcxODV8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NjQ2MjE2ODY&ixlib=rb-1.2.1&q=80&w=200',
  //       small_s3:
  //         'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1660911866937-9399bf71af1e',
  //     },
  //     links: {
  //       self: 'https://api.unsplash.com/photos/5eN7ErYeWlo',
  //       html: 'https://unsplash.com/photos/5eN7ErYeWlo',
  //       download:
  //         'https://unsplash.com/photos/5eN7ErYeWlo/download?ixid=MnwzNjcxODV8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NjQ2MjE2ODY',
  //       download_location:
  //         'https://api.unsplash.com/photos/5eN7ErYeWlo/download?ixid=MnwzNjcxODV8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2NjQ2MjE2ODY',
  //     },
  //     likes: 5,
  //     liked_by_user: false,
  //     current_user_collections: [],
  //     sponsorship: null,
  //     topic_submissions: {},
  //     user: {
  //       id: '3g5JfBFpqGk',
  //       updated_at: '2022-10-01T10:25:07Z',
  //       username: 'tinyrituals',
  //       name: 'Tiny Rituals',
  //       first_name: 'Tiny Rituals',
  //       last_name: null,
  //       twitter_username: 'tinyritualsco',
  //       portfolio_url: 'https://tinyrituals.co',
  //       bio: 'Gemstones and good vibes! Where inner intention meets outer manifestation.',
  //       location: 'California',
  //       links: {
  //         self: 'https://api.unsplash.com/users/tinyrituals',
  //         html: 'https://unsplash.com/@tinyrituals',
  //         photos: 'https://api.unsplash.com/users/tinyrituals/photos',
  //         likes: 'https://api.unsplash.com/users/tinyrituals/likes',
  //         portfolio: 'https://api.unsplash.com/users/tinyrituals/portfolio',
  //         following: 'https://api.unsplash.com/users/tinyrituals/following',
  //         followers: 'https://api.unsplash.com/users/tinyrituals/followers',
  //       },
  //       profile_image: {
  //         small:
  //           'https://images.unsplash.com/profile-1660908615595-ee2beb26bbbdimage?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32',
  //         medium:
  //           'https://images.unsplash.com/profile-1660908615595-ee2beb26bbbdimage?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64',
  //         large:
  //           'https://images.unsplash.com/profile-1660908615595-ee2beb26bbbdimage?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128',
  //       },
  //       instagram_username: 'tinyrituals.co',
  //       total_collections: 0,
  //       total_likes: 0,
  //       total_photos: 10,
  //       accepted_tos: true,
  //       for_hire: false,
  //       social: {
  //         instagram_username: 'tinyrituals.co',
  //         portfolio_url: 'https://tinyrituals.co',
  //         twitter_username: 'tinyritualsco',
  //         paypal_email: null,
  //       },
  //     },
  //   },
  // ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.imageList);
  }

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
