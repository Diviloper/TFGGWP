import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/index';
import { UserService } from '../services/user.service';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient, private userService: UserService) { }

  postTFG(username, title, isProf) {
    const body = {
      title: title,
      is_professor: isProf,  
      email: username
    };
    return this.http.post('http://localhost:3000/insert_tfg', body);
  }

  getTFG(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/get_tfg_user?user=${this.userService.email}`);
    
  }

  getTFGProfes() {
    return this.http.get(`http://localhost:3000/get_tfg_disponibles?is_professor=${this.userService.esProfessor}`);
  }

  getTFGByTitle(title) {
    return this.http.get(`http://localhost:3000/get_tfg_by_title?title=${title}`);
  }

  removeTFG(title) {
    let body = {
      title: title
    }
    return this.http.post('http://localhost:3000/remove_tfg', body);
  }

  addUserTFG(title, username, isProf){
    const body = {
      title: title,
      user: username,
      is_professor: isProf
    }
    return this.http.post('http://localhost:3000/add_user_to_tfg', body);
  }

  updateDescriptionTFG(title, description) {
    const body = {
      title: title,
      description: description
    }
    return this.http.post('http://localhost:3000/add_tfg_description', body);
  }
}
