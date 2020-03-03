import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Seller } from 'src/app/Models/seller';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.css']
})
export class RegisterSellerComponent implements OnInit {
  registersellerform:FormGroup;
  
  id:string;
  username:string;
  companyname:string
  mobile:number;
  mail:string;
  password:string;
  briefaboutcompany:string;
  postalAddress:string;
  gstin:number;
  website:string
  submitted=false;
  Items:Seller[];
item:Seller;

  constructor(private formBuilder:FormBuilder,private service:AccountService) {
    this.registersellerform=this.formBuilder.group({
      // id:['',[Validators.required]],
      username:['',[Validators.required]],
      companyname:['',[Validators.required]],
      briefaboutcompany:['',[Validators.required]],
      postalAddress:['',[Validators.required]],
      gstin:['',[Validators.required]],
      website:['',[Validators.required]],
      contactnumber:['',[Validators.required]],
      emailid:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
  }
  ngOnInit() {
  }
  get f() { return this.registersellerform.controls; }

  onSubmit() {
      this.submitted = true;
      this.Add();
      
  }
  onReset() {
      this.submitted = false;
      this.registersellerform.reset();
  }
  Add()
  {
     this.item=new Seller();
    //  this.item.id=this.registersellerform.value["id"];
    this.item.id='EMARTSEl'+Math.round(Math.random()*100);
     this.item.username=this.registersellerform.value["username"];
     this.item.emailid=this.registersellerform.value["emailid"];
     this.item.password=this.registersellerform.value["password"];
     this.item.companyname=this.registersellerform.value["companyname"];
     this.item.gstin=this.registersellerform.value["gstin"];
     this.item.briefaboutcompany=this.registersellerform.value["briefaboutcompany"];
     this.item.postalAddress=this.registersellerform.value["postalAddress"];
     this.item.website=this.registersellerform.value["website"];
     this.item.contactnumber=this.registersellerform.value["contactnumber"];
     console.log(this.item);
     this.service.AddSeller(this.item).subscribe(res=>{
       console.log('Record Added')
     },erros=>{
       console.log(erros)
     })

  
}
}


