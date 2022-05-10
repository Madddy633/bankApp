import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
let options ={
headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  currUser:any;
  currentAcno:any;
  //creating a data base
  database: any = {
    1000: { acno: 1000, uname: "neer", password: 1000, balance: 5000 ,transaction:[]},
    1001: { acno: 1001, uname: "neel", password: 1001, balance: 50000,transaction:[] },
    1002: { acno: 1002, uname: "neev", password: 1002, balance: 500000,transaction:[] }

  }

  constructor(private http:HttpClient) { this.getDetails();}


  //set database in local storage
  saveDetails(){
    localStorage.setItem("database",JSON.stringify(this.database))
    if(this.currentAcno){
      localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))}
      if(this.currentAcno){
      localStorage.setItem("currentuser",JSON.stringify(this.currUser))
      
    }
  }

  //get datas from local storage
  getDetails(){
    if(localStorage.getItem("database"))
    {
      this.database=JSON.parse(localStorage.getItem("database")||'')
    }
    if(localStorage.getItem("currentAcno"))
    {
      this.currentAcno=JSON.parse(localStorage.getItem("currentAcno")||'')
    }

    if(localStorage.getItem("currentuser"))
    {
      this.currUser=JSON.parse(localStorage.getItem("currentuser")||'')
    }

  }

  //register
  register(uname: any, acno: any, password: any) {
const data={
  uname,
  acno,
  password
}
return this.http.post('http://localhost:3000/register',data)
  }



  //login phase
  login(acno: any, pwd: any) {

    const data={
      acno,
      pwd
    }
   return this.http.post('http://localhost:3000/login',data)
  }

  //Deposit
  deposit(acno: any, pwd: any, amount: any) {

    const data={
      acno,
      pwd,
      amount
    }
   
   return this.http.post('http://localhost:3000/deposit',data,this.getoptions())
  }
  getoptions(){
    const token=JSON.parse(localStorage.getItem("token")||'')
    let headers=new HttpHeaders()
   headers= headers.append("x-access-token",token)
   if(token){
   options.headers=headers
  }
  console.log(options);
   return options
   
   
  }
    
  


  //withdraw

  withdraw(acno: any, pwd: any, amount: any) {

    const data={
      acno,
      pwd,
      amount
    }
   
   return this.http.post('http://localhost:3000/withdraw',data,this.getoptions())
  }


//transaction history
transactions(acno:any){
  const data={
    acno
  }
  return this.http.post('http://localhost:3000/transactions',data,this.getoptions())
}
onDelete(acno:any){
  return this.http.delete('http://localhost:3000/onDelete/'+acno,this.getoptions())
}
}



