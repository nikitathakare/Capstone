import { PaymentService } from './../../service/payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MedserviceService } from 'src/app/service/medservice.service';
import { medicine } from './../../model/medicine.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  med:medicine;
  medicine:medicine[]=[];
  searchedKeyword:string="";
  constructor(private MedService:MedserviceService, private activatedRoute:ActivatedRoute,private route:Router ,private paymentService:PaymentService) { 
  this.activatedRoute.params.subscribe(params=>{
    if(params['id'])
    this.med=MedService.getmedById(params['id']);
  })
}
  ngOnInit(): void {
    this.MedService.getServer().subscribe((medicine:medicine[])=>{
      this.medicine=medicine;
     })
    }
    
    search():void{
    
      this.route.navigate(['/search'],{relativeTo:this.activatedRoute});
    }
       
    

  addToCart(med:medicine){
        this.paymentService.addToCart(med);
        this.route.navigateByUrl('/payment') //will route with the food info to next cart page
    
      }
     
     filterAsc(){
      this.MedService.filterByAsc().subscribe((medicine:medicine[])=>{
        console.warn("result",medicine)
     })
  }
}




