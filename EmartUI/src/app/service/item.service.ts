import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";
import { Items } from '../Models/items';
import { Category } from '../Models/category';
import { SubCategory } from '../Models/sub-category';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
})}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url:string='http://localhost:53804/Item/'

  constructor(private http:HttpClient) { }

public AddItem(item:Items):Observable<any>
{
  return this.http.post<any>(this.url+'AddItem',item)
}

public ViewItems():Observable<Items[]>
{
   return this.http.get<Items[]>(this.url+'ViewItems',Requestheaders);
}
  
  public UpdateItem(items:Items):Observable<any>
  {
     
     return this.http.put<any>(this.url+'UpdateItem',items,Requestheaders)
  }
  public DeleteItem(id:number):Observable<any>
  {
     
     return this.http.delete<any>(this.url+'Deleteitem/'+id,Requestheaders)
  }
  public GetById(id:number):Observable<Items>
  {
    return this.http.get<Items>(this.url+'GetById/'+id,Requestheaders)
  }
  public GetAllCategories():Observable<Category[]>
  {
    return this.http.get<Category[]>(this.url+'GetAllCategories/',Requestheaders)
  }
public GetSub(cid:string):Observable<any>
{
  return this.http.get<SubCategory>(this.url+'GetSubCategory/'+cid,Requestheaders)
}
}