import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  getAlerts() {
    return [
      {
        type: 'success',
        msg: 'Notificação de operação concluída com sucesso'
      },
      {
        type: 'info',
        msg: 'Notificação de informação exibida, sem importância'
      },
      {
        type: 'danger',
        msg: 'Notificação importante, solicitando atenção'
      },
      {
        type: 'success',
        msg: 'Notificação de operação concluída com sucesso'
      },
      {
        type: 'info',
        msg: 'Notificação de informação exibida, sem importância'
      }
    ];
  }
}
