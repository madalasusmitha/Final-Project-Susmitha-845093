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
    if(localStorage.getItem('Buyer'))
    {

    }
    else{
      this.route.navigateByUrl('/Home/Login')
    }
    
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
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('/Home/Login')
  }

}