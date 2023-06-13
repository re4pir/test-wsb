import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentComponent } from './current.component';
import { UiModule } from 'src/app/ui/ui.module';

@NgModule({
  declarations: [CurrentComponent],
  imports: [CommonModule,UiModule],
  exports: [CurrentComponent],
})
export class CurrentModule {}
