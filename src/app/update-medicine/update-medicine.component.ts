import { medicine } from './../model/medicine.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MedserviceService } from 'src/app/service/medservice.service';
import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent implements OnInit {
  medicine:medicine[];
  msg:string="Medicine Details updated Successfully"
  constructor(private medService:MedserviceService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onUpdate(data){
  
    this.medService.updateMedicine(data).subscribe((result=>{
     
        alert(this.msg);
      

    }))
  
 

this.router.navigate(['/home/home-admin'],{relativeTo:this.activatedRoute});
  }
}
