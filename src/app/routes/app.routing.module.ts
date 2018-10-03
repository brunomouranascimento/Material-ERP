import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent
  // },
  // {
  //   path: 'teste',
  //   component: TesteComponent
  // },
  // {
  //   path: 'teste2',
  //   component: Teste2Component
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
