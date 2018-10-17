
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

import { UserService } from './services/user.service';
import { DaytimeService } from './services/daytime.service';
import { AlertService } from './services/alert.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    ComponentsModule,
    PagesModule
  ],
  providers: [
    UserService,
    DaytimeService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
