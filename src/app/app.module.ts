import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import 'hammerjs';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './routes/app.routing.module';

import { ApplicationService } from './services/application.service';
import { UserService } from './services/user.service';
import { DaytimeService } from './services/daytime.service';
import { NotificationService } from './services/notification.service';
import { APIService } from './services/api.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'material-erp'),
    AngularFirestoreModule,
    ComponentsModule,
    PagesModule,
    AppRoutingModule
  ],
  providers: [
    ApplicationService,
    UserService,
    DaytimeService,
    NotificationService,
    APIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
