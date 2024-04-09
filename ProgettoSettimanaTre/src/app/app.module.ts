import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrazioneComponent } from './components/auth/registrazione/registrazione.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Route, RouterModule } from '@angular/router';
import { FilmComponent } from './components/film/film.component';
import { DettagliComponent } from './components/dettagli/dettagli.component';
import { PreferitiComponent } from './components/preferiti/preferiti.component';
import { LoginComponent } from './components/auth/login/login.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registrazione',
    component: RegistrazioneComponent,
  },
  {
    path: 'users',
    component: ProfilePageComponent,
  },
  {
    path: 'film',
    component: FilmComponent,
  },
  {
    path: 'profilo',
    component: ProfilePageComponent,
    children: [
      { path: 'dettagli', component: DettagliComponent },
      { path: 'preferiti', component: PreferitiComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrazioneComponent,
    ProfilePageComponent,
    HomeComponent,
    NavbarComponent,
    FilmComponent,
    DettagliComponent,
    PreferitiComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
