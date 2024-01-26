import { Routes } from '@angular/router';
import {LoginComponent} from "./login.component";


export const LOGIN_ROUTES: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },

];
