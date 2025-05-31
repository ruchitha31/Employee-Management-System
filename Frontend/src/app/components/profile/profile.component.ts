import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private authenticateService: AuthenticationService) {}
  UserProfile: any;
  ngOnInit(): void {
    this.UserProfile = this.authenticateService.getUserData();
    console.log(this.UserProfile);
  }
}
