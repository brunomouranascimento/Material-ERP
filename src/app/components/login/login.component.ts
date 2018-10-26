import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  register = false;

  @Output() login = new EventEmitter<boolean>();

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  onRegister() {
    this.register = !this.register;
  }

  onClose () {
    this.register = !this.register;
  }

  loginApp(loged: boolean) {
    this.login.emit(loged);
  }

  tryFacebookLogin() {
    this.authenticationService.doFacebookLogin()
    .then(res => {
      this.router.navigate(['/pages/home']);
      this.login.emit(true);
    });
  }

  tryGoogleLogin() {
    this.authenticationService.doGoogleLogin()
    .then(res => {
      this.router.navigate(['/pages/home']);
      this.login.emit(true);
    });
  }

  ngOnInit() {
  }

}
