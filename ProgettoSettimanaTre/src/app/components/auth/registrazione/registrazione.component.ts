import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/interfaces';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss'],
})
export class RegistrazioneComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit(form: NgForm) {
    console.log(form);
    
    this.authService.register(this.name, this.email, this.password).subscribe(
      (user: User) => {
        console.log('Registrazione avvenuta con successo:', user);
        const accessToken = user.accessToken;
      },
      error => {
        console.error('Errore durante la registrazione:', error);
      }
    );
  }
}
