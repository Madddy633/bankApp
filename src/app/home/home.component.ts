import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:any
  logindate:any
  acno:any
depositvalidation=this.fb.group({

acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
})
withdrawvalidation=this.fb.group({
acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
pwd1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]
})
  constructor(private db:DatabaseService, private fb:FormBuilder,private router:Router) {

    this.user=JSON.parse(localStorage.getItem('currentuser')|| '')
this.logindate=new Date()
   }

  ngOnInit(): void {

// if(!localStorage.getItem("currentAcno"))
// {
//   alert("please login")
//   this.router.navigateByUrl("")
// }

  }
 

  deposit(){
  
var acno=this.depositvalidation.value.acno;
var pwd=this.depositvalidation.value.pwd;
var amount=this.depositvalidation.value.amount;
//const result=this.db.deposit(acno,pwd,amount);
if(this.depositvalidation.valid){
  this.db.deposit(acno,pwd,amount)
  .subscribe((result:any)=>{
    if (result) {
  
      alert(result.message)
      //this.router.navigateByUrl("home");
    }
  
   },
   (result)=>{
    alert(result.error.message)
   })
  
     
  }
  else{
    alert("invalid form")
  }
}

  

  withdraw(){
    let acno=this.withdrawvalidation.value.acno1;
    let pwd=this.withdrawvalidation.value.pwd1;
let amount=this.withdrawvalidation.value.amount1;
//const result=this.db.withdraw(acno,pwd,amount);

if(this.withdrawvalidation.valid){

  this.db.withdraw(acno,pwd,amount)
  .subscribe((result:any)=>{
    if (result) {
  
      alert(result.message)
      //this.router.navigateByUrl("home");
    }
  
   },
   (result)=>{
    alert(result.error.message)
   })
  
     
  }
  else{
    alert("invalid form")
  }
}



  //deleteAccount()
  deleteAccount(){
    this.acno=JSON.parse(localStorage.getItem("currentacno")||'')
  }

  //logout
  logOut(){
    localStorage.removeItem("currentuser")
    localStorage.removeItem("currentAcno")
    this.router.navigateByUrl("")
  }

  onCancel(){
    this.acno=""
  }
  //onDelete($event)
  onDelete(event:any){
    this.db.onDelete(event)
    .subscribe((result:any)=>{
      if (result) {
    
        alert(result.message)
        this.router.navigateByUrl("");
      }
    
     },
     (result)=>{
      alert(result.error.message)
     })
    
       
    }
  }
    


