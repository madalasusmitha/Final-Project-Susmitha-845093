import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import{Observable} from 'Rxjs';
import { Buyer } from '../Models/buyer';
import { Seller } from '../Models/seller';
const Requestheaders={headers:new HttpHeaders({
  'Content-type':'application/json'
})}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url:string='http://localhost:53804/Account/'

  constructor(private http:HttpClient) { }
  public AddBuyer(item:Buyer):Observable<any>
  {
      return this.http.post<any>(this.url+'AddBuyer',item);
  }
  public AddSeller(item:Seller):Observable<any>
  {
      return this.http.post<any>(this.url+'AddSeller',item);
  }
}
