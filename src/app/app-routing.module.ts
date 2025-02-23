import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ManageAbonementComponent } from './components/manage-abonement/manage-abonement.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ListAbonementComponent } from './components/list-abonement/list-abonement.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'register',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'add-client',
    component: AddClientComponent
  },
  {
    path: 'manage-abonement',
    component: ManageAbonementComponent
  },
  {
    path: 'list-abonement',
    component: ListAbonementComponent
  },
  {
    path: 'subscribe',
    component: SubscribeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
