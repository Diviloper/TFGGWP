import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { LoginService } from './login.service';

@Component({
    selector: 'page-login',
    templateUrl: './login.html',
    styleUrls: ['./login.scss']
})
export class PageLogin {
    email = '';
    password = '';

    error = '';
    constructor(private router: Router,
        private userService: UserService,
        private loginService: LoginService) {

    }

    onLogin() {
        // mirar que email i password estiguin be
        this.loginService.logIn(this.email, this.password)
            .subscribe((data: any) => {
                console.log(data);
            },
            error => {
                this.error = error.message;
                console.log(error.message);
            });

        if (this.error === '') {
            this.userService.updateUser(this.email, false);
            this.router.navigate(['/home']);
        }
    }
}
