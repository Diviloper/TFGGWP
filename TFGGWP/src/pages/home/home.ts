import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-home',
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class PageHome implements OnInit{
  data: any[];

  constructor(private router: Router) {}

  ngOnInit() {
    // TODO read data from DB
  }
}
