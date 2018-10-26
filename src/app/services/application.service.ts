import { Injectable } from '@angular/core';

import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  getApplicationSettings() {
    return {
      name: 'Material ERP'
    };
  }

  constructor(private firebaseService: FirebaseService) { }

  getMenus() {
    return this.firebaseService.getMenus();
  }
}
