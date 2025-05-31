import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { LeavesComponent } from './components/leaves/leaves.component';
import { AddLeavesComponent } from './components/add-leaves/add-leaves.component';
import { HrLoginComponent } from './components/hr-login/hr-login.component';
import { HrRegisterComponent } from './components/hr-register/hr-register.component';
import { EmployeeLoginComponent } from './components/employee-login/employee-login.component';
import { EmployeeRegisterComponent } from './components/employee-register/employee-register.component';
import { authGuard } from './gaurds/auth.guard';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BillingComponent } from './components/billing/billing.component';
import { SubmitTimeSheetComponent } from './components/submit-time-sheet/submit-time-sheet.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  {
    path: 'projects/add',
    component: AddProjectComponent,
    canActivate: [authGuard],
    data: {
      expectedRole: 'HR_MANAGMENT',
    },
  },
  {
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: 'employees/add',
    component: EmployeeRegisterComponent,
    canActivate: [authGuard],
    data: {
      expectedRole: 'HR_MANAGMENT',
    },
  },
  {
    path: 'employees/edit',
    component: EmployeeEditComponent,
    canActivate: [authGuard],
    data: {
      expectedRole: 'HR_MANAGMENT',
    },
  },
  {
    path: 'project/edit',
    component: EditProjectComponent,
    canActivate: [authGuard],
    data: {
      expectedRole: 'HR_MANAGMENT',
    },
  },
  {
    path: 'leaves',
    component: LeavesComponent,
    canActivate: [authGuard],
    data: {
      expectedRole: 'HR_MANAGMENT',
    },
  },
  {
    path: 'leaves/request',
    component: AddLeavesComponent,
    canActivate: [authGuard],
    data: {
      expectedRole: 'USER',
    },
  },
  { path: 'login', component: HrLoginComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'register/hr',
    component: HrRegisterComponent,
    canActivate: [authGuard],
    data: {
      expectedRole: 'HR_MANAGMENT',
    },
  },
  {
    path: 'login/employee',
    component: EmployeeLoginComponent,
  },
  {
    path: 'register/employee',
    component: EmployeeRegisterComponent,
    canActivate: [authGuard],
    data: {
      expectedRole: 'HR_MANAGMENT',
    },
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authGuard],
    data: {
      expectedRole: 'USER',
    },
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
    canActivate: [authGuard],
    data: {
      expectedRole: 'USER',
    },
  },
  {
    path: 'timesheet',
    component: TimesheetComponent,
    canActivate: [authGuard],
    data: {
      expectedRole: 'USER',
    },
  },
  {
    path: 'billing',
    component: BillingComponent,
    canActivate: [authGuard],
    data: {
      expectedRole: 'HR_MANAGMENT',
    },
  },
  {
    path: 'timesheet',
    component: SubmitTimeSheetComponent,
    canActivate: [authGuard],
    data: {
      expectedRole: 'USER',
    },
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
