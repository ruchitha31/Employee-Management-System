import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginModel } from 'src/app/model/login';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-hr-login',
  templateUrl: './hr-login.component.html',
  styleUrls: ['./hr-login.component.css'],
})
export class HrLoginComponent {
  constructor(
    private employeeService: EmployeeService,
    private authService: AuthenticationService,
    private router: Router
  ) {}
  LoginForm = new FormGroup({
    Email: new FormControl('', [Validators.required,Validators.email]),
    Password: new FormControl('', [Validators.required]),
  });
  onSubmit() {
    if (this.LoginForm.status == 'VALID') {
      const logindata: LoginModel = {
        email: this.LoginForm.value.Email!,
        password: this.LoginForm.value.Password!,
      };
      this.employeeService.SignIn(logindata).subscribe((data) => {
        if (data != null) {
          this.authService.storeToken(data);
          this.router.navigateByUrl('/');
        } else {
          alert('Wrong Credientials! Try Again');
        }
      });
    } else {
      alert('Enter Valid Data!');
    }
  }
}
