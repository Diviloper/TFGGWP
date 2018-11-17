import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'page-login',
    templateUrl: './login.html',
    styleUrls: ['./login.scss']
})
export class PageLogin {
    email = '';
    password = '';

    constructor(private router: Router) {
            
    }

    onLogin() {
        // mirar que email i password estiguin be
        this.router.navigate(['/home']);
    }
}