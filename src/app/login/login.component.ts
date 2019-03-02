import { Component, OnInit } from '@angular/core';
import { admin } from "../classes/admin_class";
import { AdminServiceService } from "../services/admin-service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
adminId:number;
email:string;
password:string; 
hide = true;
  constructor(public _route:Router,public _admser:AdminServiceService) { }

  ngOnInit() {
  }

  onlogin(){
    this._admser.login(new admin(this.email,this.password)).subscribe(
      (data:admin[])=>{
        console.log(data);
        if (data.length==1)
        {
          localStorage.setItem('email',this.email);
          this._route.navigate(['/menu']);
        }
        else
        {
          alert("Invalid email_id or password");
        }
      }
      
    );
  }


}
