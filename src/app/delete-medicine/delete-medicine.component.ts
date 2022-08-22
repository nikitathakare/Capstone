import { ActivatedRoute, Router } from '@angular/router';
import { MedserviceService } from 'src/app/service/medservice.service';
import { medicine } from './../model/medicine.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-delete-medicine',
  templateUrl: './delete-medicine.component.html',
  styleUrls: ['./delete-medicine.component.css']
})
export class DeleteMedicineComponent implements OnInit {
  medicine:any=[];
  searchedKeyword:string="";
  msg:string="Product is Deleted Successfully!!";
  constructor(private route: Router, private activatedRoute:ActivatedRoute
    ,private http:HttpClient,private medservice:MedserviceService ){ }

  ngOnInit(): void {
    this.medservice.getServer().subscribe((data=>{
      this.medicine=data
    }))
  }
  onDelete(med){
    
    this.medicine.splice(med-1,1)
    this.medservice.deleteMedicine(med).subscribe((result)=>{
      alert(this.msg);
    this.route.navigate(['/home/home-admin'],{relativeTo:this.activatedRoute});
    })
 
  }
 
}


