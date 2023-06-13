import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters.component';
import { UiModule } from 'src/app/ui/ui.module';



@NgModule({
  declarations: [
    FiltersComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ],exports:[
    FiltersComponent
  ]
})
export class FiltersModule { }
