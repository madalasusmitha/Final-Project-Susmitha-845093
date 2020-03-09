import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/service/buyer.service';
import { ItemService } from 'src/app/service/item.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { Cart } from 'src/app/Models/cart';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.css']
})
export class SearchingComponent implements OnInit {
  searchform:FormGroup;
list:Items[];
items:Items;
list1:Items[];
itemlist:Items[];
cart:Cart;
isShow:boolean=true;

constructor(private service:BuyerService,private itemservice:ItemService,private router:Router,
    private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.searchform=this.formbuilder.group({
      itemname:['']
    })
  // this.ViewItems();
  }
// ViewItems()
// { 
//   this.itemservice.GetAllItems().subscribe(res=>
//     {
     
//       this.list1=res;
//       console.log(this.list1);
//     },
//     err=>{
//       console.log(err);
//     });
// }
search()
{
  this.items=new Items();
  this.items.itemName=this.searchform.value["itemname"];
  this.service.SearchItemByName(this.items.itemName).subscribe(res=>{
    this.list=res;
    console.log(this.list);
 
  }
  ,err=>{
    console.log(err);
  })
}
Show(){
     this.isShow=!this.isShow;
  }
buy(item:Items)
{
  console.log(item);
  localStorage.setItem('item',JSON.stringify(item));
  this.router.navigateByUrl('Buyerlandingpage/Buyproduct');
  
}
AddtoCart(item2:Items)
{
  console.log(item2);
 this.cart=new Cart();
 this.cart.cartid='EMCR'+Math.round(Math.random()*100);
 this.cart.itemid=item2.id;
 this.cart.itemname=item2.itemName;
 this.cart.categoryid=item2.categoryId;
 this.cart.subcategoryid=item2.subcategoryId
 this.cart.stocknumber=item2.stockNumber;
 this.cart.price=item2.price;
 this.cart.description=item2.description;
 this.cart.remarks=item2.remarks;
 this.cart.sellerid=item2.sid;
 this.cart.image=item2.image;
 this.cart.Buyerid= localStorage.getItem('Buyer');
 console.log(this.cart);
 this.service.AddtoCart(this.cart).subscribe(res=>{
   console.log("Record added To Cart");
   alert('Item has been Added To Cart');
 })
}
}




