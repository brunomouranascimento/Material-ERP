import { NgModule } from '@angular/core';

import {
  MatTooltipModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatBadgeModule,
  MatSlideToggleModule
} from '@angular/material';

@NgModule({
  imports: [
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatBadgeModule,
    MatSlideToggleModule
  ],
  exports: [
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatBadgeModule,
    MatSlideToggleModule
  ],
  declarations: []
})
export class MaterialModule { }
