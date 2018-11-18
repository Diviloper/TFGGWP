import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../home/home.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'page-other',
  templateUrl: './othersTFG.html',
  styleUrls: ['./othersTFG.scss']
})
export class PageOthersTFG {
  data: any[] = [];

  constructor(private router: Router,
              private homeService: HomeService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.homeService.getTFGProfes().subscribe( (data: any) => this.data = data);
    if(this.userService.email === '') this.router.navigate([`/`]);
  }

  goToDetail(d) {
    this.router.navigate([`/tfg/${d.title}`]);
  }

}
