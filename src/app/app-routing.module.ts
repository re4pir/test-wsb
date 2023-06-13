import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AuthComponent } from './pages/auth/auth.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { MapComponent } from './pages/main/map/map.component';
import { UsersComponent } from './pages/main/users/users.component';
import { ScheduleComponent } from './pages/main/schedule/schedule.component';
import { AccountComponent } from './pages/main/account/account.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'map' },
      { path: 'map', component: MapComponent },
      { path: 'users', component: UsersComponent },
      { path: 'sch', component: ScheduleComponent },
      { path: 'acc', component: AccountComponent },
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '404',
    component: NotfoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
