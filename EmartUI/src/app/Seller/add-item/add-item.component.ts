import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {Items} from 'src/app/Models/items';
import{  ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  list:Items[]=[];
  itemForm:FormGroup;
  submitted=false;
  item:Items;
  constructor(private frombuilder:FormBuilder ,private service:ItemService) { }

  ngOnInit() {
    this.itemForm=this.frombuilder.group({
      id:['',[Validators.required]],
      Sid:['',[Validators.required]],
      CategoryId:['',[Validators.required]],
      subcategoryid:['',[Validators.required]],
      price:['',Validators.required],
      itemname:['',Validators.required],
      description:['',Validators.required],
      StockNumber:['',Validators.required],
      remarks:['',Validators.required]
    });
  }
    get f() { return this.itemForm.controls; }

  onSubmit() {
      this.submitted = true;
      this.Add();
      
  }
  onReset() {
      this.submitted = false;
      this.itemForm.reset();
  }
  Add()
  {
     this.item=new Items();
     this.item.id=this.itemForm.value["id"];
     this.item.Sid=this.itemForm.value["Sid"];
     this.item.CategoryId=this.itemForm.value["CategoryId"];
     this.item.subcategoryid=this.itemForm.value["subcategoryid"];
     this.item.itemname=this.itemForm.value["itemname"];
     this.item.price=Number(this.itemForm.value["price"]);
     this.item.description=this.itemForm.value["description"];
    this.item.StockNumber=Number(this.itemForm.value["StockNumber"]);
    this.item.remarks=this.itemForm.value["remarks"]
     console.log(this.item);
     this.service.AddItem(this.item).subscribe(res=>{
       console.log('Record Added')
     },erros=>{
       console.log(erros)
     })

    }
  }

