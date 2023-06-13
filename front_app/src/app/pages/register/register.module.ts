import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiKitModule } from 'src/app/ui/ui-kit/ui-kit.module';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,UiKitModule
  ],exports:[
    RegisterComponent
  ]
})
export class RegisterModule { }
