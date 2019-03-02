import { Component, OnInit } from '@angular/core';
import { field } from "../classes/field_class";
import { AdminServiceService } from "../services/admin-service.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-update-field',
  templateUrl: './update-field.component.html',
  styleUrls: ['./update-field.component.css']
})
export class UpdateFieldComponent implements OnInit {
id:number;
f_id:number;
f_name:string;
image:string;
  constructor(public adminser:AdminServiceService,public _route:Router,public aroute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.aroute.snapshot.params['f_id'];
    this.adminser.getfieldbyid(this.id).subscribe(
      (data:field)=>{
        this.f_id=data[0].f_id;
        this.f_name=data[0].f_name;
        this.image=data[0].image;
        console.log(data);
      }
    )
  }

  onupdate(item:field){
    this.adminser.updatefield(new field(this.f_name,this.image),this.f_id).subscribe(
      (data:any)=>{
        console.log(data);
        this._route.navigate(['/menu/admin_field']);
      }
    )
  }
  oncancel(){
    this._route.navigate(['/menu/admin_field']);
  }


}
 