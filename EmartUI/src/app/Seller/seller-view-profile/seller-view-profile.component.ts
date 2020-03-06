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
  editform:FormGroup;
  submitted=false;
  seller:Seller;
  list:Seller[];

  constructor(private formbuilder:FormBuilder,private service:SellerService) {
    this.editform=this.formbuilder.group({
      id:[''],
      username:[''],
      companyname:[''],
      gstin:[''],
      briefaboutcompany:[''],
      postalAddress:[''],
    
      emailid:[''],
      contactnumber:['']
    });
   }

  ngOnInit() {
    
    this.viewprofile();
  }
  
  viewprofile()
  {
      let id=localStorage.getItem("seller")
      this.service.GetById(id).subscribe(res=>{this.seller=res;
      console.log(this.seller)
      this.editform.setValue({
        id:this.seller.id,
        username:this.seller.username,
        companyname:this.seller.companyname,
        briefaboutcompany:this.seller.briefaboutcompany,
        postalAddress:this.seller.postalAddress,
        emailid:this.seller.emailid,
        contactnumber:this.seller.contactnumber,
        gstin:this.seller.gstin,
      })
    });
  }
  get f(){return this.editform.controls;}
  onSubmit()
  {
    this.submitted= true;
    if(this.editform.valid)
    {
      
      this.seller.username=this.editform.value["username"];
      this.seller.emailid=this.editform.value["emailid"];
      this.seller.contactnumber=this.editform.value["contactnumber"];
      this.seller.companyname=this.editform.value["companyname"];
      this.seller.briefaboutcompany=this.editform.value["briefaboutcompany"];
      this.seller.postalAddress=this.editform.value["postalAddress"];
      this.seller.gstin=this.editform.value["gstin"];
      console.log(this.seller)
      this.service.Update(this.seller).subscribe(res=>
        {
          console.log('Updated succesfully');
        },err=>{console.log(err)}
  
        )

   
   }
  }

}

  

