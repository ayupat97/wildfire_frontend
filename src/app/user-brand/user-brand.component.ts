import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-brand',
  templateUrl: './user-brand.component.html',
  styleUrls: ['./user-brand.component.css']
})
export class UserBrandComponent implements OnInit {

  constructor(public _route:Router) { }

  ngOnInit() {
  }
  
  onhome(){
    this._route.navigate(['/']);
  }
  oninflu(){
    this._route.navigate(['/influ']);
  }
  onlogin(){
    this._route.navigate(['/login']);
  }
  onsignup(){
    this._route.navigate(['/signup']);
  }
  oncontact(){
    this._route.navigate(['/contact']);
  }

} 
