import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 //Registration model
 registrationForm=this.formbuilder.group({
   uname:[""],
   acno:[""],
   pwd:[""]
  
 })
  


  constructor(private router:Router,private db:DatabaseService,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  register() {
    var acno=this.registrationForm.value.acno
    var uname=this.registrationForm.value.uname
    var pwd=this.registrationForm.value.pwd
    console.log(this.registrationForm.value.pwd,uname=this.registrationForm.value.uname);
    
    var result=this.db.register(uname,acno,pwd);
    if(result){
      alert("registration successful!!!!!")
      this.router.navigateByUrl("");
    }
    else{alert("acno already exists!!!!")}
}
}
