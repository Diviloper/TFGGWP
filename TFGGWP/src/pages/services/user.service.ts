import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    email = '';
    esProfessor = false;

    constructor() {}

    updateUser(email, professor) {
        this.email = email;
        this.esProfessor = professor;
    }
}