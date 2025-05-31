import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LeaveModel } from 'src/app/model/leaves';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LeavesService } from 'src/app/services/leaves.service';

@Component({
  selector: 'app-add-leaves',
  templateUrl: './add-leaves.component.html',
  styleUrls: ['./add-leaves.component.css'],
})
export class AddLeavesComponent implements OnInit {
  empId = '';
  constructor(
    private authenticateService: AuthenticationService,
    private leaveService: LeavesService,
    private router: Router
  ) {
    this.empId = this.authenticateService.getEmployeeId();
    this.LeaveRequestForm.patchValue({
      Empid: this.empId,
    });
  }
  LeaveRequestForm = new FormGroup({
    Empid: new FormControl('', [Validators.required]),
    LeaveType: new FormControl('', [Validators.required]),
    StartDate: new FormControl('', [Validators.required]),
    EndDate: new FormControl('', [Validators.required]),
    Reason: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {}

  onSubmit() {
    if (this.LeaveRequestForm.status == 'VALID') {
      const LeaveData: LeaveModel = {
        leave_type: this.LeaveRequestForm.value.LeaveType!,
        empid: this.empId,
        reason: this.LeaveRequestForm.value.Reason!,
        status: 'PENDING'!,
        start_date: this.LeaveRequestForm.value.StartDate!,
        end_date: this.LeaveRequestForm.value.EndDate!,
      };
      this.leaveService.postLeave(LeaveData).subscribe((data: any) => {
        alert('Leave Request Submited!');
        this.LeaveRequestForm.reset();
      });
    } else {
      alert('All Feilds Are Required! and Valid.');
    }
  }
}
