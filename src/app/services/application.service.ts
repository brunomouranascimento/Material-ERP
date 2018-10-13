import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  getApplicationSettings() {
    return {
      name: 'Material ERP'
    };
  }

  getApplicationMenus() {
    return [
      {
        id: 1,
        label: 'Dashboard',
        icon: 'dashboard',
        routerLink: '../../pages/home'
      },
      {
        id: 2,
        label: 'Página 1',
        icon: 'dashboard',
        routerLink: '../../pages/pagina1'
      },
      {
        id: 3,
        label: 'Página 2',
        icon: 'dashboard',
        routerLink: '../../pages/pagina2'
      },
      {
        id: 4,
        label: 'Página 3',
        icon: 'dashboard',
        routerLink: '../../pages/pagina3'
      }
    ];
  }

  constructor() { }
}
