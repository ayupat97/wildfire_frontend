import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-signup',
  templateUrl: './brand-signup.component.html',
  styleUrls: ['./brand-signup.component.css']
})
export class BrandSignupComponent implements OnInit {

  constructor(public _route:Router) { }

  ngOnInit() {
  }

  onsignup(){
    this._route.navigate(['/brand_login']); 
  }
  oncancel(){ 
    this._route.navigate(['/brand']);
  }

}
