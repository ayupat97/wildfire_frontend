import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  //isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(public _route:Router,private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onbrand(){
    this._route.navigate(['/brand']);
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
