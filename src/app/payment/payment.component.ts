import { Router, ActivatedRoute } from '@angular/router';
import { cartModule } from './../model/cart.model';
import { PaymentService } from './../service/payment.service';
import { cartItem } from './../model/cartItem.model';
import { Component, OnInit } from '@angular/core';
import { DemoCart } from '../model/demoCart.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
//cartItem:cartItem;
export class PaymentComponent {
 // cartItems:cartItem;
  items = this.paymentservice.getItems();

  constructor(
    private paymentservice: PaymentService
  ) { }

  TotalPrice():number{
    let total =0;
    this.items.forEach(item => {
        total+=item.price;
        
    });
    return total;
}

}
