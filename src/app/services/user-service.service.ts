import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  getUser() {
    return {
      id: 1
    };
  }
}
