import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacesComponent } from './spaces.component';
import { UiModule } from 'src/app/ui/ui.module';



@NgModule({
  declarations: [
    SpacesComponent
  ],
  imports: [
    CommonModule, UiModule
  ],exports:[
    SpacesComponent
  ]
})
export class SpacesModule { }