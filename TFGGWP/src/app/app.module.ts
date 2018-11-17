import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageLogin } from 'src/pages/login/login';
import { PageRegister } from 'src/pages/register/register';
import { Routes, RouterModule } from '@angular/router';
import { Navbar } from 'src/pages/navbar/navbar';
import { UserService } from 'src/pages/services/login.service';
import { PageHome } from 'src/pages/home/home';


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
  }
]
@NgModule({
  declarations: [
    AppComponent, 
    PageLogin, 
    PageRegister,
    Navbar,
    PageHome,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
