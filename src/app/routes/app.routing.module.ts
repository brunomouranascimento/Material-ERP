import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../pages/pages/home/home.component';
import { Pagina1Component } from '../pages/pages/pagina1/pagina1.component';
import { Pagina2Component } from '../pages/pages/pagina2/pagina2.component';
import { Pagina3Component } from '../pages/pages/pagina3/pagina3.component';
import { DashboardComponent } from '../pages/dashboards/dashboard/dashboard.component';
import { AutocompleteComponent } from './../pages/angular-material/autocomplete/autocomplete.component';
import { BadgeComponent } from './../pages/angular-material/badge/badge.component';
import { BottomSheetComponent } from './../pages/angular-material/bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './../pages/angular-material/button/button.component';
import { ButtonToggleComponent } from './../pages/angular-material/button-toggle/button-toggle.component';
import { CardMaterialComponent } from './../pages/angular-material/card-material/card-material.component';
import { CheckboxComponent } from '../pages/angular-material/checkbox/checkbox.component';
import { ChipsComponent } from '../pages/angular-material/chips/chips.component';
import { DatepickerComponent } from './../pages/angular-material/datepicker/datepicker.component';
import { DialogComponent } from '../pages/angular-material/dialog/dialog.component';
import { DividerComponent } from '../pages/angular-material/divider/divider.component';
import { ExpansionPanelComponent } from '../pages/angular-material/expansion-panel/expansion-panel.component';
import { FormFieldComponent } from '../pages/angular-material/form-field/form-field.component';
import { GridListComponent } from '../pages/angular-material/grid-list/grid-list.component';
import { IconComponent } from '../pages/angular-material/icon/icon.component';
import { InputComponent } from '../pages/angular-material/input/input.component';
import { ListComponent } from '../pages/angular-material/list/list.component';
import { MenuComponent } from '../pages/angular-material/menu/menu.component';
import { PaginatorComponent } from '../pages/angular-material/paginator/paginator.component';
import { ProgressBarComponent } from '../pages/angular-material/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from '../pages/angular-material/progress-spinner/progress-spinner.component';
import { RadioButtonComponent } from '../pages/angular-material/radio-button/radio-button.component';
import { RipplesComponent } from '../pages/angular-material/ripples/ripples.component';
import { SelectComponent } from '../pages/angular-material/select/select.component';
import { SidenavMaterialComponent } from '../pages/angular-material/sidenav-material/sidenav-material.component';
import { SlideToggleComponent } from '../pages/angular-material/slide-toggle/slide-toggle.component';
import { SliderComponent } from '../pages/angular-material/slider/slider.component';
import { SnackbarComponent } from '../pages/angular-material/snackbar/snackbar.component';
import { SortHeaderComponent } from '../pages/angular-material/sort-header/sort-header.component';
import { StepperComponent } from '../pages/angular-material/stepper/stepper.component';
import { TableComponent } from '../pages/angular-material/table/table.component';
import { TabsComponent } from '../pages/angular-material/tabs/tabs.component';
import { ToolbarComponent } from '../pages/angular-material/toolbar/toolbar.component';
import { TooltipComponent } from '../pages/angular-material/tooltip/tooltip.component';
import { TreeComponent } from '../pages/angular-material/tree/tree.component';

const routes: Routes = [
  {path: 'dashboards/dashboard', component: DashboardComponent},
  {path: 'pages/home', component: HomeComponent},
  {path: 'pages/pagina1', component: Pagina1Component},
  {path: 'pages/pagina2', component: Pagina2Component},
  {path: 'pages/pagina3', component: Pagina3Component},
  {path: 'angular-material/autocomplete', component: AutocompleteComponent},
  {path: 'angular-material/badge', component: BadgeComponent},
  {path: 'angular-material/bottom-sheet', component: BottomSheetComponent},
  {path: 'angular-material/button', component: ButtonComponent},
  {path: 'angular-material/autocomplete', component: AutocompleteComponent},
  {path: 'angular-material/badge', component: BadgeComponent},
  {path: 'angular-material/bottom-sheet', component: BottomSheetComponent},
  {path: 'angular-material/button', component: ButtonComponent},
  {path: 'angular-material/button-toggle', component: ButtonToggleComponent},
  {path: 'angular-material/card-material', component: CardMaterialComponent},
  {path: 'angular-material/checkbox', component: CheckboxComponent},
  {path: 'angular-material/chips', component: ChipsComponent},
  {path: 'angular-material/datepicker', component: DatepickerComponent},
  {path: 'angular-material/dialog', component: DialogComponent},
  {path: 'angular-material/divider', component: DividerComponent},
  {path: 'angular-material/expansion-panel', component: ExpansionPanelComponent},
  {path: 'angular-material/form-field', component: FormFieldComponent},
  {path: 'angular-material/grid-list', component: GridListComponent},
  {path: 'angular-material/icon', component: IconComponent},
  {path: 'angular-material/input', component: InputComponent},
  {path: 'angular-material/list', component: ListComponent},
  {path: 'angular-material/menu', component: MenuComponent},
  {path: 'angular-material/paginator', component: PaginatorComponent},
  {path: 'angular-material/progress-bar', component: ProgressBarComponent},
  {path: 'angular-material/progress-spinner', component: ProgressSpinnerComponent},
  {path: 'angular-material/radio-button', component: RadioButtonComponent},
  {path: 'angular-material/ripples', component: RipplesComponent},
  {path: 'angular-material/select', component: SelectComponent},
  {path: 'angular-material/sidenav-material', component: SidenavMaterialComponent},
  {path: 'angular-material/slide-toggle', component: SlideToggleComponent},
  {path: 'angular-material/slider', component: SliderComponent},
  {path: 'angular-material/snackbar', component: SnackbarComponent},
  {path: 'angular-material/sort-header', component: SortHeaderComponent},
  {path: 'angular-material/stepper', component: StepperComponent},
  {path: 'angular-material/table', component: TableComponent},
  {path: 'angular-material/tabs', component: TabsComponent},
  {path: 'angular-material/toolbar', component: ToolbarComponent},
  {path: 'angular-material/tooltip', component: TooltipComponent},
  {path: 'angular-material/tree', component: TreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
