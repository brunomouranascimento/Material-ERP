import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { AlertModule } from 'ngx-bootstrap';
import { NotificationCenterComponent } from './components/notification-center/notification-center.component';
import { AppMaterialModule } from './material/app-material.module';
import { AppRoutingModule } from './routes/app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    NotificationCenterComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    AppMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
