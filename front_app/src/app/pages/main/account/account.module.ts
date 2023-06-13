import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { UiModule } from 'src/app/ui/ui.module';
import { HistoryModule } from './history/history.module';
import { CurrentModule } from './current/current.module';

@NgModule({
  declarations: [AccountComponent],
  imports: [CommonModule, UiModule, HistoryModule, CurrentModule],
  exports: [AccountComponent],
})
export class AccountModule {}
