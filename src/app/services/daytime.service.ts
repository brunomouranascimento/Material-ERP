import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DaytimeService {

  today = new Date();
  dayName = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  monthName = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  constructor() { }

  getDaytTime() {
    return `${(this.dayName[this.today.getDay()])},
    ${this.today.getDate()} de ${this.monthName[this.today.getMonth()]} de ${this.today.getFullYear()}`;
  }
}
