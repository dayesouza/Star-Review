import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent,  canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class CoreRoutingModule { }