import {Component, OnInit} from '@angular/core';
import {CartService} from "../../service/cart.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit{
  constructor(public cartService: CartService ) {
  }
  foods : any = []
  ngOnInit() {
    this.foods = this.cartService.getProducts()
  }
  getProductById(id: number) {
    this.cartService.getItemById(id);
  }
}
