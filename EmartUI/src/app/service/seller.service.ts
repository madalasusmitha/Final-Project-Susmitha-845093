import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Seller } from '../Models/seller';
const Requestheaders={headers:new HttpHeaders({
  'Content-type':'application/json'
})}

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  url:string='http://localhost:53804/Seller/'

  constructor(private http:HttpClient) { }
  public ViewProfile(id:string):Observable<any>
  {
      return this.http.get<any>(this.url+'GetById/'+id,Requestheaders);
  }
  public Update(seller:Seller):Observable<any>
  {
    return this.http.put<any>(this.url+'Seller/EditProfile',seller,Requestheaders);
  }
}
