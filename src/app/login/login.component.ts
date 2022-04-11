import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../service/database.service';

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

  constructor(private router:Router,private db:DatabaseService) { }

  ngOnInit(): void {
  }
//login using $event/two way binding using ng model
  acNoChange(event: any) {
    this.acno = event.target.value
   
    


   }

  pwdChange(event: any) {
    this.pwd = event.target.value
   }
  //login phase
  login() {
    var acno_l = this.acno;
    var pwd_l = this.pwd;
    let result = this.db.login(acno_l,pwd_l)

    if (result) {

                 alert("login success")
                 this.router.navigateByUrl("home");
               }
}

//login using template reference variable


// login(a:any,p:any) {
//       var acno_l = a.value;
//       var pwd_l = p.value;
//       let database = this.database
  
//       if (acno_l in database) {
  
//                   if (pwd_l == database[acno_l].password) {
//                    alert("login success")
//                  }
//                    else { alert("invalid password") }
//         }
//         else { alert("invalid username") }
//   }

}
