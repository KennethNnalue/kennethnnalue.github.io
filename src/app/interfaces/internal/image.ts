export interface Imagee {
  id: string;
  width: string;
  height: string;
  row: string;
  col: string;
  url: Urls;
  createdBy: User;
  description: string;
  views: string;
  likes: number;
}

export interface User {
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  profile_image: string;
  location: string;
}

export interface Urls {
  full: string;
  regular: string;
  download: string;
}
export interface Image {
  url: string;
  row: string;
  col: string;
}
