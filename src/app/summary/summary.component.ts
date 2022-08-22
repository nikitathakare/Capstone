
import { medicine } from './../model/medicine.model';
import { PaymentService } from './../service/payment.service';
import { cartItem } from './../model/cartItem.model';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  today: number = Date.now();

  summary:medicine[]=[];
  constructor(private userService:UserService,private paymentservice:PaymentService) { }

  ngOnInit(): void {
    this.summary= this.paymentservice.getItems();
  }

  

}
