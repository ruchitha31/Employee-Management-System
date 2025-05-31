import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timesheetModel } from '../model/timesheet';

@Injectable({
  providedIn: 'root',
})
export class TimesheetService {
  apiUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  postTimesheet(data: timesheetModel): any {
    return this.http.post<any>(`${this.apiUrl}timesheet/`, data);
  }
  getRequests() {
    return this.http.get<any>(`${this.apiUrl}timesheet/`);
  }
  UpDateStatus(timesheetid: any, Status: string) {
    return this.http.post<any>(
      `${this.apiUrl}timesheet/${timesheetid}/update-status`,
      {
        Status: Status,
      }
    );
  }
}
