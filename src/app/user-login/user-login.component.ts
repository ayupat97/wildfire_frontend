import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(public _route:Router) { }

  ngOnInit() {
  }

  onInflu(){
    this._route.navigate(['/influ_login']);
  }

  onBrand(){
    this._route.navigate(['/brand_login']);
  }
  
  onAdmin(){
    this._route.navigate(['/admin_login']);
  }
  
  

}
