import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {Items} from 'src/app/Models/items';
import{  ItemService } from 'src/app/service/item.service';
import { Category } from 'src/app/Models/category';
import { SubCategory } from 'src/app/Models/sub-category';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  itemForm:FormGroup;
  submitted=false;
  list1:Items[];
  item:Items;
  clist:Category[];
  sclist:SubCategory[];
  image:string;
  constructor(private frombuilder:FormBuilder ,private service:ItemService) { 
    this.service.GetAllCategories().subscribe(res=>{
      this.clist=res;
      console.log(this.clist);
    })

  }

  ngOnInit() {
    this.itemForm=this.frombuilder.group({
      // id:['',[Validators.required]],
      Sid:['',[Validators.required]],
      categoryId:['',[Validators.required]],
      subcategoryId:['',[Validators.required]],
      price:['',Validators.required],
      itemname:['',Validators.required],
      description:['',Validators.required],
      StockNumber:['',Validators.required],
      remarks:['',Validators.required],
      image:['']
    });
  }
  get f(){return this.itemForm.controls;}
  onSubmit()
  {
    this.submitted= true;
    this.Add();
    //display form value on success
    if(this.itemForm.valid)
    {
      alert("Success")
      console.log(JSON.stringify(this.itemForm.value));
      
    }
  }
  onReset() {
    this.submitted = false;
    this.itemForm.reset();
  }
  Add()
  {
     this.item=new Items();
    //  this.item.id=this.itemForm.value["id"];
    //  this.item.Sid=this.itemForm.value["Sid"];
    this.item.id='add'+Math.round(Math.random()*100);
    this.item.Sid=this.itemForm.value["Sid"];
    this.item.CategoryId=this.itemForm.value["categoryId"];
     this.item.subcategoryid=this.itemForm.value["subcategoryId"];
     this.item.itemname=this.itemForm.value["itemname"];
     this.item.price=Number(this.itemForm.value["price"]);
     this.item.description=this.itemForm.value["description"];
    this.item.StockNumber=Number(this.itemForm.value["StockNumber"]);
    this.item.remarks=this.itemForm.value["remarks"];
    this.item.image=this.image;
     console.log(this.item);
     this.service.AddItem(this.item).subscribe(res=>{
       console.log('Record Added')
     },erros=>{
       console.log(erros)
     })

    }
    GetSubCategory()
  {
    let cid=this.itemForm.value["categoryId"];
    console.log(cid);
    this.service. GetSub(cid).subscribe(res=>{
      this.sclist=res;
      console.log(this.sclist);
    })
  }
  fileEvent(event){
    this.image = event.target.files[0].name;
}
  }