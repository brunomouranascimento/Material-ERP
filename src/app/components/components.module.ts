import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationCenterComponent } from './notification-center/notification-center.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import { MaterialErpComponent } from './material-erp/material-erp.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AlertModule } from 'ngx-bootstrap';
import { MaterialModule } from './@angular/material.module';
import { AppRoutingModule } from '../routes/app.routing.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    AlertModule.forRoot(),
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    MaterialErpComponent,
    CardComponent
  ],
  declarations: [
    SidenavComponent,
    HeaderComponent,
    NotificationCenterComponent,
    FooterComponent,
    MainComponent,
    MaterialErpComponent,
    CardComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class ComponentsModule { }
