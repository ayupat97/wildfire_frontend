import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor(public _route:Router) { }

  ngOnInit() {
  }

  onInflu(){
    this._route.navigate(['/influ_signup']);
  }

  onBrand(){
    this._route.navigate(['/brand_signup']);
  }

}
