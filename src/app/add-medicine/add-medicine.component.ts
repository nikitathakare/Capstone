import { Router, ActivatedRoute } from '@angular/router';
import { MedserviceService } from 'src/app/service/medservice.service';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {
  msg:string="Product is Added Successfully!!";
  serverStatus:string;
  constructor(private http:HttpClient, private medService:MedserviceService,private reactiveForms:ReactiveFormsModule,private route:Router,private activatedRoute:ActivatedRoute){} 

  ngOnInit(): void {
    
  }
  onSubmit(data){
   this.http.post('http://localhost:10000/add',data).
   subscribe((result)=>{
    console.log("result",result)
   })
   alert(this.msg);
   this.route.navigate(['/home/home-admin'],{relativeTo:this.activatedRoute});
  }

}
