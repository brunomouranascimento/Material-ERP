import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: any;
  notificationsCount: number;

  notificationCenterOpened  = false;
  sidenavCompacted          = false;
  mobileSidenavOpened       = false;
  teste: number;

  constructor( private userService: UserService )  {}

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

  onCloseNotificationCenter(closeNotificationCenter: boolean) {
    this.notificationCenterOpened = closeNotificationCenter;
  }

  onCompactSidenav(compactSidenav: boolean) {
    this.sidenavCompacted = compactSidenav;
  }

  onCloseMobileSidenav(closeMobileSidenav: boolean) {
    this.mobileSidenavOpened = closeMobileSidenav;
  }

  toggleMobileSidenav() {
    this.mobileSidenavOpened = !this.mobileSidenavOpened;
  }

  onNotificationsCount(count: number) {
    this.notificationsCount = count;
  }

  ngOnInit() {
    this.user = this.userService.getUser();
  }
}
