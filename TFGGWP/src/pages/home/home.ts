import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HomeService} from './home.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'page-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class PageHome implements OnInit {
  data: any[];
  add = false;
  title: string;
  constructor(private router: Router,
              private homeService: HomeService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.homeService.getTFG().subscribe(d => {
      this.data = d as any[];
    });
  }

  nouTFG() {
    this.add = !this.add;
  }

  postTFG() {
    this.homeService.postTFG(this.userService.email, this.title, this.userService.esProfessor);
    if (this.userService.esProfessor) {
      this.data.push({
        title: this.title,
        alumne: '',
        professor: this.userService.email
      });
    } else {
      this.data.push({
        title: this.title,
        alumne: this.userService.email,
        professor: ''
      });
    }
    this.title = '';
    this.add = false;
  }
}
