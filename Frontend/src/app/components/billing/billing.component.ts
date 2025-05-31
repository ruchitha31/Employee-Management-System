import { Component, OnInit } from '@angular/core';
import { MessageModel } from 'src/app/model/message';
import { LeavesService } from 'src/app/services/leaves.service';
import { TimesheetService } from 'src/app/services/timesheet.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
})
export class BillingComponent implements OnInit {
  constructor(
    private billingservice: TimesheetService,
    private messageservice: LeavesService
  ) {}
  billsList: any[] = [];
  ngOnInit(): void {
    this.billingservice.getRequests().subscribe((data) => {
      this.billsList = data;
      console.log(data);
    });
  }
  AcceptBill(bill: any) {
    const message: MessageModel = {
      empid: bill.EmpId,
      header: 'Congrats! Time Sheet Approved.',
      message: `Congratulations! Your timesheet for the current month has been processed and approved. Calculate salary as per working hours :  ${
        bill.salary * bill.HoursWorked
      } Your dedication is truly appreciated. Keep up the excellent work!.`,
    };
    this.billingservice.UpDateStatus(bill._id, 'APPROVED').subscribe();
    this.messageservice.PostMessage(message).subscribe((data: any) => {
      if (confirm('Approve Leave!')) {
        window.location.reload();
      }
    });
  }
  RejectBill(bill: any) {
    const message: MessageModel = {
      empid: bill.EmpId,
      header: 'Oops! Time Sheet Rejected.',
      message:
        'Your timesheet for the current month has been processed and rejected. Your dedication is truly appreciated. please contact HR Manger!.',
    };
    this.billingservice.UpDateStatus(bill._id, 'APPROVED').subscribe();
    this.messageservice.PostMessage(message).subscribe((data: any) => {
      if (confirm('Approve Leave!')) {
        window.location.reload();
      }
    });
  }
}
