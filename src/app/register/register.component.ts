import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
   uname:["",[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
   acno:["",[Validators.required,Validators.pattern('[0-9]*')]],
   pwd:["",[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]]
  
 })
  


  constructor(private router:Router,private db:DatabaseService,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  register() {
    var acno=this.registrationForm.value.acno
    var uname=this.registrationForm.value.uname
    var pwd=this.registrationForm.value.pwd
    console.log(this.registrationForm.value.pwd,uname=this.registrationForm.value.uname);
    if(this.registrationForm.valid){
    var result=this.db.register(uname,acno,pwd);
    if(result){
      alert("registration successful!!!!!")
      this.router.navigateByUrl("");
    }
    else{alert("acno already exists!!!!")}
}
else{alert("invalid form!!!!!!!!!!!")}
}
}
