import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
  aim = "your banking partner"
  acnum = "account number please!!"
  acno = ""
  pwd = ""
  uname=""

  


  constructor(private router:Router,private db:DatabaseService) { }

  ngOnInit(): void {
  }

  register() {
    var acno=this.acno
    var uname=this.uname
    var pwd=this.pwd
    var result=this.db.register(uname,acno,pwd);
    if(result){
      alert("registration successful!!!!!")
      this.router.navigateByUrl("");
    }
    else{alert("acno already exists!!!!")}
}
}
