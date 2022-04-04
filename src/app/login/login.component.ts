import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "your banking partner"
  acnum = "account number please!!"
  acno = ""
  pwd = ""

  //creating a data base
  database: any = {
    1000: { acno: 1000, uname: "neer", password: 1000, balance: 5000 },
    1001: { acno: 1001, uname: "neel", password: 1001, balance: 50000 },
    1002: { acno: 1002, uname: "neev", password: 1002, balance: 500000 }

  }


  constructor() { }

  ngOnInit(): void {
  }
//login using $event
//   acNoChange(event: any) {
//     this.acno = event.target.value


//   }

//   pwdChange(event: any) {
//     this.pwd = event.target.value
//   }
//   //login phase
//   login() {
//     var acno_l = this.acno;
//     var pwd_l = this.pwd
//     let database = this.database

//     if (acno_l in database) {

//                 if (pwd_l == database[acno_l].password) {
//                  alert("login success")
//                }
//                  else { alert("invalid password") }
//       }
//       else { alert("invalid username") }
// }

//login using template reference variable


login(a:any,p:any) {
      var acno_l = a.value;
      var pwd_l = p.value;
      let database = this.database
  
      if (acno_l in database) {
  
                  if (pwd_l == database[acno_l].password) {
                   alert("login success")
                 }
                   else { alert("invalid password") }
        }
        else { alert("invalid username") }
  }

}
