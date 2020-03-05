import { Component, OnInit } from '@angular/core';
import{BuyerService} from 'src/app/service/buyer.service';
import{Items}from 'src/app/Models/items';
import { Router } from '@angular/router';
import{Buyer}from 'src/app/Models/buyer';
import { FormGroup, FormBuilder } from '@angular/forms';




@Component({
  selector: 'app-buyer-landing-page',
  templateUrl: './buyer-landing-page.component.html',
  styleUrls: ['./buyer-landing-page.component.css']
})
export class BuyerLandingPageComponent implements OnInit {
  itemlist:Items[];
  searchform:FormGroup;

  constructor(private formbuilder:FormBuilder,private service:BuyerService,private route:Router) { }

  ngOnInit() {
  }
   myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  search(name:string)
  {
    this.service.SearchItemByName(name).subscribe(res=>{
      this.itemlist=res;
      console.log(this.itemlist);
    })

}
}