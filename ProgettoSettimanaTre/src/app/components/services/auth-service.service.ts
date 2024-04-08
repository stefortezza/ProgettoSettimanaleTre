import { Injectable } from '@angular/core';
import { Interfaces, User } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private apiURL = 'assets/db.json';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Interfaces[]> {
    return this.http
      .get<any>(this.apiURL)
      .pipe(map((response: any) => response['movies-popular']));
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get<any>(this.apiURL)
      .pipe(map((response: any) => response.users));
  }

  register(name: string, email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiURL}/registrazione`, { name, email, password });
  }
}
