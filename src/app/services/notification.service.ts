import { Injectable } from '@angular/core';

import { APIService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private api: APIService) { }

  getNotifications() {
    return this.api.getNotifications();
  }
}
