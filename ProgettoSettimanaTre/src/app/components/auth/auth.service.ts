import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { User } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment.development';
import { Auth } from '../interfaces/auth.interface';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';
import { Register } from '../interfaces/register.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiURL;
  private dbUrl = '/assets/db.json';
  private userLog = new BehaviorSubject<Auth | null>(null);
  loggato$ = this.userLog.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  register(user: Register): Observable<any> {
    console.log('Oggetto utente:', user);
    return this.http.get<any>(this.dbUrl).pipe(
      switchMap((data: any) => {
        data.users.push(user);
        return this.http.put<any>('http://localhost:4200/users', data);
      })
    );
  }
  login(data: { email: string; password: string }) {
    return this.http.post<Auth>(`${this.apiUrl}login`, data).pipe(
      tap((data) => {
        console.log('Auth:', data);
      }),
      tap((data) => {
        this.userLog.next(data);
        localStorage.setItem('user', JSON.stringify(data));
      }),
      catchError(this.errors)
    );
  }

  logout() {
    this.userLog.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
  private errors(err: any) {
    console.error(this.errors);
    switch (err.error) {
      case 'Email already exists':
        return throwError('utente già presente');
        break;

      case 'Incorrect password':
        return throwError('password errata');
        break;

      case 'Cannot find user':
        return throwError('Utente non trovato');
        break;

      default:
        return throwError('Errore nella chiamata');
        break;
    }
  }
}
