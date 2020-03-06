import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Buyer } from 'src/app/Models/buyer';
import { Seller } from 'src/app/Models/seller';
import { Token } from 'src/app/Models/token';
import { AccountService } from 'src/app/service/account.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login1Form:FormGroup
  uname:string
  password:string
  submitted=false;
  buyer:Buyer;
  seller:Seller;
  role:string;
  token:Token;

  constructor(private formbuilder:FormBuilder,private service:AccountService,private route:Router ) {
    this.buyer=new Buyer();
      this.seller=new Seller();
      this.token=new Token();
   }
  ngOnInit() {
    this.login1Form=this.formbuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
      role:['']
    });
  }
  onSubmit()
    {
      this.submitted=true;
      if(this.login1Form.invalid)
      {
        return;
      }
      else
      {
        // console.log(this.loginform.value);
        // console.log(JSON.stringify(this.loginform.value))
        // console.log(this.loginform.value["username"])
        // console.log(this.loginform.value["password"])
        // this.buyer.username=this.loginform.value["username"]
        // this.buyer.password=this.loginform.value["password"]
        // console.log(this.buyer)
        // this.seller.username=this.loginform.value["username"]
        // this.seller.password=this.loginform.value["password"]
        // console.log(this.seller)
  let username=this.login1Form.value['username'];
  let password=this.login1Form.value['password'];
  let role=this.login1Form.value['role'];
  // alert(username)
  // alert(role)
  if(role=='buyer')
{
  let token=new Token();
this.service.loginBuyer(username,password).subscribe(res=>{token=res;console.log(token)
  if(token.message=="success"){
    localStorage.setItem('Buyer',token.buyerid);
    alert("Form is Validated");
    
  this.route.navigateByUrl("Buyerlandingpage")
  }
  else{
    alert("inavlid");
  }
});
}
if(role=='seller')
{
 let token=new Token();
this.service.loginseller(username,password).subscribe(res=>{token=res;console.log(token)
  if(token.message=="success"){
    localStorage.setItem('seller',token.sellerid);
    this.route.navigateByUrl("sellerlandingpage")
  }
  else{
    alert("inavlid");
  }
});

}
if(username=="Admin" && password=="admin")
{
  alert('admin is logged in');
  this.route.navigateByUrl("Adminlandingpage");
}
}
}
    get f() {return this.login1Form.controls};
    onReset()
    {
      this.submitted=false;
      this.login1Form.reset();
    }
    
  }





