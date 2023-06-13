import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Users {
  id: number;
  name: string;
  descr: string;
  status: string;
  place: any;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://localhost:7017/Users/GetEmployeesWithStatus', {
        responseType: 'json',
      })
      .subscribe({
        next: (res: any) => {
          this.users = res;
        },
      });
  }
}
