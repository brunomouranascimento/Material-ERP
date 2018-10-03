import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser() {
    return {
      id: 1,
      name: 'Bruno Nascimento'
    };
  }
}
