import { Injectable } from '@angular/core';
import { EmployeeModel } from '../model/employee';

@Injectable({
  providedIn: 'root',
})
export class TempdataserviceService {
  constructor() {}
  SelectedEmployee!: any;
  SelectedProject!: any;
  getSelectedEmployee() {
    return this.SelectedEmployee;
  }
  setSelectedEmployee(Employee: any) {
    this.SelectedEmployee = Employee;
  }
  getSelectedProject() {
    return this.SelectedProject;
  }
  setSelectedProject(project: any) {
    this.SelectedProject = project;
  }
}
