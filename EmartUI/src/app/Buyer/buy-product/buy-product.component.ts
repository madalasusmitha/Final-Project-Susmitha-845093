import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { BuyerService } from 'src/app/service/buyer.service';
import { combineLatest } from 'rxjs';
import {Items} from 'src/app/Models/items';
import { PurchaseHistory } from 'src/app/Models/purchase-history';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/service/item.service';


@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
  item:Items;
  list:Items[];
  submitted=false;
  transaction:PurchaseHistory;
  buyproductform:FormGroup;
  constructor(private formbuilder:FormBuilder,private service:ItemService,private buyer:BuyerService,private router:Router)
  {  this.service.GetAllItems().subscribe(res=>{
    this.list=res;
    console.log(this.list);
  },err=>{
    console.log(err)
  })
}
        

  ngOnInit() 
  {
    this.buyproductform=this.formbuilder.group({
      itemName:[''],
      TranscationType:[''],
      cardnumber:[''],
      CVV:[''],
      ed:[''],
      buyername:[''],
      Id:[''],
      Sellerid:[''],
      NumberOfItems:[''],
      itemid:[''],
      DateTime:[''],
      Buyerid:[''],remarks:['']
    })
   
    this.viewdata();
    
  }
  viewdata()
  {
    this.item=JSON.parse(localStorage.getItem('item1'));
    console.log(this.item);
    console.log(this.item.id);
    this.buyproductform.patchValue({
        itemName:this.item.itemName,
      
      
    })
  }
  purchase()
  {
    this.submitted= true;
    if(this.buyproductform.valid)
    {
      console.log(this.item);
      this.transaction=new PurchaseHistory();
     this.transaction.Sellerid=this.item.sid;
      this.transaction.Itemid=this.item.id;
      this.transaction.NumberOfItems=Number(this.buyproductform.value["NumberOfItems"]);
      this.transaction.Buyerid=localStorage.getItem("Buyer")
      this.transaction.DateTime=this.buyproductform.value["DateTime"];
      this.transaction.TransactionId='T'+Math.round(Math.random()*1000);
      this.transaction.TranscationType=this.buyproductform.value["transactiontype"];
      this.transaction.remarks=this.buyproductform.value["remarks"];
      this.transaction.Id='I'+Math.round(Math.random()*1000);
      console.log(this.transaction)
      this.buyer.BuyItem(this.transaction).subscribe(res=>
        {
        
          console.log('Added succesfully');
        },err=>{console.log(err)}
  
        )
      }

  }
 
    
}
