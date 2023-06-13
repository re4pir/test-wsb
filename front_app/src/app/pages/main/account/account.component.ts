import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  user = 'name';
  history : any[] = [];
  currents : any[] = [];

  constructor(private http: HttpClient, private router: Router) {}



  ngOnInit(): void {
    this.http.get('https://localhost:7017/Account/getInfo', {responseType:'text'}).subscribe({
      next: (res: any) => {
        this.user = `Добро пожаловать, ${res}!`;
      },
      error: () => {
        this.router.navigate(['/auth']);
      },
    });
    this.http.get('https://localhost:7017/Booking/getHistory', {responseType: 'json'}).subscribe({
      next: (res: any) => {
        this.history = res
        console.log(this.history)
      },
      error: () => {
        this.router.navigate(['/auth']);
      },
    });
    this.http.get('https://localhost:7017/Booking/getCurrent', {responseType: 'json'}).subscribe({
      next: (res: any) => {
        this.currents = res
        console.log(this.currents)
      },
      error: () => {
        this.router.navigate(['/auth']);
      },
    });
  }

  clickRemove(id:number){
    this.http.delete('https://localhost:7017/Booking/cancel', {responseType: 'json', body: id}).subscribe({
      next: (res: any) => {
        for(let i = 0; i < this.currents.length; i++){
          if (this.currents[i].id === id){
            this.currents.splice(i, 1);
            break;
          }
        }
      },
      error: () => {
        this.router.navigate(['/auth']);
      },
    });
  }



  logout() {
    this.http
      .post(
        'https://localhost:7017/Account/logout',
        {},
        { withCredentials: true }
      )
      .subscribe(() => {
        AuthInterceptor.accessToken = '';
        this.router.navigate(['/auth']);
      });
  }
}
