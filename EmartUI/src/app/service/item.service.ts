import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";
import { Items } from '../Models/items';
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
     
     return this.http.put<any>(this.url+'UpdateItem',JSON.stringify(items),Requestheaders)
  }
  public DeleteItem(id:number):Observable<any>
  {
     
     return this.http.delete<any>(this.url+'Deleteitem/'+id,Requestheaders)
  }
  public GetById(id:number):Observable<Items>
  {
    return this.http.get<Items>(this.url+'GetById/'+id,Requestheaders)
  }
}