import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/service/buyer.service';
import { ItemService } from 'src/app/service/item.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Items } from 'src/app/Models/items';

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

constructor(private service:BuyerService,private itemservice:ItemService,private router:Router,
    private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.searchform=this.formbuilder.group({
      itemname:['']
    })
   this.ViewItems();
  }
ViewItems()
{ 
  this.itemservice.GetAllItems().subscribe(res=>
    {
     
      this.list1=res;
      console.log(this.list1);
    },
    err=>{
      console.log(err);
    });
}
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
buy()
{
  this.router.navigateByUrl('Buyerlandingpage/Buyproduct');
  
}
addtocart()
{

}

}



