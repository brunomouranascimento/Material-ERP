import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DaytimeService } from '../../services/daytime.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-notification-center',
  templateUrl: './notification-center.component.html',
  styleUrls: ['./notification-center.component.scss']
})
export class NotificationCenterComponent implements OnInit {

  @Input() isActive: boolean;
  @Output() close = new EventEmitter<boolean>();

  dismissible = true;
  defaultAlerts: any[];
  alerts: any[];
  now: string;

  constructor( private daytimeService: DaytimeService,
    private alertService: AlertService ) {
  }

  closeNotificationCenter(close: boolean) {
    this.close.emit(close);
  }

  reset(): void {
    this.alerts = this.defaultAlerts;
  }

  clear() {
    this.alerts = [];
  }

  onClosed(dismissedAlert: any): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }



  ngOnInit() {
    this.now = this.daytimeService.getDaytTime();
    this.defaultAlerts = this.alertService.getAlerts();
    this.alerts = this.alertService.getAlerts();
  }

}
