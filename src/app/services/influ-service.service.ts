import { Injectable } from '@angular/core';
import { influ_login, influencer } from '../classes/influencer_class';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfluServiceService {
  influLogin_url:string='http://localhost:3000/logininflu/';

  constructor(public _http:HttpClient) { }

   
  login(item:influ_login){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.influLogin_url,body,{headers:h});
  }
}