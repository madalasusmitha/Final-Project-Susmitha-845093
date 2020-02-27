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
  return this.http.post<any>(this.url+'AddItem',JSON.stringify(item),Requestheaders)
}
public ViewItems(sellerid:string):Observable<any>
{
  return this.http.get(this.url+'Item/ViewItems/'+sellerid,Requestheaders);
}
}