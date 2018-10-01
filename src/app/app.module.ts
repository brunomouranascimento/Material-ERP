import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule,
        MatToolbarModule,
        MatButtonModule, MatSidenavModule,
        MatIconModule, MatListModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule
        } from '@angular/material';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
