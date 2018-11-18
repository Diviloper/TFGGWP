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
  data: any[] = [];
  add = false;
  title = '';
  constructor(private router: Router,
              private homeService: HomeService,
              private userService: UserService) {
  }
  first = true;

  ngOnInit() {
    console.log("OnInit");
    this.homeService.getTFG().subscribe(d => {
      this.data = d as any[];
      if(this.first){
        this.first = false;
        this.ngOnInit();
      }
      console.log("Data: " + this.data);
    });
  }

  

  nouTFG() {
    this.add = !this.add;
  }

  postTFG() {
    if (this.title === '') {
      console.log('HEy');
      this.add = false;
    }
    else {
      console.log('Es professor al crear un nou tfg: ' + this.userService.esProfessor);
      this.homeService.postTFG(this.userService.email, this.title, this.userService.esProfessor).subscribe();
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

  goToDetail(d) {
    this.router.navigate([`/tfg/${d.title}`]);
  }
}
