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
  isShow:boolean=true;

  constructor(private service:ItemService,private formBuilder:FormBuilder) { 
    let seller=localStorage.getItem('seller')
    this.service.ViewItems(seller).subscribe(res=>
      {
        this.list=res;
        console.log(this.list);
      },
      err=>{
        console.log(err);
      });
    // this.service.ViewItems().subscribe(res=>{
    //   this.list=res;
    //   console.log(this.list);
    // },err=>{
    //   console.log(err)
    // })
  }

ngOnInit(){
  this.itemForm=this.formBuilder.group({
    id:[''],
    itemName:[''],
    price:[''],
  description:[''],
  StockNumber:[''],
  Sid:[''],
  subcategoryId:[''],
  categoryId:[''],
   remarks:['']
  });
}

  get f() { return this.itemForm.controls; }

  onSubmit() {
      this.submitted = true;
  }
  onReset() {
      this.submitted = false;
      this.itemForm.reset();
  }
  
  GetItem(itemid:string)
  {
      this.service.GetItem(itemid).subscribe(res=>
         {
           this.item=res;
           console.log("get");
           console.log(this.item);
           console.log('Id Found');
           //console.log(res);
           this.itemForm.setValue(
             {
               id:this.item.id,
               itemName:this.item.itemName,
               price:this.item.price,
               description:this.item.description,
               StockNumber:this.item.StockNumber,
               sellerid:this.item.Sid,
               categoryId:this.item.CategoryId,
               subcategoryId:this.item.subcategoryid,
               remarks:this.item.remarks,
               
             }
           )
         },
         err=>
         {
           console.log(err);
         }
       )
      
     }
    
  Update()
  {
    this.item=new Items();
    this.item.id=this.itemForm.value["id"];
    this.item.CategoryId=this.itemForm.value["CategoryId"];
    this.item.subcategoryid=this.itemForm.value["subcategoryid"];
    this.item.price=Number(this.itemForm.value["price"]);
    this.item.itemName=this.itemForm.value["itemName"];
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