import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { timesheetModel } from 'src/app/model/timesheet';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TimesheetService } from 'src/app/services/timesheet.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css'],
})
export class TimesheetComponent {
  empId = '';
  constructor(
    private timesheetService: TimesheetService,
    private authenticateService: AuthenticationService
  ) {
    this.empId = this.authenticateService.getEmployeeId();
    this.TimeSheetForm.patchValue({
      Empid: this.empId,
    });
  }
  TimeSheetForm = new FormGroup({
    Empid: new FormControl('', [Validators.required]),
    TimeSheetdate: new FormControl('', [Validators.required]),
    ProjectWorked: new FormControl('', [Validators.required]),
    HoursWorked: new FormControl('', [Validators.required]),
    AdditionalNotes: new FormControl('', [Validators.required]),
  });
  onSubmit() {
    if (this.TimeSheetForm.status == 'VALID') {
      var Timesheet: timesheetModel = {
        Empid: this.TimeSheetForm.value.Empid!,
        TimeSheetdate: this.TimeSheetForm.value.TimeSheetdate!,
        ProjectWorked: this.TimeSheetForm.value.ProjectWorked!,
        HoursWorked: Number(this.TimeSheetForm.value.HoursWorked)!,
        AdditionalNotes: this.TimeSheetForm.value.AdditionalNotes!,
      };
      this.timesheetService.postTimesheet(Timesheet).subscribe((data: any) => {
        alert('Time Sheet Submitted!');
        this.TimeSheetForm.reset();
      });
    } else {
      alert('Enter Valid Date! All Feilds are Required.');
    }
  }
}
