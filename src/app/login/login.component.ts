import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  acnum = "account number please!!"

  loginform=this.formBuilder.group({
 acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pwd :['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
})

  constructor(private router:Router,private db:DatabaseService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }
//login using $event/two way binding using ng model
  // acNoChange(event: any) {
  //   this.loginform.acno = event.target.value
   
    


  //  }

  // pwdChange(event: any) {
  //   this.pwd = event.target.value
  //  }
  //login phase
  login() {
    var acno_l = this.loginform.value.acno;
    var pwd_l = this.loginform.value.pwd;
  const result = this.db.login(acno_l,pwd_l)
if(this.loginform.valid){
    if (result) {

                 alert("login success")
                 this.router.navigateByUrl("home");
               }
}
else{alert("invalid form")}
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
