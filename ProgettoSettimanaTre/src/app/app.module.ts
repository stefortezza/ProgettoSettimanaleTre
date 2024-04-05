import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './components/signin/signin.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Route, RouterModule } from '@angular/router';
import { FilmComponent } from './components/film/film.component';
import { DettagliComponent } from './components/dettagli/dettagli.component';
import { PreferitiComponent } from './components/preferiti/preferiti.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: SigninComponent,
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
    SigninComponent,
    RegistrazioneComponent,
    ProfilePageComponent,
    HomeComponent,
    NavbarComponent,
    FilmComponent,
    DettagliComponent,
    PreferitiComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
