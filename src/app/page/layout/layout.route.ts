import { Routes } from '@angular/router';
import {ItemComponent} from "../../component/item/item.component";
import {ItemDetailComponent} from "../../component/item-detail/item-detail.component";
import {DashboardComponent} from "../../component/dashboard/dashboard.component";
import {CartComponent} from "../../component/cart/cart.component";
import {LayoutComponent} from "./layout.component";

export const LAYOUT_ROUTES: Routes = [
  {
    path:'',
    redirectTo:'layout',
    pathMatch:'full',
  },
  {
    path: 'layout',
    component: LayoutComponent,
    children:[
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
      },]
  },

];
