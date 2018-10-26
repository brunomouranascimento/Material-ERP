import { Injectable } from '@angular/core';

import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public firebaseService: FirebaseService) { }

  getUsers() {
    return this.firebaseService.getUsers();
  }
}
