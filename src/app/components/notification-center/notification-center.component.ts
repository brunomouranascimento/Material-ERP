import { Component, OnInit, Input, Output, DoCheck, EventEmitter, } from '@angular/core';

import { DaytimeService } from '../../services/daytime.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-notification-center',
  templateUrl: './notification-center.component.html',
  styleUrls: ['./notification-center.component.scss']
})
export class NotificationCenterComponent implements OnInit, DoCheck {

  @Input() isActive: boolean;
  @Output() close = new EventEmitter<boolean>();
  @Output() notifications = new EventEmitter<number>();

  notificationsCount: any;
  defaultAlerts: any[];
  alerts: any[];
  now: string;

  todayTabActive = true;
  notificationsTabActive = false;

  constructor(private daytimeService: DaytimeService, private alertService: AlertService) {
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
    this.alerts = this.defaultAlerts;
  }

  clearNotifications() {
    this.alerts = [];
  }

  dismissNotification(notification) {
    this.alerts.splice(this.alerts.indexOf(notification), 1);
  }

  ngOnInit() {
    this.now = this.daytimeService.getDaytTime();
    this.defaultAlerts = this.alertService.getAlerts();
    this.alerts = this.alertService.getAlerts();
    this.notificationsCount = this.alerts.length;
  }

  ngDoCheck() {
    this.notificationsCount = this.alerts.length;
    this.notifications.emit(this.notificationsCount);
  }

}
