import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class PageHome implements OnInit {
  data: any[];

  constructor(private router: Router) {}

  ngOnInit() {
    // TODO read data from DB
  }
}
