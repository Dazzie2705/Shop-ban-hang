import { Injectable } from '@angular/core';
import {Food} from "../model/food.model";
import {collection, deleteDoc, doc, Firestore, onSnapshot, setDoc} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  total = 0;
  cart: Food[] = [];
  foods: Food[] = [];
  constructor(private firestore: Firestore) {
    onSnapshot(collection(this.firestore, 'foods'), (snapshot) => {
      this.foods = [];
      snapshot.forEach((doc) => {
        this.foods.push(doc.data() as Food);
        console.log(doc.id, '=>', doc.data());
        console.log(this.foods);
      });
    });
  }
  async addItem(item: Food) {
    await setDoc(doc(this.firestore, 'foods', item.id.toString()), item);
  }

  //create function async update food
  async update(item: Food) {
    await setDoc(doc(this.firestore, 'foods', item.id.toString()), item);
  }

  async delete(item: Food) {
    await deleteDoc(doc(this.firestore, 'foods', item.id.toString()));
  }
  async addToCart(item: Food) {
    const docRef = doc(this.firestore, 'cart', item.id.toString());

    try {
      await setDoc(docRef, item);

      // Call the synchronous addToCart function after successful Firestore update
      this.addToLocalCart(item);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  }

  addToLocalCart(food: Food) {
    if (food.inStock === 0) {
      alert('Out of stock');
      return;
    }

    let index = this.cart.findIndex((e) => e.id === food.id);

    if (index === -1) {
      food.quantity = 1;
      food.inStock--;
      this.cart.push(food);
    } else {
      this.cart[index].quantity++;
      food.inStock--;
    }

    alert('Add ' + food.name + ' to cart');
  }
  async deleteItemInCart(item: Food) {
    const docRef = doc(this.firestore, 'cart', item.id.toString());

    try {
      await deleteDoc(docRef);
      // alert(item.name + 'is deleted ' + ' from cart');
      // Call the synchronous delItemInCart function after successful Firestore deletion
      this.delItemInLocalCart(item.id);
    } catch (error) {
      console.error('Error deleting from cart:', error);
    }
  }

  delItemInLocalCart(id: number) {
    let index = this.cart.findIndex((e) => e.id === id);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }
  async getCartList() {
    onSnapshot(collection(this.firestore, 'cart'), (snapshot) => {
      this.cart = [];
      snapshot.forEach((doc) => {
        this.cart.push(doc.data() as Food);
        console.log(doc.id, '=>', doc.data());
        console.log(this.cart);
      });
    });
  }

  getProducts() {
    return this.foods;
  }

  //get item by id
  getItemById(id: number | string) {
    if (typeof id === 'string') {
      id = parseInt(id);
    }

    const product = this.foods.find((product) => product.id === id);
    return product || {};
  }
  decrease(food: Food) {
    let index = this.cart.findIndex((e) => e.id === food.id);
    if (index !== -1) {
      if (this.cart[index].quantity === 1) {
        this.cart.splice(index, 1);
        return;
      } else {
        this.cart[index].quantity--;
        this.cart[index].inStock++;
        return;
      }
    }
  }

  //create function increase quantity if quantity == instock then quantity not increase
  increase(food: Food) {
    let index = this.cart.findIndex((e) => e.id === food.id);
    if (index !== -1) {
      this.cart[index].quantity++;
      this.cart[index].inStock--;
    }
  }

  //creat function payment to calculate all food quantity and price
  payment() {
    this.total = 0;
    this.cart.forEach((e) => {
      this.total += e.quantity * e.price;
    });
    return this.total;
  }
}

