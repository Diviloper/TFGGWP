import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
    selector:'navbar',
    templateUrl: './navbar.html',
    styleUrls: ['./navbar.scss']
})
export class Navbar {
    title1 = 'Els meus TFGs';
    title2 = 'TFGs proposats';

    constructor(private userService: UserService, private router: Router) {

    }
}