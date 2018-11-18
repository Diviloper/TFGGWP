import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) { }

  postTFG(username, title, isProf) {
    const body = {
      title: title,
      is_Professor: isProf,
      email: username
    };
    return this.http.post(`http://localhost:3000/insert_tfg`, body);
  }

  getTFG(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/insert_TFG');
  }
}
