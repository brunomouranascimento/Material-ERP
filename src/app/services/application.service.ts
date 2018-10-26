import { Injectable } from '@angular/core';

import { APIService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  getApplicationSettings() {
    return {
      name: 'Material ERP'
    };
  }

  constructor(private api: APIService) { }

  getMenus() {
    return this.api.getMenus();
  }
}
