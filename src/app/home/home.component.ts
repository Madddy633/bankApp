import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:any
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
  constructor(private db:DatabaseService, private fb:FormBuilder) {

this.user=this.db.currUser

   }

  ngOnInit(): void {}
 

  deposit(){
  
var acno=this.depositvalidation.value.acno;
var pwd=this.depositvalidation.value.pwd;
var amount=this.depositvalidation.value.amount;
const result=this.db.deposit(acno,pwd,amount);
if(this.depositvalidation.valid){
if(result)
{
  alert (amount+"added successfully.....new balance is "+result)
}
else{alert("deposit invalid")}
}

  }

  withdraw(){
    let acno=this.withdrawvalidation.value.acno1;
    let pwd=this.withdrawvalidation.value.pwd1;
let amount=this.withdrawvalidation.value.amount1;
const result=this.db.withdraw(acno,pwd,amount);
if(this.withdrawvalidation.valid){
if(result)
{
  alert (amount+"debited successfully.....new balance is "+result)
}
}
else{alert("invalid deposit")}


  }

}


