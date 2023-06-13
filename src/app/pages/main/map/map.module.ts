import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { UiModule } from 'src/app/ui/ui.module';
import { FiltersModule } from './filters/filters.module';
import { BottomSheetModule } from './bottom-sheet/bottom-sheet.module';
import { SpacesModule } from './spaces/spaces.module';
import { ZoomModule } from './zoom/zoom.module';
@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, UiModule, FiltersModule,BottomSheetModule, SpacesModule,ZoomModule],
  exports: [MapComponent],
})
export class MapModule {}
