import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'erp-notification-center',
  templateUrl: './notification-center.component.html',
  styleUrls: ['./notification-center.component.scss']
})
export class NotificationCenterComponent implements OnInit {

  @Input() isActive: boolean;
  @Output() close = new EventEmitter<boolean>();

  dayName = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  monName = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  today = new Date();
  now: string;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.now = `${(this.dayName[this.today.getDay()])},
      ${this.today.getDate()} de ${this.monName[this.today.getMonth()]} de ${this.today.getFullYear()}`;

  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  closeNotificationCenter(close: boolean) {
    this.close.emit(close);
  }

  ngOnInit() {
  }

}
