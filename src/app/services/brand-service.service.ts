import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { brand_login,brand } from '../classes/brand_class';

@Injectable({
  providedIn: 'root'
})
export class BrandServiceService {
  brandLogin_url:string='http://localhost:3000/loginbrand/';

  constructor(public _http:HttpClient) { }

   
  login(item:brand_login){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.brandLogin_url,body,{headers:h});
  }
}
