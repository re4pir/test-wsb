import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card.component';
import { UiModule } from 'src/app/ui/ui.module';

@NgModule({
  declarations: [UserCardComponent],
  imports: [CommonModule, UiModule],
  exports: [UserCardComponent],
})
export class UserCardModule {}
