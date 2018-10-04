import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { Pagina1Component } from '../pages/pagina1/pagina1.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { MainComponent } from '../components/main/main.component';
import { HomeComponent } from '../pages/home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pages/pagina1', component: Pagina1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
