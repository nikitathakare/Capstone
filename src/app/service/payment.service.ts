
import { medicine } from './../model/medicine.model';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  items:medicine[]=[];  
  addToCart(med:medicine) {
    this.items.push(med);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
/* . . . */

}




