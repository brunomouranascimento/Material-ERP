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
import { Pagina1Component } from './pages/pagina1/pagina1.component';
import { Pagina2Component } from './pages/pagina2/pagina2.component';
import { Pagina3Component } from './pages/pagina3/pagina3.component';
import { HomeComponent } from './pages/home/home.component';
import { PaceBarComponent } from './components/pace-bar/pace-bar.component';
import { MaterialErpComponent } from './components/material-erp/material-erp.component';

import { AlertModule } from 'ngx-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AppMaterialModule } from './material/app-material.module';
import { AppRoutingModule } from './routes/app.routing.module';

import { UserService } from './services/user.service';
import { DaytimeService } from './services/daytime.service';
import { AlertService } from './services/alert.service';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    NotificationCenterComponent,
    FooterComponent,
    MainComponent,
    Pagina1Component,
    HomeComponent,
    PaceBarComponent,
    Pagina2Component,
    Pagina3Component,
    MaterialErpComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    AppMaterialModule,
    PerfectScrollbarModule,
    AppRoutingModule
  ],
  providers: [UserService, DaytimeService, AlertService, {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
