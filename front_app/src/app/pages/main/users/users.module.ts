import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UiModule } from 'src/app/ui/ui.module';
import { UserCardComponent } from './user-card/user-card.component';
import { UserCardModule } from './user-card/user-card.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UiModule, UserCardModule],
  exports: [UsersComponent],
})
export class UsersModule {}
