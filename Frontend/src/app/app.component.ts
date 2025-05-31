import { Component, OnInit } from '@angular/core';
import { ProjectService } from './services/project.service';
import { projectModel } from './model/project';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Frontend';
  isLogedIn: boolean = false;
  isAdmin: boolean = false;
  AccountName = '';
  private subscription: any;
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.subscription = this.authService.IsLogedIn.subscribe((data) => {
      this.isLogedIn = data.IsLogin;
      this.isAdmin = data.IsAdmin;
      this.AccountName = this.authService.getUserName();
    });

    this.authService.checkToken();
    this.AccountName = this.authService.getUserName();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  logout() {
    this.authService.deleteToken();
    this.router.navigateByUrl('/');
  }
  copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    alert('link copied to clip board');
  }
}
