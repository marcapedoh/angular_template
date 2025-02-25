import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ManageAbonementComponent } from './components/manage-abonement/manage-abonement.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { ListAbonementComponent } from './components/list-abonement/list-abonement.component';
import { InterceptInterceptor } from './components/interceptor/intercept.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignUpComponent,
    LoginComponent,
    AddClientComponent,
    ManageAbonementComponent,
    SubscribeComponent,
    ListAbonementComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
