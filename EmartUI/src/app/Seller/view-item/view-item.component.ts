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
  image:string;

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
    
  }

ngOnInit(){
  this.itemForm=this.formBuilder.group({
    id:[''],
    itemName:[''],
    price:[''],
  description:[''],
  stockNumber:[''],
  sid:[''],
  subcategoryId:[''],
  categoryId:[''],
   remarks:[''],
   image:['']
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
               stockNumber:this.item.stockNumber,
               sid:this.item.sid,
               categoryId:this.item.categoryId,
               subcategoryId:this.item.subcategoryId,
               remarks:this.item.remarks,
               image:this.item.image,
               
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
    this.item.categoryId=this.itemForm.value["categoryId"];
    this.item.subcategoryId=this.itemForm.value["subcategoryId"];
    this.item.price=Number(this.itemForm.value["price"]);
    this.item.itemName=this.itemForm.value["itemName"];
    this.item.description=this.itemForm.value["description"];
    this.item.stockNumber=Number(this.itemForm.value["stockNumber"]);
    this.item.remarks=this.itemForm.value["remarks"];
    this.item.sid=this.itemForm.value["sid"];
    this.item.image=this.image;
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
  fileEvent(event){
    this.image = event.target.files[0].name;
}
  }