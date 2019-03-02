import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { brand_login } from "../../classes/brand_class";
import { BrandServiceService } from '../../services/brand-service.service';

@Component({
  selector: 'app-brand-login',
  templateUrl: './brand-login.component.html',
  styleUrls: ['./brand-login.component.css']
})
export class BrandLoginComponent implements OnInit {
 
  email:string;
  password:string; 
  hide = true;
  constructor(public _route:Router,public _brandser:BrandServiceService) { }

  ngOnInit() {
  }

  onlogin(){
    this._brandser.login(new brand_login(this.email,this.password)).subscribe(
      (data:brand_login[])=>{
        console.log(data);
        if (data.length==1)
        {
          localStorage.setItem('email',this.email);
          this._route.navigate(['/brand_menu']);
        }
        else
        {
          alert("Invalid email_id or password");
        }
      }
      
    );
  }

}
