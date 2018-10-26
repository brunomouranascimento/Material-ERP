import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../components/@angular/material.module';

import { Pagina1Component } from './pages/pagina1/pagina1.component';
import { Pagina2Component } from './pages/pagina2/pagina2.component';
import { Pagina3Component } from './pages/pagina3/pagina3.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './dashboards/dashboard/dashboard.component';
import { AutocompleteComponent } from './angular-material/autocomplete/autocomplete.component';
import { BadgeComponent } from './angular-material/badge/badge.component';
import { BottomSheetComponent } from './angular-material/bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './angular-material/button/button.component';
import { ButtonToggleComponent } from './angular-material/button-toggle/button-toggle.component';
import { CardMaterialComponent } from './angular-material/card-material/card-material.component';
import { CheckboxComponent } from './angular-material/checkbox/checkbox.component';
import { ChipsComponent } from './angular-material/chips/chips.component';
import { DatepickerComponent } from './angular-material/datepicker/datepicker.component';
import { DialogComponent } from './angular-material/dialog/dialog.component';
import { DividerComponent } from './angular-material/divider/divider.component';
import { ExpansionPanelComponent } from './angular-material/expansion-panel/expansion-panel.component';
import { FormFieldComponent } from './angular-material/form-field/form-field.component';
import { GridListComponent } from './angular-material/grid-list/grid-list.component';
import { IconComponent } from './angular-material/icon/icon.component';
import { InputComponent } from './angular-material/input/input.component';
import { ListComponent } from './angular-material/list/list.component';
import { MenuComponent } from './angular-material/menu/menu.component';
import { PaginatorComponent } from './angular-material/paginator/paginator.component';
import { ProgressBarComponent } from './angular-material/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './angular-material/progress-spinner/progress-spinner.component';
import { RadioButtonComponent } from './angular-material/radio-button/radio-button.component';
import { RipplesComponent } from './angular-material/ripples/ripples.component';
import { SelectComponent } from './angular-material/select/select.component';
import { SidenavMaterialComponent } from './angular-material/sidenav-material/sidenav-material.component';
import { SlideToggleComponent } from './angular-material/slide-toggle/slide-toggle.component';
import { SliderComponent } from './angular-material/slider/slider.component';
import { SnackbarComponent } from './angular-material/snackbar/snackbar.component';
import { SortHeaderComponent } from './angular-material/sort-header/sort-header.component';
import { StepperComponent } from './angular-material/stepper/stepper.component';
import { TableComponent } from './angular-material/table/table.component';
import { TabsComponent } from './angular-material/tabs/tabs.component';
import { ToolbarComponent } from './angular-material/toolbar/toolbar.component';
import { TooltipComponent } from './angular-material/tooltip/tooltip.component';
import { TreeComponent } from './angular-material/tree/tree.component';

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
    DashboardComponent,
    AutocompleteComponent,
    BadgeComponent,
    BottomSheetComponent,
    ButtonComponent,
    ButtonToggleComponent,
    CardMaterialComponent,
    CheckboxComponent,
    ChipsComponent,
    DatepickerComponent,
    DialogComponent,
    DividerComponent,
    ExpansionPanelComponent,
    FormFieldComponent,
    GridListComponent,
    IconComponent,
    InputComponent,
    ListComponent,
    MenuComponent,
    PaginatorComponent,
    ProgressBarComponent,
    ProgressSpinnerComponent,
    RadioButtonComponent,
    RipplesComponent,
    SelectComponent,
    SidenavMaterialComponent,
    SlideToggleComponent,
    SliderComponent,
    SnackbarComponent,
    SortHeaderComponent,
    StepperComponent,
    TableComponent,
    TabsComponent,
    ToolbarComponent,
    TooltipComponent,
    TreeComponent
  ]
})
export class PagesModule { }
