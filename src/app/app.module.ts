import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { NotificationCenterComponent } from './components/notification-center/notification-center.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';

import { AlertModule } from 'ngx-bootstrap';
import { AppMaterialModule } from './material/app-material.module';
import { AppRoutingModule } from './routes/app.routing.module';

import { UserService } from './services/user.service';
import { DaytimeService } from './services/daytime.service';
import { AlertService } from './services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    NotificationCenterComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    AppMaterialModule,
    AppRoutingModule
  ],
  providers: [UserService, DaytimeService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
