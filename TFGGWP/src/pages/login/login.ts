import { Component } from '@angular/core';

@Component({
    selector: 'page-login',
    templateUrl: './login.html',
    styleUrls: ['./login.scss']
})
export class PageLogin {
    email = '';
    password = '';

    constuctor() {}
}