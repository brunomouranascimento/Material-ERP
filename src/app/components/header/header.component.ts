import { Component, OnInit } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'erp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  notificationCenterOpened = false;

  constructor( private breakpointObserver: BreakpointObserver )  {
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


  toggleNotificationCenter(open: boolean) {
    this.notificationCenterOpened = open;
  }

  onClose(closeNotificationCenter: boolean) {
    this.notificationCenterOpened = closeNotificationCenter;
  }

  ngOnInit() {
  }

}
