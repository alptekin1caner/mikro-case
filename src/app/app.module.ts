import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardApiService } from './services/dashboard-api.service';
import { CardMemberComponent } from './components/card-member/card-member.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    PageNotFoundComponent,
    DashboardComponent,
    CardMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [Title, DashboardApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
