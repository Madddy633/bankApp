import { Component, OnInit } from '@angular/core';

import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  acno:any
transaction:any

  constructor(private ds:DatabaseService) {
     this.acno=JSON.parse(localStorage.getItem("currentacno")||'')
  this.transaction=ds.transactions(this.acno)
   .subscribe((result:any)=>{
     if(result){
    this.transaction=result.transaction
  
  }

   },
  (result)=>{
    alert(result.error.message)
  })
    
console.log(this.transaction);

   }

  ngOnInit(): void {
  }

}
