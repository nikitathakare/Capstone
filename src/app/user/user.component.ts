import { Router } from '@angular/router';
import { LoginModule } from './../model/login.model';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  //roles:string[];
  user:LoginModule= new LoginModule();
  userName="";
  password="";
  formdata;
  emailid;
  
  constructor(private userservice :UserService,private route: Router) { 
    
  }

  ngOnInit(): void {
    
      

     
     
  
  }
  onClickSubmit(){
    // this.userservice.getUsers().subscribe((result=>{
    //   console.log(result);
    //   if(data.userName===result){
    //     this.route.navigateByUrl('/home');
    //   }
    //   else{
    //     alert('wrong');
    //   }
    
    console.log(this.user);
    this.userservice.getUsers(this.user).subscribe(data=>{
      alert("login Success");
      if(this.user.role==='Admin'){
        this.route.navigateByUrl('home/home-admin');
      }
      else{
        this.route.navigateByUrl('home');
      }
    },error=>alert("wrong username"))
  

    }

  
}
// onLogin(data){
//     if(data===this.user)
//    this.userservice.getUsers().subscribe((result=>{
//       console.log(result);
//      //if(result===data)
//       console.log(data);
//      // console.log(this.user.userName+" "+this.user.password+" "+this.user.role)
//       //if(this.user=== data){
//         this.route.navigateByUrl('/home');
      
     

//      // console.log(this.userName+" "+this.password+" "+this.role)
//     }))
//    // console.log(this.userName+" "+this.password+" "+this.role)
//   }

