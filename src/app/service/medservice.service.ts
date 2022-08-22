import { environment } from './../../environments/environment';
import { medicine } from './../model/medicine.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedserviceService {

  med: medicine[];
    private apiHost=environment.apiHost;
    constructor(private HttpClient:HttpClient){
    }
  addMedicine(med):Observable<medicine[]>{
    return this.HttpClient.post<medicine[]>(`${this.apiHost}add`,med)
  }

getServer():Observable<medicine[]>{
        return this.HttpClient.get<medicine[]>(`${this.apiHost}`)
    }

getAllImages():medicine[]{
  return this.med;
       
          }
  getmedById(medid:number):medicine{
    return this.getAllImages().find(medicine=>medicine.id==medid);
  }
  getmedicine(name:String) :Observable<medicine>{
    return this.HttpClient.get<medicine>(`${this.apiHost}med/{name}`)
}
filterByAsc():Observable<medicine[]>{  
  return this.HttpClient.get<medicine[]>(`${this.apiHost}med/filter`)

}
deleteMedicine(id){
  return this.HttpClient.delete(`${this.apiHost}delete/${id}`)
}
updateMedicine(data){
  return this.HttpClient.put(`${this.apiHost}med/update`,data)
}
}

