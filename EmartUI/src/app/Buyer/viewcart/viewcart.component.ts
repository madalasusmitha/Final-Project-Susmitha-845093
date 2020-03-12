import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Models/items';
import { Router } from '@angular/router';
import { BuyerService } from 'src/app/service/buyer.service';
import { Cart } from 'src/app/Models/cart';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {
  cartlist:Cart[];
  item:Items;
    constructor(private route:Router,private service:BuyerService) {
      this.service.GetCartItems().subscribe(res=>{
        this.cartlist=res;
        console.log(this.cartlist);
      })
     }
    ngOnInit() {
    }
    buy(item:Items)
    {
      console.log(item);
      localStorage.setItem('item',JSON.stringify(item));
      this.route.navigateByUrl('Buyerlandingpage/Buyproduct');
      
    }
  Remove(itemid:string)
  {
    console.log(itemid);
    let id=itemid;
    this.service.RemoveCartItem(id).subscribe(res=>{
      console.log('Item Removed from Cart');
      alert('Item Removed from Cart');
    })
  }
 

}
