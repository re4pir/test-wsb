import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
    });
  }
  // public form: FormGroup = this.fb.group({
  //   name: ['', [Validators.required,Validators.minLength(3)]],
  //   email: ['', [Validators.required, Validators.email]],
  //   password: ['', [Validators.required, Validators.minLength(3)]],
  // });

  // get _nameError() {
  //   return this.form.get('name');
  // }

  submit() {
    this.http
      .post(
        'https://localhost:7017/Account/registration',
        this.form.getRawValue()
      )
      .subscribe(() => {
        this.router.navigate(['/auth']);
      });
  }
  goToUrl(url: string) {
    this.router.navigate([url]);
  }
}
