import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  //creating a data base
  database: any = {
    1000: { acno: 1000, uname: "neer", password: 1000, balance: 5000 },
    1001: { acno: 1001, uname: "neel", password: 1001, balance: 50000 },
    1002: { acno: 1002, uname: "neev", password: 1002, balance: 500000 }

  }

  constructor() { }

//register
register(uname:any,acno:any,password:any){

  let database=this.database
  if(acno in database)
  {
    return false
  }
  else{
    database[acno]={
      acno,
      uname,
      password,
      balance:0
    }
    console.log(database);
    
    return true
  }
}


}
