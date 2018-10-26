import { Component, OnInit } from '@angular/core';

import { UserService } from './services/user.service';
import { User } from '../app/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  notificationsCount: number;
  logedUser: User[];

  notificationCenterOpened  = false;
  sidenavCompacted          = false;
  mobileSidenavOpened       = false;
  isLoged                   = false;

  constructor(private userService: UserService)  { }

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

  onLogin(loged: boolean) {
    this.isLoged = loged;
  }

  logout() {
    this.isLoged = false;
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.logedUser = users;
    });
    console.log(this.isLoged);
  }
}
