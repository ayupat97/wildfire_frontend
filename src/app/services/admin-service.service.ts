import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { influencer } from "../classes/influencer_class";
import { brand } from "../classes/brand_class";
import { admin } from "../classes/admin_class";
import { field } from "../classes/field_class";
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
adminLogin_url:string='http://localhost:3000/adminlogin/';
admin_update_url:string='http://localhost:3000/updateadmin/';
admin_view_url:string='http://localhost:3000/manageadmin/';
admin_add_url:string='http://localhost:3000/addadmin/';


influ_add_url:string='http://localhost:3000/addinfluencer/';
influ_del_url:string='http://localhost:3000/delinfluencer/';
influ_delmul_url:string='http://localhost:3000/delmulinflu/';
influ_update_url:string='http://localhost:3000/updateinflu/';
influ_view_url:string='http://localhost:3000/viewinfluencer/';

brand_add_url:string='http://localhost:3000/addbrand/';
brand_del_url:string='http://localhost:3000/delbrand/';
brand_delmul_url:string='http://localhost:3000/delmulbrand/';
brand_update_url:string='http://localhost:3000/updatebrand/';
brand_view_url:string='http://localhost:3000/viewbrand/';

field_add_url:string='http://localhost:3000/addfield/';
field_del_url:string='http://localhost:3000/delfield/';
field_delmul_url:string='http://localhost:3000/delmulfield/';
field_update_url:string='http://localhost:3000/updatefield/';
field_view_url:string='http://localhost:3000/viewfield/';
  constructor(public _http:HttpClient) { }

   
  login(item:admin){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.adminLogin_url,body,{headers:h});
  }
  getadminbyid(id:string){
    return this._http.get(this.admin_view_url+id);
  }
  addadmin(item:admin){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.admin_add_url,body,{headers:h});
  }
  updateprofile(item:admin){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.admin_update_url+item.adminId,body,{headers:h});
  }
  
  getallinflu(){
    return this._http.get(this.influ_view_url);
  }
  getinflubyid(id:number)
  {
      return this._http.get(this.influ_view_url+id);
  }
  addinfluencer(item:influencer){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.influ_add_url,body,{headers:h});
  }
  delinflu(item:influencer){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.influ_del_url+item.influId,{headers:h});
  }
  delmultipleinflu(item:influencer[]){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.influ_delmul_url,body,{headers:h});
  }
  updateinflu(item:influencer,id:number){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.influ_update_url+id,body,{headers:h});
  }

  getallbrand(){
    return this._http.get(this.brand_view_url);
  }
  getbrandbyid(id:number)
  {
      return this._http.get(this.brand_view_url+id);
  }
  addbrand(item:brand){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.brand_add_url,body,{headers:h});
  }
  delbrand(item:brand){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.brand_del_url+item.brandId,{headers:h});
  }
  delmultiplebrand(item:brand[]){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.brand_delmul_url,body,{headers:h});
  }
  updatebrand(item:brand,id:number){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.brand_update_url+id,body,{headers:h});
  }

  
  getallfield(){
    return this._http.get(this.field_view_url);
  }
  getfieldbyid(id:number)
  {
      return this._http.get(this.field_view_url+id);
  }
  addfield(item){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.field_add_url,body,{headers:h});
  }
  delfield(item:field){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.field_del_url+item.f_id,{headers:h});
  }
  delmultiplefield(item:field[]){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.field_delmul_url,body,{headers:h});
  }
  updatefield(item:field,id:number){
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.field_update_url+id,body,{headers:h});
  }
}

