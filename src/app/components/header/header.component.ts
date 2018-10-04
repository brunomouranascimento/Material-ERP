import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  notificationCenterOpened = false;
  user: {};

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

  onClose(closeNotificationCenter: boolean) {
    this.notificationCenterOpened = closeNotificationCenter;
  }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

}
