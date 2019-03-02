import { Component, OnInit } from '@angular/core';
import { influencer } from "../classes/influencer_class";
import { AdminServiceService } from "../services/admin-service.service";
import { Router, ActivatedRoute } from "@angular/router";
import { field } from "../classes/field_class";
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-update-influencer',
  templateUrl: './update-influencer.component.html',
  styleUrls: ['./update-influencer.component.css']
})
export class UpdateInfluencerComponent implements OnInit {
  id:number;
  influId:number;
  name:string;
  profilePic:string;
  birthDate:Date;
  gender:string="Male";
  mobile:string;
  email:string;
  uname:string;
  password:string;
  field1:string;
  field2:string;
  field3:string;
  fbLink:string;
  instaLink:string;
  twitterLink:string;
  fbReach:number;
  instaReach:number;
  twitterReach:number;
  fees:number;
  bio:string;
  profession:string;
  hide = true;
  
field_arr:string[]=[];

myControl = new FormControl();
options: string[]=['Student','Part-Time Employee','Full-Time Employee','Housewife','Retired','Others'];
filteredOptions: Observable<string[]>;

  constructor(public adminser:AdminServiceService,public _route:Router,public aroute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.aroute.snapshot.params['influId'];
    this.adminser.getinflubyid(this.id).subscribe(
      (data:influencer)=>{
        this.influId=data[0].influId;
        this.name=data[0].name;
        this.profilePic=data[0].profilePic;
        this.birthDate=data[0].birthDate;
        this.gender=data[0].gender;
        this.mobile=data[0].mobile;
        this.email=data[0].email;
        this.uname=data[0].uname;
        this.password=data[0].password;
        this.field1=data[0].field1;
        this.field2=data[0].field2;
        this.field3=data[0].field3;
        this.fbLink=data[0].fbLink;
        this.instaLink=data[0].instaLink;
        this.twitterLink=data[0].twitterLink;
        this.fbReach=data[0].fbReach;
        this.instaReach=data[0].instaReach;
        this.twitterReach=data[0].twitterReach;
        this.fees=data[0].fees;
        this.bio=data[0].bio;
        this.profession=data[0].profession;
        console.log(data);
      }
    )
    this.adminser.getallfield().subscribe(
      (data:any)=>{
        this.field_arr=data;
        console.log(data);
      }
    );
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  onupdate(item:influencer){
    this.adminser.updateinflu(new influencer(this.name,this.profilePic,this.birthDate,this.gender,this.mobile,this.email,this.uname,this.password,this.field1,this.field2,this.field3,this.fbLink,this.instaLink,this.twitterLink,this.fbReach,this.instaReach,this.twitterReach,this.fees,this.bio,this.profession),this.influId).subscribe(
      (data:any)=>{
        console.log(data);
        this._route.navigate(['/menu/admin_influ']);
      }
    )
  }
  oncancel(){
    this._route.navigate(['/menu/admin_influ']);
  }
}
