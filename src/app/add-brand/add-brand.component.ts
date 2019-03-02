import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AdminServiceService } from "../services/admin-service.service";
import { brand } from "../classes/brand_class";
import { field } from "../classes/field_class";

export interface Field {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {
  brandId:number;
  name:string;
  profilePic:string;
  email:string;
  uname:string;
  password:string;
  field:string;
  bio:string;
  fbLink:string;
  instaLink:string;
  twitterLink:string;
  hide=true;
  field_arr:string[]=[];

  constructor(public adminser:AdminServiceService, public _route:Router) { }

  ngOnInit() {
    this.adminser.getallfield().subscribe(
      (data:any)=>{
        this.field_arr=data;
        console.log(data);
      }
    )

  }

  onaddbrand(){
    this.adminser.addbrand(new brand(this.name,this.profilePic,this.email,this.uname,this.password,this.field,this.bio,this.fbLink,this.instaLink,this.twitterLink)).subscribe(
      (data:brand)=>{
        console.log(data);
        this._route.navigate(['/menu/admin_brand']);
      }
    )
  }
  oncancel(){
    this._route.navigate(['/menu/admin_brand'])
  }

}
