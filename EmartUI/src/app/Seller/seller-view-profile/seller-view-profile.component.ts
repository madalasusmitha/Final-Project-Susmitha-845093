import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Models/items';
import { FormBuilder,FormGroup } from '@angular/forms';
import { SellerService } from 'src/app/service/seller.service';
import { Seller } from 'src/app/Models/seller';

@Component({
  selector: 'app-seller-view-profile',
  templateUrl: './seller-view-profile.component.html',
  styleUrls: ['./seller-view-profile.component.css']
})
export class SellerViewProfileComponent implements OnInit {
  submitted=false;
  list:Seller[];
  seller:Seller;
  registerForm:FormGroup;
  isShow:boolean=true;

  constructor(private formbuilder:FormBuilder,private service:SellerService) { }

  ngOnInit() {
    this.registerForm=this.formbuilder.group({
      id:[''],
      username:[''],
      password:[''],
      companyname:[''],
      gstin:[''],
      briefaboutcompany:[''],
      postalAddress:[''],
      website:[''],
      emailid:[''],
      contactnumber:['']
    });
  }
  Search()
  {
    this.submitted=true;
      let id1=this.registerForm.value["id"];
      this.service.ViewProfile(id1).subscribe(res=>{
        this.seller=res;
        console.log(this.seller);
        this.registerForm.setValue({
          id:this.seller.id,
          username:this.seller.username,
          password:this.seller.password,
          companyname:this.seller.companyname,
          gstin:this.seller.gstin,
          briefaboutcompany:this.seller.briefaboutcompany,
          postalAddress:this.seller.postalAddress,
          website:this.seller.website,
          emailid:this.seller.emailid,
          contactnumber:this.seller.contactnumber
        });
      })
  }
  // get f() { return this.RegisterForm6.controls; }
  // Update()
  // {
  //   this.seller=new Seller();
  //     this.seller.id=this.RegisterForm6.value["id"];
  //     this.seller.username=this.RegisterForm6.value["username"];
  //     this.seller.password=this.RegisterForm6.value["password"];
  //     this.seller.companyname=this.RegisterForm6.value["companyname"];
  //     this.seller.gstin=this.RegisterForm6.value["gstin"];
  //     this.seller.briefaboutcompany=this.RegisterForm6.value["briefaboutcompany"];
  //     this.seller.postalAddress=this.RegisterForm6.value["postaladdress"];
  //     this.seller.website=this.RegisterForm6.value["website"];
  //     this.seller.emailid=this.RegisterForm6.value["emailid"];
  //     this.seller.contactnumber=this.RegisterForm6.value["contactnumber"];   
  //     console.log(this.seller);
  //     this.service.Update(this.seller).subscribe(res=>{
  //        console.log('Record Updated');
  //     },err=>{
  //       console.log(err);
  //     })
  // }
   }

