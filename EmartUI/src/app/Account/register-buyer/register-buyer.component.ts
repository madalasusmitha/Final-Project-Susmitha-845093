import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-register-buyer',
  templateUrl: './register-buyer.component.html',
  styleUrls: ['./register-buyer.component.css']
})
export class RegisterBuyerComponent implements OnInit {
  registerForm:FormGroup;
  id:string;
 username:string;
 password:string;
 emailid:string;
mobilenumber:number;
createddatetime:Date;
Items:Buyer[];
item:Buyer;
submitted=false

  constructor(private formBuilder:FormBuilder,private service:AccountService) {
  }
  ngOnInit() {
    this.registerForm=this.formBuilder.group({
      // id:['',[Validators.required]],
      username:['',[Validators.required]],
      createddatetime:['',Validators.required],
      mobilenumber:['',[Validators.required]],
      emailid:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]

    })
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      this.Add();
      
  }
  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
  Add()
  {
     this.item=new Buyer();
    //  this.item.id=this.registerForm.value["id"];
    this.item.id='EMARTBUY'+Math.round(Math.random()*100);
     this.item.username=this.registerForm.value["username"];
     this.item.emailid=this.registerForm.value["emailid"];
     this.item.mobilenumber=this.registerForm.value["mobilenumber"];
     this.item.password=this.registerForm.value["password"];
     this.item.createddatetime=this.registerForm.value["createddatetime"];
     console.log(this.item);
     this.service.AddBuyer(this.item).subscribe(res=>{
       console.log('Record Added')
     },erros=>{
       console.log(erros)
     })

    }
  
}

  

