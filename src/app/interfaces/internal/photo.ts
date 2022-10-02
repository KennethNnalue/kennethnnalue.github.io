export interface Photo {
  id: string;
  width: string | null | undefined;
  height: string | null | undefined;
  url: Urls;
  createdBy: User;
  description: string | null | undefined;
  views: string | null | undefined;
  likes: number | null | undefined;
  created_at: string | null | undefined;
}

export interface User {
  first_name: string | null | undefined;
  last_name: string | null | undefined;
  twitter_username: string | null | undefined;
  portfolio_url: string | null | undefined;
  profile_image: string | null | undefined;
  location: string | null | undefined;
  total_photos: number | null | undefined;
}

export interface Urls {
  full: string | null | undefined;
  regular: string | null | undefined;
  download: string | null | undefined;
}
// export interface Image {
//   url: string | null  | undefined ;
//   row: string;
//   col: string;
// }

export interface APIResponse<T> {
  results: Array<T>;
}
