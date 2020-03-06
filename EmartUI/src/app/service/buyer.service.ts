import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import{Observable} from 'Rxjs';
import { Buyer } from '../Models/buyer';
const Requestheaders={headers:new HttpHeaders({
  'Content-type':'application/json'
  
})}
@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  url:string='http://localhost:53804/Buyer/'
  constructor(private http:HttpClient) { }
  public SearchItemByName(item:string):Observable<any>
  {
    return this.http.get(this.url+'SearchItemByName/'+item,Requestheaders)
  }
  public GetById(id:any):Observable<Buyer>
  {
      return this.http.get<Buyer>(this.url+'GetProfile/'+id,Requestheaders);
  }
  public Update(seller:Buyer):Observable<Buyer>
  {
    return this.http.put<Buyer>(this.url+'EditProfile',seller,Requestheaders);
  }

}
