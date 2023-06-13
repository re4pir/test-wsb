import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { UiModule } from 'src/app/ui/ui.module';
import { AccountModule } from './account/account.module';
import { MapModule } from './map/map.module';
import { ScheduleModule } from './schedule/schedule.module';
import { UsersModule } from './users/users.module';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    UiModule,
    AccountModule,
    MapModule,
    ScheduleModule,
    UsersModule,
    MainRoutingModule
  ],exports:[
    MainComponent
  ]
})
export class MainModule {}
