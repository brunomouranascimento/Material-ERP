import { Injectable } from '@angular/core';

import { APIService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public api: APIService) { }

  getUsers() {
    return this.api.getUsers();
  }
}
