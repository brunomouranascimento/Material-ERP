import { NgModule } from '@angular/core';

import {
  MatTooltipModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
   MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    MatTooltipModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule
  ],
  exports: [
    MatTooltipModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule
  ],
  declarations: []
})
export class AppMaterialModule { }
