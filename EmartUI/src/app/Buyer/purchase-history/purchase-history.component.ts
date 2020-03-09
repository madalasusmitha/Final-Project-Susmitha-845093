import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Models/items';
import{PurchaseHistory} from 'src/app/Models/purchase-history'
import { BuyerService } from 'src/app/service/buyer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {

  list:PurchaseHistory[]=[];
  purchasehistory:PurchaseHistory;
  item:Items;
  list1:Items[]=[];
    constructor(private service:BuyerService,private route:Router) {
      this.item=JSON.parse(localStorage.getItem('item'));
      this.list1.push(this.item)
    console.log(this.item);
    console.log(this.item.id);
      this.service.ViewOrders().subscribe(res=>{
        this.list=res;
        console.log(this.list);
      },err=>{
        console.log(err)
      })
     }
  
  ngOnInit() {
  }
  Logout(){
  //  localStorage.clear();
    this.route.navigateByUrl('HOME');
  }

}