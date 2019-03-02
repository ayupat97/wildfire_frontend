import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-influ-signup',
  templateUrl: './influ-signup.component.html',
  styleUrls: ['./influ-signup.component.css']
})
export class InfluSignupComponent implements OnInit {

  constructor(public _route:Router) { }

  ngOnInit() {
  }

  onsignup(){
    this._route.navigate(['/influ_login']); 
  }
  oncancel(){ 
    this._route.navigate(['/influ']);
  }

}
