export interface Interfaces {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

export interface User{
  accessToken: string;
  name: string;
  email: string;
  password: string;
}

export interface Favorite {
  userId: number;
  movieId: number;
}
