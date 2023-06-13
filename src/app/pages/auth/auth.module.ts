import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiKitModule } from 'src/app/ui/ui-kit/ui-kit.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, ReactiveFormsModule, UiKitModule],
  exports: [AuthComponent],
})
export class AuthModule {}
