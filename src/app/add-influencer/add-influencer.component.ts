import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AdminServiceService } from "../services/admin-service.service";
import { influencer } from "../classes/influencer_class";
import { field } from "../classes/field_class";
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map,startWith} from 'rxjs/operators';

@Component({
  selector: 'app-add-influencer',
  templateUrl: './add-influencer.component.html',
  styleUrls: ['./add-influencer.component.css']
})
export class AddInfluencerComponent implements OnInit {
influId:number;
name:string;
profilePic:string;
birthDate:Date;
gender:string="male";
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
field_arr:string[]=[];
hide = true;

myControl = new FormControl();
options: string[] = ['Student','Part-Time Employee','Full-Time Employee','Housewife','Retired','Others'];
filteredOptions: Observable<string[]>;
constructor(public adminser:AdminServiceService, public _route:Router) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    this.adminser.getallfield().subscribe(
      (data:any)=>{
        this.field_arr=data;
        console.log(data);
      }
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  onaddinflu(){
    this.adminser.addinfluencer(new influencer(this.name,this.profilePic,this.birthDate,this.gender,this.mobile,this.email,this.uname,this.password,this.field1,this.field2,this.field3,this.fbLink,this.instaLink,this.twitterLink,this.fbReach,this.instaReach,this.twitterReach,this.fees,this.bio,this.profession)).subscribe(
      (data:influencer)=>{
        console.log(data);
        this._route.navigate(['/menu/admin_influ']);
      }
    )
  }
  oncancel(){
    this._route.navigate(['/menu/admin_influ']);
  }

}
