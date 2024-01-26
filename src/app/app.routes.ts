import { Routes } from '@angular/router';
import {ItemComponent} from "./component/item/item.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {ItemDetailComponent} from "./component/item-detail/item-detail.component";
import {CartComponent} from "./component/cart/cart.component";

export const routes: Routes = [
  {
    path: 'product',
    component: ItemComponent,
  },
  {
    path: 'product/:id',
    component: ItemDetailComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];
