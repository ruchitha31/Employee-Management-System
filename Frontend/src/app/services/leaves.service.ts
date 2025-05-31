import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { projectModel } from '../model/project';
import { LeaveModel } from '../model/leaves';
import { MessageModel } from '../model/message';

@Injectable({
  providedIn: 'root',
})
export class LeavesService {
  apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getLeaves(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}leaves/`);
  }
  postLeave(data: LeaveModel): any {
    return this.http.post<any>(`${this.apiUrl}leaves/`, data);
  }
  UpDateLeaveToApproved(leaveid: any, Status: string) {
    return this.http.post<any>(
      `${this.apiUrl}leaves/${leaveid}/update-status`,
      {
        Status: Status,
      }
    );
  }
  PostMessage(data: MessageModel) {
    return this.http.post<any>(`${this.apiUrl}message/`, data);
  }
}
