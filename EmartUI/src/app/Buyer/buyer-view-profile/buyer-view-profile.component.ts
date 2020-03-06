import { Component, OnInit } from '@angular/core';
import { Buyer } from 'src/app/Models/buyer';
import { BuyerService } from 'src/app/service/buyer.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-buyer-view-profile',
  templateUrl: './buyer-view-profile.component.html',
  styleUrls: ['./buyer-view-profile.component.css']
})
export class BuyerViewProfileComponent implements OnInit {
  editform:FormGroup;
  submitted=false;
  Buyer:Buyer;
  list:Buyer[];

  constructor(private formbuilder:FormBuilder,private service:BuyerService) { 
    this.editform=this.formbuilder.group({
    id:[''],
    username:[''],
    emailid:[''],
    mobilenumber:[''],
    
  });
}

  ngOnInit() {
    this.viewprofile(); 
  }
  viewprofile()
  {
      let id=localStorage.getItem("Buyer")
      this.service.GetById(id).subscribe(res=>{this.Buyer=res;
      console.log(this.Buyer)
      this.editform.setValue({
        id:this.Buyer.id,
        username:this.Buyer.username,
       emailid:this.Buyer.emailid,
        mobilenumber:this.Buyer.mobilenumber,
        
      })
    });
  }
  get f(){return this.editform.controls;}
  onSubmit()
  {
    this.submitted= true;
    if(this.editform.valid)
    {
      
      this.Buyer.username=this.editform.value["username"];
      this.Buyer.emailid=this.editform.value["emailid"];
      this.Buyer.mobilenumber=this.editform.value["mobilenumber"];
      this.Buyer.id=this.editform.value["id"];
      console.log(this.Buyer)
      this.service.Update(this.Buyer).subscribe(res=>
        {
          console.log('Updated succesfully');
        },err=>{console.log(err)}
  
        )

   
   }
  }


}
