import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import{Observable} from 'Rxjs';
import { Buyer } from '../Models/buyer';
import{Items} from '../Models/items';
import { PurchaseHistory } from '../Models/purchase-history';
import { Cart } from '../Models/cart';
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
  public GetAllItems():Observable<Items[]>
  {
      return this.http.get<Items[]>(this.url+'GetAllItems/',Requestheaders);
  }
  public BuyItem(item:PurchaseHistory):Observable<any>
  {
      return this.http.post<any>(this.url+'BuyItem',item,Requestheaders);
  }
  public AddtoCart(cart:Cart):Observable<any>{
    return this.http.post<any>(this.url+'AddCart',cart,Requestheaders);
  }
  public GetCartItems():Observable<any>
  {
    return this.http.get<any>(this.url+'GetCartItems',Requestheaders);
  }
  public GetCategories():Observable<any>{
    return this.http.get<any>(this.url+'GetCategories',Requestheaders);
  }
  public RemoveCartItem(id:any):Observable<any>
  {
     
     return this.http.delete<any>(this.url+'Delete/'+id,Requestheaders)
  }
  public ViewOrders():Observable<any>
{
  return this.http.get<any>(this.url+'ViewOrders',Requestheaders);
}
 
}
