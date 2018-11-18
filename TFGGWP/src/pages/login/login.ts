import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { LoginService } from './login.service';
import { HomeService } from '../home/home.service';

@Component({
    selector: 'page-login',
    templateUrl: './login.html',
    styleUrls: ['./login.scss']
})
export class PageLogin implements OnInit {
    email = '';
    password = '';

    error = '';
    data: any;
    constructor(private router: Router,
        private userService: UserService,
        private loginService: LoginService) {

    }

    ngOnInit() {
        if(this.userService.email === '') this.router.navigate([`/`]);
    }

    onLogin() {
        // mirar que email i password estiguin be
        let is_prof; 
         this.loginService.logIn(this.email, this.password)
            .subscribe(d => {
                this.data = d as any;
                is_prof = this.data.is_professor;
                this.userService.updateUser(this.email, is_prof);
                this.router.navigate(['/home']);
            },
            error => {
                this.error = error.message;
                console.log("This is error at login: " + error.message);
            });
    }
}
