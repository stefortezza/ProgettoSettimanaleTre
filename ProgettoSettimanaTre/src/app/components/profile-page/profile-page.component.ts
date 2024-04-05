import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/interfaces';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  users!: User[];

  constructor(private authSrv: AuthServiceService) {}

  ngOnInit(): void {
    this.authSrv.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
