import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ApplicationService } from '../../services/application.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() isMobileActive: boolean;
  @Output() isCompacted = new EventEmitter<boolean>();

  isMinimized = false;
  application: any;
  menus: any;
  user: any;

  constructor(private applicationService: ApplicationService, private userService: UserService) {}


  compactSidenav(compact: boolean) {
    this.isMinimized = !this.isMinimized;
    this.isCompacted.emit(compact);
  }

  ngOnInit() {
    this.application = this.applicationService.getApplicationSettings();
    this.menus = this.applicationService.getApplicationMenus();
    this.user = this.userService.getUser();
  }
}
