import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { BuyerService } from 'src/app/service/buyer.service';
import { combineLatest } from 'rxjs';
import {Items} from 'src/app/Models/items';
import { PurchaseHistory } from 'src/app/Models/purchase-history';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/service/item.service';
import { Buyer } from 'src/app/Models/buyer';


@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
  form:FormGroup;
  item:Items;
  purchasehistory:PurchaseHistory;
  list:PurchaseHistory[]=[];
  list1:Items[]=[];
  buyer:Buyer;
  submitted=false;
  
  constructor(private service:BuyerService,private formBuilder:FormBuilder,private route:Router) {
      console.log(this.item);
     this.item =JSON.stringify(localStorage.getItem('item'));
      this.list1.push(this.item)
  console.log(this.item);
  console.log(this.item.id);
   }
  ngOnInit() {
    this.form=this.formBuilder.group({
      TranscationType:[''],
      cardnumber:[''],
      cvv:[''],
      expirydate:[''],
      name:[''],
      DateTime:[''],
      NumberOfItems:[''],
      remarks:['']
    })
  }
  onSubmit()
  {
     this.purchasehistory=new PurchaseHistory();
     this.purchasehistory.Id="I"+Math.floor(Math.random()*1000);
     this.purchasehistory.Buyerid=localStorage.getItem('Buyer');
     this.purchasehistory.Sellerid=localStorage.getItem('seller');
     this.purchasehistory.NumberOfItems=this.form.value["NumberOfItems"];
     this.purchasehistory.Itemid=this.item.id;
     this.purchasehistory.TranscationType=this.form.value["TranscationType"]
     this.purchasehistory.DateTime=this.form.value["DateTime"];
     this.purchasehistory.remarks=this.form.value["remarks"];
     console.log(this.purchasehistory);
     this.service.BuyItem(this.purchasehistory).subscribe(res=>{
       console.log("Purchase was Sucessfull");
       alert('Purchase Done Successfully');
     })
    }
   
}
