import { Component } from '@angular/core';
import {LoginService} from "../../service/login.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private authService:LoginService) {}

  signIn(){
    this.authService.signInWithGG()
  }
}
