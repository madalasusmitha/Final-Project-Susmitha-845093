import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/Models/sub-category';
import{Category} from 'src/app/Models/category';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent implements OnInit {
  submitted=false;
  
  item:SubCategory;
  list1:Category[];
  addSubcategoryform: FormGroup;

  constructor(private builder:FormBuilder,private service:AdminService) { 
    this.item=new SubCategory();
    this.service.GetAllCategories().subscribe(res=>{
      this.list1=res;
      console.log(this.list1);
    })

  }

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
      if(this.addSubcategoryform.valid)
      {
        alert("Success")
        console.log(JSON.stringify(this.addSubcategoryform.value));
        
      }
      
  }

  onReset() {
      this.submitted = false;
      this.addSubcategoryform.reset();
  }
  Add()
  {
     this.item=new SubCategory();
     this.item.subcategoryid='subc'+Math.round(Math.random()*100);
     this.item.subcategoryname=this.addSubcategoryform.value["subcategoryname"];
     this.item.categoryid=this.addSubcategoryform.value["categoryid"];
     this.item.briefdetails=this.addSubcategoryform.value["briefdetails"];
     this.item.GST=Number(this.addSubcategoryform.value["GST"]);
     console.log(this.item);
     this.service.AddSubCategory(this.item).subscribe(res=>{
       console.log('Record Added')
       alert('SUCCESS!! :-)\n\n')

     },erros=>{
       console.log(erros)
     })
  }
  
}
