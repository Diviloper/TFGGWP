import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class PageHome implements OnInit {
  data: any[];
  add = false;
  title: string;
  email: string;
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.data = [
      {
        title: 'Com fer una Web sense api per facilitar la trobada de professors i alumnes a l\'hora de fer TFG',
        emailProf: 'profe1@upc.edu',
        emailAlumne: ''
      },
      {
        title: 'Com mantenir les flatulencies al recte sense que exploti',
        emailProf: '',
        emailAlumne: 'alumne1@hey.com'
      },
      {
        title: 'Com manipular el temps atmosferic realitzant dances al voltant d\'una foguera',
        emailProf: 'profe2@upc.edu',
        emailAlumne: 'alumne2@upc.edu'
      },
      {
        title: 'Com reviure al teu gat les 6 primeres vegades que mor',
        emailProf: '',
        emailAlumne: 'amodungatmort@hey.com'
      }
    ];
    // TODO read data from DB
  }

  nouTFG() {
    this.add = true;
  }

  postTFG() {
    this.data.push({
      title: this.title,
      emailProf: '',
      emailAlumne: this.email
    });
    this.add = false;
    this.title = '';
    this.email = '';
  }
}
