import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '', loadChildren: () => import('./page/login/login.routes').then(mod => mod.LOGIN_ROUTES)
  },
  {
    path: '', loadChildren: () => import('./page/layout/layout.route').then(mod => mod.LAYOUT_ROUTES)
  },
];
