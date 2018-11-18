import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient) { }

  signIn(username, password, professor) {
    const body = {
      username: username,
      password: password,
      is_professor: professor
    };
    return this.http.post(`http://localhost:3000/register`, body);
  }
}
