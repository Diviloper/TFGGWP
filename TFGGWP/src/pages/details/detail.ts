import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
    selector:'page-detail',
    templateUrl: './details.html',
    styleUrls: ['./details.scss']
})
export class PageDetails implements OnInit{
    msg = {
        professor:'',
        alumne:''
    }
    data: any = {
        title: '',
        professor: '',
        alumne: '',
        creador:'',
        description:''
    }
    title: number;
    constructor(private homeService:HomeService,
        private userService:UserService,
    private route:ActivatedRoute, private router: Router) {

    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.title = params['title']; });
        this.homeService.getTFGByTitle(this.title).subscribe((data:any) => {
            this.data.title = data.title;
            this.data.professor = data.professor;
            console.log('Data prof:' + this.data.professor);
            if (!this.data.professor) this.msg.professor = 'No hi ha cap professor assignat';
            else this.msg.professor = data.professor;
            this.data.alumne = data.alumne;
            if (!this.data.alumne) this.msg.alumne = 'No hi ha cap alumne assignat';
            else this.msg.alumne = data.alumne;
            this.data.creador = data.creador;
            this.data.description = data.description;
            console.log(data.description);
        });
    }

    remove() {
        this.homeService.removeTFG(this.data.title).subscribe();
        this.router.navigate(['/home']);
    }

    unirse() {
        this.homeService.addUserTFG(this.data.title, this.userService.email, this.userService.esProfessor).subscribe();
    }

    actualitzar() {
        this.homeService.updateDescriptionTFG(this.data.title, this.data.description).subscribe();
    }

    esPotUnir() {
         return this.userService.email != this.data.professor && this.userService.email != this.data.alumne
    }
}