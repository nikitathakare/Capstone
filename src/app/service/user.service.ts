import { cartItem } from './../model/cartItem.model';
import { LoginModule } from './../model/login.model';
import { environment } from './../../environments/environment';
import { medicine } from './../model/medicine.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    
    private apiHost=environment.apiHost;
    constructor(private HttpClient:HttpClient){
    }

getUsers(user:LoginModule):Observable<object>{
 // console.log(this.user);
   return this.HttpClient.post(`${this.apiHost}user/get`,user);
}
items:cartItem[]=[]; 
getItems() {
  return this.items;
}




}
