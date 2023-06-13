import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { UiModule } from 'src/app/ui/ui.module';

@NgModule({
  declarations: [HistoryComponent],
  imports: [CommonModule, UiModule],
  exports: [HistoryComponent],
})
export class HistoryModule {}
