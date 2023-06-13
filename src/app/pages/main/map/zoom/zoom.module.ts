import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoomComponent } from './zoom.component';
import { UiKitModule } from 'src/app/ui/ui-kit/ui-kit.module';

@NgModule({
  declarations: [ZoomComponent],
  imports: [CommonModule,UiKitModule],
  exports: [ZoomComponent],
})
export class ZoomModule {}
