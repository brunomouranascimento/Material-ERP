import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pagina1Component } from '../pages/pagina1/pagina1.component';
import { HomeComponent } from '../pages/home/home.component';
import { Pagina2Component } from '../pages/pagina2/pagina2.component';
import { Pagina3Component } from '../pages/pagina3/pagina3.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pages/home', component: HomeComponent},
  {path: 'pages/pagina1', component: Pagina1Component},
  {path: 'pages/pagina2', component: Pagina2Component},
  {path: 'pages/pagina3', component: Pagina3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
