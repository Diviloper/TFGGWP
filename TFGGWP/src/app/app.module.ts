import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageLogin } from 'src/pages/login/login';
import { PageRegister } from 'src/pages/register/register';
import { Routes, RouterModule } from '@angular/router';
import { Navbar } from 'src/pages/navbar/navbar';
import { UserService } from 'src/pages/services/user.service';
import { PageHome } from 'src/pages/home/home';
import { LoginService } from 'src/pages/login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from '../pages/register/register.service';
import {HomeService} from '../pages/home/home.service';
import { PageOthersTFG } from 'src/pages/othersTFG/othersTFG';
import { PageDetails } from 'src/pages/details/detail';


const appRoutes: Routes = [
  {
    path: '',
    component: PageLogin
  }, {
    path: 'register',
    component: PageRegister,

  }, {
    path: 'home',
    component: PageHome,
  }, {
    path: 'others',
    component: PageOthersTFG,
  }, {
    path: 'tfg/:title',
    component: PageDetails,
  }
];
@NgModule({
  declarations: [
    AppComponent,
    PageLogin,
    PageRegister,
    Navbar,
    PageHome,
    PageOthersTFG,
    PageDetails,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [UserService,
    LoginService,
  RegisterService,
  HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
