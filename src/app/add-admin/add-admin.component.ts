import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AdminServiceService } from "../services/admin-service.service";
import { admin } from "../classes/admin_class";
@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  name:string;
  mobile:string;
  email:string;
  password:string;
  adminId:number;
  hide = true;
  constructor(public adminser:AdminServiceService,public _route:Router) { }

  ngOnInit() {
  }

  onaddadmin(){
    this.adminser.addadmin(new admin(this.email,this.password,this.name,this.mobile)).subscribe(
      (data:admin)=>{
        console.log(data);
        alert('Admin Successfully Added');
        this._route.navigate(['/menu/admin_profile']);
      }
    )
  }
  oncancel(){
    this._route.navigate(['/menu/admin_profile'])
  }
}
 