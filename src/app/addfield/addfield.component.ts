import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AdminServiceService } from "../services/admin-service.service";
import { field } from "../classes/field_class";
import { isNgTemplate } from '@angular/compiler';


@Component({
  selector: 'app-addfield',
  templateUrl: './addfield.component.html',
  styleUrls: ['./addfield.component.css']
})
export class AddfieldComponent implements OnInit {
f_id:number;
f_name:string;
image:string;
selectedfile:File=null;

  constructor(public adminser:AdminServiceService, public _route:Router) { }

  ngOnInit() {
  }
  onaddfield(){
    const fd=new FormData();
    fd.append('f_id',this.f_id.toString());
    fd.append('f_name',this.f_name);
    fd.append('image',this.selectedfile,this.selectedfile.name);
  this.adminser.addfield(fd).subscribe(
    (data:any)=>{
      console.log(data);
      this._route.navigate(['/menu/admin_field'])
    }
  );
  
}
onChange(value)
  {
    this.selectedfile=<File>value.target.files[0];
  }
  oncancel(){
    this._route.navigate(['/menu/admin_field'])
  }


}
 