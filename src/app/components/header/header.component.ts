import { Component, OnInit } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { formatDate } from '@angular/common';

@Component({
  selector: 'erp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dayName = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  monName = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Agosto', 'Outubro', 'Novembro', 'Dezembro'];
  today = new Date();
  now: string;
  isActive = false;

  constructor(
    private breakpointObserver: BreakpointObserver)  {
      this.now = `${(this.dayName[this.today.getDay()])},
      ${this.today.getDate()} de ${this.monName[this.today.getMonth()]} de ${this.today.getFullYear()}`;
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  changeTheme(theme: string) {
    const classList = document.body.classList;
    while (classList.length > 0) {
      classList.remove(classList.item(0));
    }
    document.body.classList.add(`${theme}-theme`);
  }

  toggleNotificationCenter() {
    this.isActive = !this.isActive;
    console.log(this.isActive);
  }

  ngOnInit() {
  }

}
