import { Component, OnInit } from '@angular/core';
import { Interfaces } from '../interfaces/interfaces';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent implements OnInit {
  posts!: Interfaces[];

  constructor(private postSrv: AuthServiceService) {}

  ngOnInit(): void {
    this.postSrv.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
  