import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/login.service';

@Component({
    selector: 'page-login',
    templateUrl: './login.html',
    styleUrls: ['./login.scss']
})
export class PageLogin {
    email = '';
    password = '';

    constructor(private router: Router, private userService: UserService) {

    }

    onLogin() {
        // mirar que email i password estiguin be
        this.userService.updateUser(this.email, false);
        this.router.navigate(['/home']);
    }
}
