import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-other',
  templateUrl: './othersTFG.html',
  styleUrls: ['./othersTFG.scss']
})
export class PageOthersTFG {

  constructor(private router: Router) {
  }

  gotToDetail(d) {
    this.router.navigate([`/tfg/${d.id}`]);
  }

}
