import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../services/user.service';
import {LoginService} from '../login/login.service';
import {RegisterService} from './register.service';

@Component({
    selector: 'page-register',
    templateUrl: './register.html',
    styleUrls: ['./register.scss']
})
export class PageRegister {
    email = '';
    password = '';
    professor = false;
    error = '';

    constructor(private router: Router,
                private registerService: RegisterService) {}

  onRegister() {
    // mirar que email i password estiguin be
    this.registerService.signIn(this.email, this.password, this.professor)
      .subscribe((data: any) => {
        console.log(data);
      },
        error => (this.error = error.message)
      );
    if (this.error === '') {
      this.router.navigate(['/']);
    } else {
      console.log(this.error);
    }
  }

  onGoBack() {
      this.router.navigate(['/']);
  }
}
