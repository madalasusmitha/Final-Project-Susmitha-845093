import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ItemService} from 'src/app/service/item.service';
import { Items } from 'src/app/Models/items';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  list:Items[];
  sellerid:string;

  constructor(private service:ItemService,private formBuilder:FormBuilder) { }

  ngOnInit() {
  }
  ViewItems()
  {
   let id=this.sellerid; 
    this.service.ViewItems(id).subscribe(res=>
      {
        this.list=res;
        console.log(this.list);
      },
      err=>{
        console.log(err);
      });
  }
}
