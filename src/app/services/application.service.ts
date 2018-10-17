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
        routerLink: '../../pages/dashboard'
      },
      {
        id: 2,
        label: 'Página 1',
        icon: 'description',
        routerLink: '../../pages/pagina1'
      },
      {
        id: 3,
        label: 'Página 2',
        icon: 'dns',
        routerLink: '../../pages/pagina2'
      },
      {
        id: 4,
        label: 'Página 3',
        icon: 'event',
        routerLink: '../../pages/pagina3'
      }
    ];
  }

  constructor() { }
}
