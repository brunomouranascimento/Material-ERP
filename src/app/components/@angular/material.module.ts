import { NgModule } from '@angular/core';

import * as Material from '@angular/material';

@NgModule({
  imports: [
    Material.MatTooltipModule,
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatListModule,
    Material.MatMenuModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatTabsModule,
    Material.MatBadgeModule,
    Material.MatSlideToggleModule,
    Material.MatCardModule,
    Material.MatProgressSpinnerModule
  ],
  exports: [
    Material.MatTooltipModule,
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatListModule,
    Material.MatMenuModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatTabsModule,
    Material.MatBadgeModule,
    Material.MatSlideToggleModule,
    Material.MatCardModule,
    Material.MatProgressSpinnerModule
  ],
  declarations: []
})
export class MaterialModule { }
