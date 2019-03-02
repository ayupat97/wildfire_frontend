import { Component, OnInit } from '@angular/core';
import { brand } from "../classes/brand_class";
import { field } from "../classes/field_class";
import { AdminServiceService } from "../services/admin-service.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.css']
})
export class UpdateBrandComponent implements OnInit {
  id:number;
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
  field_arr:string[]=[];
  hide=true;

  constructor(public adminser:AdminServiceService,public _route:Router,public aroute:ActivatedRoute) { }

  ngOnInit() {
    this.adminser.getallfield().subscribe(
      (data:any)=>{
        this.field_arr=data;
        console.log(data);
      }
    )
    this.id=this.aroute.snapshot.params['brandId'];
    this.adminser.getbrandbyid(this.id).subscribe(
      (data:brand)=>{
        this.brandId=data[0].brandId;
        this.name=data[0].name;
        this.profilePic=data[0].profilePic;
        this.email=data[0].email;
        this.uname=data[0].uname;
        this.password=data[0].password;
        this.field=data[0].field;
        this.bio=data[0].bio;
        this.fbLink=data[0].fbLink;
        this.instaLink=data[0].instaLink;
        this.twitterLink=data[0].twitterLink;
        console.log(data);
      }
    )

  }
  
  onupdate(item:brand){
    this.adminser.updatebrand(new brand(this.name,this.profilePic,this.email,this.uname,this.password,this.field,this.bio,this.fbLink,this.instaLink,this.twitterLink),this.brandId).subscribe(
      (data:any)=>{
        console.log(data);
        this._route.navigate(['/menu/admin_brand']);
      }
    )
  }
  oncancel(){
    this._route.navigate(['/menu/admin_brand']);
  }

}
