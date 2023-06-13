import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {

  this.form = this.fb.group({
    email: '',
    password: '',
  });
}

  submit() {
    console.log(this.form.status);
    if (!this.form.valid) {
      return;
    }
    console.log(AuthInterceptor.accessToken)
    this.http
      .post(
        'https://localhost:7017/Account/login',
        this.form.getRawValue(), {withCredentials: true, responseType:'json'}
      )
      .subscribe((res:any) => {
        AuthInterceptor.accessToken = res.jwt;
        
        localStorage.setItem('jwt',res.jwt)

        this.router.navigate(['/main']);
      });
  }

  goToUrl(url: string) {
    this.router.navigate([url]);
  }
}
