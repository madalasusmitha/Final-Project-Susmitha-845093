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
  public GetById(id:any):Observable<Seller>
  {
      return this.http.get<Seller>(this.url+'GetById/'+id,Requestheaders);
  }
  public Update(seller:Seller):Observable<Seller>
  {
    return this.http.put<Seller>(this.url+'Update',seller,Requestheaders);
  }

}
