export interface Interfaces {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

export interface User{
  name: string;
  email: string;
}

export interface Favorite {
  userId: number;
  movieId: number;
}
