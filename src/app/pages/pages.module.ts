import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../components/@angular/material.module';

import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina3Component } from './pagina3/pagina3.component';
import { HomeComponent } from './home/home.component';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    ComponentsModule,
    MaterialModule
  ],
  exports: [],
  declarations: [
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
    HomeComponent,
    DashboardComponent
  ]
})
export class PagesModule { }
