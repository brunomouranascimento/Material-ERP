import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  register = false;

  @Output() login = new EventEmitter<boolean>();

  constructor() { }

  onRegister() {
    this.register = !this.register;
  }

  onClose () {
    this.register = !this.register;
  }

  loginApp(loged: boolean) {
    this.login.emit(loged);
  }

  ngOnInit() {
  }

}
