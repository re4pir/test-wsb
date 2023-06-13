import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomSheetComponent } from './bottom-sheet.component';
import { BookGraphModule } from './book-graph/book-graph.module';

@NgModule({
  declarations: [BottomSheetComponent],
  imports: [CommonModule, BookGraphModule],
  exports: [BottomSheetComponent],
})
export class BottomSheetModule {}
