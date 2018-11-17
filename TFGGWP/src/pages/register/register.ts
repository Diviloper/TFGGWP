import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'page-register',
    templateUrl: './register.html',
    styleUrls: ['./register.scss']
})
export class PageRegister {
    email = '';
    password = '';
    professor = false;

    constructor(private router: Router) {}

  onRegister() {
    // mirar que email i password estiguin be
    this.router.navigate(['/']);
  }
}
