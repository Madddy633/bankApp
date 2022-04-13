import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  currUser:any;
  //creating a data base
  database: any = {
    1000: { acno: 1000, uname: "neer", password: 1000, balance: 5000 },
    1001: { acno: 1001, uname: "neel", password: 1001, balance: 50000 },
    1002: { acno: 1002, uname: "neev", password: 1002, balance: 500000 }

  }

  constructor() { }

  //register
  register(uname: any, acno: any, password: any) {

    let database = this.database
    if (acno in database) {
      return false
    }
    else {
      database[acno] = {
        acno,
        uname,
        password,
        balance: 0
      }
      console.log(database);

      return true
    }
  }



  //login phase
  login(acno: any, pwd: any) {

    let database = this.database

    if (acno in database) {

      if (pwd == database[acno].password) {
        this.currUser=this.database[acno]["uname"]
        return true
      }
      else {
        alert("invalid password")
        return false
      }
    }
    else {
      alert("invalid account number")
      return false
    }
  }

  //Deposit
  deposit(acno: any, pwd: any, amount: any) {
    var amt = parseInt(amount);
    let database = this.database
    if (acno in database) {
      if (pwd == database[acno]["password"]) {
        database[acno]["balance"] += amt
        return database[acno]["balance"]

      }
      else {
        alert("invalid password")
        return false
      }

    }
    else {
      alert("invalid user name")
      return false
    }
  }


  //withdraw

  withdraw(acno: any, pwd: any, amount: any) {

    var amt = parseInt(amount);
    let database = this.database
    if (acno in database) {
      if (pwd == database[acno]["password"]) {
        if (amt < database[acno]["balance"]) {

          database[acno]["balance"] -= amt
          return database[acno]["balance"]
        }
        else { alert("no balance") }


      }
      else {
        alert("invalid password")
        return false
      }

    }
    else {
      alert("invalid user name")
      return false
    }
  }


}
