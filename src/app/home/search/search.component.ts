import { medicine } from './../../model/medicine.model';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MedserviceService } from 'src/app/service/medservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  medicine :medicine;
 
  constructor(private activatedRoute:ActivatedRoute, private route:Router ,private medservice:MedserviceService){ }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      const name =params['name'];
      this.medservice.getmedicine('name').subscribe((medcine:medicine)=>{
        this.medicine=medcine;

      });
  });

  }
 
  }


