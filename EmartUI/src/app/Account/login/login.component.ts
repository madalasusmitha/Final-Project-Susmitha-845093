import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login1Form:FormGroup
  uname:string
  password:string
  submit=false;


  constructor(private formBuilder:FormBuilder) { 
   }
  ngOnInit() {

    this.login1Form=this.formBuilder.group({
      uname:['',Validators.required],
      password:['',Validators.required]
    });
  }
  get f()
  {
    return this.login1Form.controls;
  }
  onSubmit()
  {
    this.submit=true;
    if(this.login1Form.invalid)
    {
      return;
    }
    else{
      alert("form is validated");
      console.log(this.login1Form.value)
      console.log(JSON.stringify(this.login1Form.value))
      console.log(this.login1Form.value["uname"]);
      console.log(this.login1Form.value["password"]);
      
    }
  
    
  }
 
  // onReset()
  // {
  //   this.submit=false;
  //   this.login1Form.reset();
  // }

  }





