import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';
import { Router } from '@angular/router';
import { field } from "../classes/field_class";
import { AdminServiceService } from "../services/admin-service.service";

@Component({
  selector: 'app-admin-field',
  templateUrl: './admin-field.component.html',
  styleUrls: ['./admin-field.component.css']
})
export class AdminFieldComponent implements OnInit {
  i:number;
  field_arr:field[]=[];
  del_arr:field[]=[];
  displayedColumns: string[] = ['Action','f_name','image','Edit','Delete'];
  dataSource = new MatTableDataSource();
  constructor(public adminser:AdminServiceService,public _route:Router) { }
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  ngOnInit() {
    
    this.adminser.getallfield().subscribe(
      (data:field[])=>{
        console.log(data);
        this.field_arr=data;
        this.dataSource=new MatTableDataSource(this.field_arr);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      }
    )
  }
  onadd(){
    this._route.navigate(['/menu/add_field']);
  }
  onupdate(item:field){
    this._route.navigate(['/menu/update_field',item.f_id]);
  }
  ondelete(item:field)
  {
  this.adminser.delfield(item).subscribe(
    (data:any)=>{
      console.log(data);
      this.field_arr.splice(this.field_arr.indexOf(item),1);
      this._route.navigate(['/menu/admin_field']);
      this.dataSource=new MatTableDataSource(this.field_arr);

      }
    );
  }
  oncheckchange(element:field){
    if(this.del_arr.find(x => x==element)){
      this.del_arr.splice(this.del_arr.indexOf(element),1);
    }
    else 
    {
      this.del_arr.push(element);
    }
  }
  ondelall()
  {
    this.adminser.delmultiplefield(this.del_arr).subscribe(
      (data:any)=>{
        for(this.i=0;this.i<this.del_arr.length;this.i++){
          if(this.field_arr.find(x=>x==this.del_arr[this.i]))
          {
            this.field_arr.splice(this.field_arr.indexOf(this.del_arr[this.i]),1);
          }
        }
        this._route.navigate(['/menu/admin_field']);
        this.dataSource=new MatTableDataSource(this.field_arr);

      }
    )
  }
}
