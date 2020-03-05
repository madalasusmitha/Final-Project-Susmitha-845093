import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ItemService} from 'src/app/service/item.service';
import { Items } from 'src/app/Models/items';
import { Seller } from 'src/app/Models/seller';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  itemForm:FormGroup;
  submitted=false;
  list:Items[];
  item:Items;
  seller:Seller
  constructor(private service:ItemService,private formBuilder:FormBuilder) { 
    this.service.ViewItems().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err)
    })
  }

  ngOnInit(){}

  get f() { return this.itemForm.controls; }

  onSubmit() {
      this.submitted = true;
  }
  onReset() {
      this.submitted = false;
      this.itemForm.reset();
  }
  
  Update()
  {
    this.item=new Items();
    this.item.id=this.itemForm.value["id"];
    this.item.CategoryId=this.itemForm.value["CategoryId"];
    this.item.subcategoryid=this.itemForm.value["subcategoryid"];
    this.item.price=Number(this.itemForm.value["price"]);
    this.item.itemname=this.itemForm.value["itemname"];
    this.item.description=this.itemForm.value["description"];
    this.item.StockNumber=Number(this.itemForm.value["StockNumber"]);
    this.item.remarks=this.itemForm.value["remarks"];
    this.item.Sid=this.itemForm.value["Sid"];
    console.log(this.item);
    this.service.UpdateItem(this.item).subscribe(res=>
      {
        console.log('record updated')
      })
  }
  Delete(id:number){
    this.service.DeleteItem(id).subscribe(res=>{
      console.log('Record deleted');
    },
    err=>{
      console.log(err);
    })
  }
  }

