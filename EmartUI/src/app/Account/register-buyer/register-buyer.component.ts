import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-buyer',
  templateUrl: './register-buyer.component.html',
  styleUrls: ['./register-buyer.component.css']
})
export class RegisterBuyerComponent implements OnInit {
  registerbuyerform:FormGroup;
  
  id:string;
  name:string;
joindate:Date;
  mobile:number;
  mail:string;
  password:string;
  submitted=false;


  constructor(private formBuilder:FormBuilder) {
  }
    
  

  ngOnInit() {
    this.registerbuyerform=this.formBuilder.group({
      id:['',[Validators.required,Validators.pattern("[I][0-9]{5}$")]],
      name:['',[Validators.required,Validators.pattern("^[A-Z]{5}$")]],
    joindate:['',Validators.required],
      mobile:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      mail:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern("^[A-Z]{8}[@,3,$,%,&,*]$")]]
    })
  }
  get f()
  
  {  return this.registerbuyerform.controls;}
  

  onSubmit() {

    this.submitted=true;

    // stop here if form is invalid
    if (this.registerbuyerform.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerbuyerform.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.registerbuyerform.reset();
}
}
  

