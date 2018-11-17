import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
    selector:'navbar',
    templateUrl: './navbar.html',
    styleUrls: ['./navbar.scss']
})
export class Navbar implements OnInit {
    title1 = 'TFGs';
    title2 = 'Professors';

    constructor(private userService: UserService, private router: Router) {

    }

    ngOnInit() {
        if (this.userService.esProfessor) {
            this.title1 = 'TFGs sense professor';
        }
    }

    showDropdown() {
        
    }
}