import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina3Component } from './pagina3/pagina3.component';
import { HomeComponent } from './home/home.component';

import { ComponentsModule } from '../components/components.module';
import { AngularMaterialModule } from '../components/angular material/app-material.module';




@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    AngularMaterialModule
  ],
  exports: [],
  declarations: [
    Pagina1Component,
    Pagina2Component,
    Pagina3Component,
    HomeComponent
  ]
})
export class PagesModule { }
