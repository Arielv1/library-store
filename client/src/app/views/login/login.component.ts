import { Component, signal } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { HeaderComponent } from "../header/header.component";


enum LoginPageState {
  LOGIN,
  SIGN_UP
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginPageState = signal(LoginPageState.LOGIN);

  constructor() {

  }

  toggleLoginPageState() {
    this.loginPageState.update(value => value === LoginPageState.LOGIN ? LoginPageState.SIGN_UP : LoginPageState.LOGIN)
  }


}
