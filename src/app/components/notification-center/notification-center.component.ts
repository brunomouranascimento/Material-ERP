import { Component, OnInit, Input, Output, EventEmitter, DoCheck, IterableDiffers, } from '@angular/core';

import { DaytimeService } from '../../services/daytime.service';
import { NotificationService } from '../../services/notification.service';
import { Notification } from './../../models/notification';

@Component({
  selector: 'app-notification-center',
  templateUrl: './notification-center.component.html',
  styleUrls: ['./notification-center.component.scss']
})
export class NotificationCenterComponent implements OnInit, DoCheck {

  @Input() isActive: boolean;
  @Output() close = new EventEmitter<boolean>();
  @Output() notification$ = new EventEmitter<number>();

  notificationsCount: number;
  defaultAlerts: any[];
  alerts: any[] = [];
  notifications: Notification[];
  now: string;

  todayTabActive = true;
  notificationsTabActive = false;
  iterableDiffer: any;

  constructor(
    private daytimeService: DaytimeService,
    private notificationService: NotificationService,
    private _iterableDiffers: IterableDiffers) {
      this.iterableDiffer = this._iterableDiffers.find([]).create(null);
    }

  toggleTodayTab() {
    this.todayTabActive = true;
    this.notificationsTabActive = false;
  }

  toggleNotificationsTab() {
    this.notificationsTabActive = true;
    this.todayTabActive = false;
  }

  closeNotificationCenter(close: boolean) {
    this.close.emit(close);
  }

  resetNotifications(): void {
    this.notifications = this.defaultAlerts;
  }

  clearNotifications() {
    this.notifications = [];
  }

  dismissNotification(notification) {
    this.notifications.splice(this.notifications.indexOf(notification), 1);
  }

  ngOnInit() {
    this.now = this.daytimeService.getDaytTime();
    this.notificationService.getNotifications().subscribe(notifications => {
      this.notifications = notifications;
      this.defaultAlerts = this.notifications;
      this.notificationsCount = this.notifications.length;
      this.notification$.emit(this.notificationsCount);
    });
  }

  ngDoCheck() {
    const changes = this.iterableDiffer.diff(this.notifications);
    if (changes) {
      this.notificationsCount = this.notifications.length;
      this.notification$.emit(this.notificationsCount);
    }
  }
}
