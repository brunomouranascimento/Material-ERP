import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser() {
    return {
      id: 1,
      name: 'Bruno Nascimento',
      email: 'bruno.bmn@gmail.com',
      occupation: 'Front-End Developer',
      avatar: 'assets/images/avatars/bruno.jpg'
    };
  }
}
