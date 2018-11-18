import { Component } from '@angular/core';

@Component({
    selector: 'page-detail',
    templateUrl: './details.html',
    styleUrls: ['./details.scss']
})
export class PageDetails {
  title = 'Hey There';
  emailP = 'profe@cs.upc.edu';
  emailA = 'alumne@est.fib.upc.edu';

    constructor() {

    }
}
