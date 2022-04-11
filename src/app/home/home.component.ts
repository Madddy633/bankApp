import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

acno1=""
pwd1=""
amount1=""
acno=""
pwd=""
amount=""

  constructor(private db:DatabaseService) { }

  ngOnInit(): void {}
 

  deposit(){
  
var acno=this.acno;
var pwd=this.pwd;
var amount=this.amount;
const result=this.db.deposit(acno,pwd,amount);
if(result)
{
  alert (amount+"added successfully.....new balance is "+result)
}


  }

  withdraw(){
    let acno=this.acno1;
    let pwd=this.pwd1;
let amount=this.amount1;
const result=this.db.withdraw(acno,pwd,amount);
if(result)
{
  alert (amount+"debited successfully.....new balance is "+result)
}


  }

}


