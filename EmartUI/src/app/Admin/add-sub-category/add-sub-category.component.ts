import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/Models/sub-category';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent implements OnInit {
  submitted=false;
  list:SubCategory;
  item:SubCategory;
  addSubcategoryform: FormGroup;

  constructor(private builder:FormBuilder,private service:AdminService) { }

  ngOnInit() {
    this.addSubcategoryform=this.builder.group({
      subcategoryid:['',Validators.required],
      subcategoryname:['',Validators.required],
      categoryid:['',Validators.required],
      briefdetails:['',Validators.required],
      GST:['',Validators.required]
      
    });
  }
  get f() { return this.addSubcategoryform.controls; }

  onSubmit() {
      this.submitted = true;
      this.Add();
      
  }

  onReset() {
      this.submitted = false;
      this.addSubcategoryform.reset();
  }
  Add()
  {
     this.item=new SubCategory();
     this.item.subcategoryid=this.addSubcategoryform.value["subcategoryid"];
     this.item.subcategoryname=this.addSubcategoryform.value["subcategoryname"];
     this.item.categoryid=this.addSubcategoryform.value["categoryid"];
     this.item.briefdetails=this.addSubcategoryform.value["briefdetails"];
     this.item.GST=Number(this.addSubcategoryform.value["GST"]);
     console.log(this.item);
     this.service.AddSubCategory(this.item).subscribe(res=>{
       console.log('Record Added')
     },erros=>{
       console.log(erros)
     })
  }


}
