import { Component, OnInit } from '@angular/core';
import { admin } from "../classes/admin_class";
import { AdminServiceService } from "../services/admin-service.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
id:string;
name:string;
mobile:string;
email:string;
password:string;
adminId:number;
hide = true;
  constructor(public _route:Router,public adminser:AdminServiceService,public aroute:ActivatedRoute) { }

  ngOnInit() {
    this.id=localStorage.getItem('email');
    this.adminser.getadminbyid(this.id).subscribe(
      (data:admin)=>{
        this.email=data[0].email;
        this.password=data[0].password;
        this.name=data[0].name;
        this.mobile=data[0].mobile;
        this.adminId=data[0].adminId
        console.log(data);
      }
    )

  }
  onprofilemanagement(){
    this.adminser.updateprofile(new admin(this.email,this.password,this.name,this.mobile,this.adminId)).subscribe(
      (data:admin)=>{
        console.log(data);
        this._route.navigate(['/menu/admin_profile']);
      }
    )
  }

  onadd(){
    this._route.navigate(['/menu/add_admin']);
  }
}
