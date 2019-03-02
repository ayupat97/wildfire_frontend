import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-influ',
  templateUrl: './user-influ.component.html',
  styleUrls: ['./user-influ.component.css']
})
export class UserInfluComponent implements OnInit {

  constructor(public _route:Router) { }

  ngOnInit() {
  }

  
  onhome(){
    this._route.navigate(['/']);
  }
  onbrand(){
    this._route.navigate(['/brand']);
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
