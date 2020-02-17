import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.css']
})
export class RegisterSellerComponent implements OnInit {
  registerbuyerform:FormGroup;
  
  id:string;
  name:string;
joindate:Date;
companyname:string
  mobile:number;
  mail:string;
  password:string;
  companybrief:string;
  postaladdress:string;
  gstin:number;
  website:string
  submitted=false;

  constructor(private formBuilder:FormBuilder) {
    this.registerbuyerform=this.formBuilder.group({
      id:['',[Validators.required,Validators.pattern("[I][0-9]{5}$")]],
      name:['',[Validators.required,Validators.pattern("^[A-Z]{5}$")]],
     joindate:['',Validators.required],
     companyname:['',[Validators.required,Validators.pattern("^[a-z][A-Z]$")]],
     companybrief:['',[Validators.required,Validators.pattern("^[a-z][A-Z]$")]],
     postaladdress:['',[Validators.required,Validators.pattern("^[a-z][A-Z]$")]],
     gstin:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
     website:['',[Validators.required,Validators.pattern("/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/")]],
     mobile:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      mail:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern("^[A-Z]{8}[@,3,$,%,&,*]$")]]
    })
  }
  ngOnInit() {
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


