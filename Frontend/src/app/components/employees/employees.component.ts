import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeModel } from '../../model/employee';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { TempdataserviceService } from 'src/app/services/tempdataservice.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  EmployeesList!: EmployeeModel[];
  isAdmin: boolean = false;
  constructor(
    private employeesService: EmployeeService,
    private authService: AuthenticationService,
    private router: Router,
    private tempservice: TempdataserviceService
  ) {
    this.isAdmin = this.authService.IsAdmin();
  }
  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe((data: EmployeeModel[]) => {
      this.EmployeesList = data;
    });
  }
  
  Delete(employee: any) {
    this.employeesService.deleteEmployee(employee._id).subscribe((data) => {
      window.location.reload();
    });
  }
  Edit(employee: EmployeeModel) {
    this.tempservice.setSelectedEmployee(employee);
    this.router.navigateByUrl('/employees/edit');
  }
  
}
