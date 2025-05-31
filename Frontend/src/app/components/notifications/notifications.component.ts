import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  MessageList:any[] = [];
  constructor(private messageservice : NotificationsService,
    private authenticateservice:AuthenticationService
    ){}
  ngOnInit(): void {
    this.messageservice.getMessages(this.authenticateservice.getEmployeeId()).subscribe((data)=>{
      this.MessageList = data;
    })
  }
}
