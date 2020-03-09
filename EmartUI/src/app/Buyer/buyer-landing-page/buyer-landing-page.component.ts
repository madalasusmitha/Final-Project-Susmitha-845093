import { Component, OnInit } from '@angular/core';
import{BuyerService} from 'src/app/service/buyer.service';
import{Items}from 'src/app/Models/items';
import { Router } from '@angular/router';
import{Buyer}from 'src/app/Models/buyer';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Category } from 'src/app/Models/category';
import { Cart } from 'src/app/Models/cart';




@Component({
  selector: 'app-buyer-landing-page',
  templateUrl: './buyer-landing-page.component.html',
  styleUrls: ['./buyer-landing-page.component.css']
})
export class BuyerLandingPageComponent implements OnInit {
  itemlist:Items[];
  searchform:FormGroup;
  list:Items[];
  itemname:string;
  item:Items;
  isShow:boolean=true;
  clist:Category[];
  cart:Cart;
  category:string;

  constructor(private formbuilder:FormBuilder,private service:BuyerService,private route:Router) {
    // this.service.GetCategories().subscribe(res=>{
    //   this.clist=res;
    //   console.log(this.clist);
    // })
    // this.service.GetAllItems().subscribe(res=>{
    //   this.list=res;
    //   console.log(this.list);
      
    // })
  }
  ngOnInit() {
    this.searchform=this.formbuilder.group({
   
  });
  }
  search(name:string)
  {
    this.service.SearchItemByName(name).subscribe(res=>{
      this.itemlist=res;
      console.log(this.itemlist);
    })


  }
  // Show(){
  //   this.isShow=!this.isShow;
  // }
  // Buy(product:Items){
  //   console.log(product);
  //   localStorage.setItem('product',JSON.stringify(product));
  //   this.route.navigateByUrl('/buy-product');

  // }
  // // SearchByCategory(id:string){
  // //   this.service.GetItemByCategoryId(id).subscribe(res=>{
  // //     this.list=res;
  // //     console.log(this.list);
  // //   })

  // // }
  // AddtoCart(item2:Items){
  //   console.log(item2);
  //  this.cart=new Cart();
  //  this.cart.cartid='EMCR'+Math.round(Math.random()*100);
  //  this.cart.itemid=item2.id;
  //  this.cart.itemname=item2.itemName;
  //  this.cart.categoryid=item2.categoryId;
  //  this.cart.subcategoryid=item2.subcategoryId
  //  this.cart.stocknumber=item2.stockNumber;
  //  this.cart.price=item2.price;
  //  this.cart.description=item2.description;
  //  this.cart.remarks=item2.remarks;
  //  this.cart.sellerid=item2.sid;
  //  this.cart.image=item2.image;
  //  this.cart.Buyerid= localStorage.getItem('buyer');
  //  console.log(this.cart);
  //  this.service.AddtoCart(this.cart).subscribe(res=>{
  //    console.log("Record added To Cart");
  //    alert('Item has been Added To Cart');
  //  })
  // }
   Logout(){
    localStorage.clear();
    this.route.navigateByUrl('/login')
  }

}