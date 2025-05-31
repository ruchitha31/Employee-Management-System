import { Component, OnInit } from '@angular/core';
import { LeavesService } from 'src/app/services/leaves.service';
import { LeaveModel } from '../../model/leaves';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MessageModel } from 'src/app/model/message';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css'],
})
export class LeavesComponent implements OnInit {
  constructor(
    private leaveService: LeavesService,
    private authService: AuthenticationService
  ) {}
  leavesList!: LeaveModel[];
  isAdmin: boolean = false;
  ngOnInit(): void {
    this.leaveService.getLeaves().subscribe((data: any[]) => {
      this.leavesList = data;
    });
    this.isAdmin = this.authService.IsAdmin();
  }
  Approve(leavedata: any) {
    const leavemodel: MessageModel = {
      empid: leavedata.empid,
      header: 'Leave Approved',
      message:
        'I hope this message finds you well. After careful consideration, I am pleased to inform you that your leave request has been approved.',
    };
    this.leaveService
      .UpDateLeaveToApproved(leavedata.leave_id, 'APPROVED')
      .subscribe();
    this.leaveService.PostMessage(leavemodel).subscribe((data) => {
      if (confirm('Approve Leave!')) {
        window.location.reload();
      }
    });
  }
  Reject(leavedata: any) {
    const leavemodel: MessageModel = {
      empid: leavedata.empid,
      header: 'Leave rejected',
      message:
        ' After careful consideration, we regret to inform you that your leave request has been rejected.',
    };
    this.leaveService
      .UpDateLeaveToApproved(leavedata.leave_id, 'REJECTED')
      .subscribe();
    this.leaveService.PostMessage(leavemodel).subscribe((data) => {
      if (confirm('Leave Rejected!')) {
        window.location.reload();
      }
    });
  }
}
