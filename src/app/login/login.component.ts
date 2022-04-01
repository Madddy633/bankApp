import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   aim="your banking partner"
   acnum="account number please!!"
   acno=""
   pwd=""

  //creating a data base
  database={
    1000:{acno:1000,uname: "neer",password:1000,balance:5000},
    1001:{acno:1001,uname: "neel",password:1001,balance:50000},
    1002:{acno:1002,uname: "neev",password:1002,balance:500000}
  
  }


  constructor() { }

  ngOnInit(): void {
  }

  acNoChange(event:any){
this.acno=event.target.value
console.log(event.target.value);

  }
  
  pwdChange(event:any){
    this.pwd=event.target.value
      }

  login() {
    
alert("login click")
  }

}
