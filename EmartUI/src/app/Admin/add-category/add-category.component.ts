import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  
  submitted=false;
  list:Category[];
  item:Category;
  addcategoryform: FormGroup;

  constructor(private builder:FormBuilder,private service:AdminService) {
  
  }

  ngOnInit() {
    this.addcategoryform=this.builder.group({
      categoryid:['',Validators.required],
      categoryname:['',Validators.required],
      briefdetails:['',Validators.required]
      
    });
  }
  get f() { return this.addcategoryform.controls; }

  onSubmit() {
      this.submitted = true;
      this.Add();
      
  }

  onReset() {
      this.submitted = false;
      this.addcategoryform.reset();
  }
  Add()
  {
     this.item=new Category();
     this.item.categoryid=this.addcategoryform.value["categoryid"];
     this.item.categoryname=this.addcategoryform.value["categoryname"];
     this.item.briefdetails=this.addcategoryform.value["briefdetails"];
     console.log(this.item);
     this.service.AddCategory(this.item).subscribe(res=>{
       console.log('Record Added')
       alert('SUCCESS!! :-)\n\n')
     },erros=>{
       console.log(erros)
     })
      
  }

}
