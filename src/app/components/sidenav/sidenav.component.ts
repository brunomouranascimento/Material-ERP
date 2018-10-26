import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ApplicationService } from '../../services/application.service';
import { User } from '../../models/user';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() isMobileActive: boolean;
  @Input() logedUser: User[];
  @Output() isCompacted = new EventEmitter<boolean>();
  @Output() close = new EventEmitter<boolean>();

  isMinimized = false;

  application: any;
  menus: Menu[];

  constructor(private applicationService: ApplicationService) { }

  compactSidenav(compact: boolean) {
    this.isMinimized = !this.isMinimized;
    this.isCompacted.emit(compact);
  }

  closeMobileSidenav(close: boolean) {
    this.close.emit(close);
    this.isMobileActive = !this.isMobileActive;
  }

  ngOnInit() {
    this.application = this.applicationService.getApplicationSettings();
    this.applicationService.getMenus().subscribe(menus => {
      this.menus = menus;
    });
  }
}
