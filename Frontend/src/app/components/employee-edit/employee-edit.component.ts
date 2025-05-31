import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeModel } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { TempdataserviceService } from 'src/app/services/tempdataservice.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
})
export class EmployeeEditComponent implements OnInit {
  CurrentSelectedEmp!: any;
  EmployeeForm!: FormGroup;
  constructor(
    private tempservice: TempdataserviceService,
    private router: Router,
    private employeeService :EmployeeService
  ) {
    this.CurrentSelectedEmp = tempservice.getSelectedEmployee();
  }
  ngOnInit(): void {
    if (this.CurrentSelectedEmp == null) {
      this.router.navigateByUrl('/');
    } else {
      this.EmployeeForm = new FormGroup({
        Firstname: new FormControl(this.CurrentSelectedEmp.first_name!, [
          Validators.required,
        ]),
        LastName: new FormControl(this.CurrentSelectedEmp.last_name, [
          Validators.required,
        ]),
        Email: new FormControl(this.CurrentSelectedEmp.email, [
          Validators.required,
        ]),
        Password: new FormControl(this.CurrentSelectedEmp.password, [
          Validators.required,
        ]),
        HireDate: new FormControl(this.CurrentSelectedEmp.hire_date, [
          Validators.required,
        ]),
        Phonenumber: new FormControl(this.CurrentSelectedEmp.phone_number, [
          Validators.required,
        ]),
        Address: new FormControl(this.CurrentSelectedEmp.address, [
          Validators.required,
        ]),
        Role: new FormControl(this.CurrentSelectedEmp.role, [
          Validators.required,
        ]),
        Salary: new FormControl(this.CurrentSelectedEmp.salary, [
          Validators.required,
        ]),
        Status: new FormControl(this.CurrentSelectedEmp.working_status, [
          Validators.required,
        ]),
        EmpID: new FormControl(this.CurrentSelectedEmp.empid),
      });
    }
  }
  onSubmit() {
    if (this.EmployeeForm.status == 'VALID') {
      const EmployeeDataObject: EmployeeModel = {
        first_name: this.EmployeeForm.value.Firstname!,
        last_name: this.EmployeeForm.value.LastName!,
        email: this.EmployeeForm.value.Email!,
        password: this.EmployeeForm.value.Password!,
        hire_date: this.EmployeeForm.value.HireDate!,
        phone_number: this.EmployeeForm.value.Phonenumber!,
        address: this.EmployeeForm.value.Address!,
        role: this.EmployeeForm.value.Role!,
        salary: this.EmployeeForm.value.Salary!,
        working_status: this.EmployeeForm.value.Status!,
        empid: this.EmployeeForm.value.EmpID!,
      };
      console.log(this.CurrentSelectedEmp._id);
      this.employeeService
        .updateEmployee(this.CurrentSelectedEmp._id,EmployeeDataObject)
        .subscribe((data: any) => {
          alert('New Employee Added Successfully.');
          this.EmployeeForm.reset();
        });
    } else {
      alert('Enter Valid Data! All Feilds Are Required.');
    }
  }
}
