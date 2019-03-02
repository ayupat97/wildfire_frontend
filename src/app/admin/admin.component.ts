import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';
import { Router } from '@angular/router';
import { brand } from "../classes/brand_class";
import { influencer } from "../classes/influencer_class";
import { AdminServiceService } from "../services/admin-service.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
i:number;
influ_arr:influencer[]=[];
del_arr:influencer[]=[];
displayedColumns: string[] = ['Action','name','Edit','Delete'];
dataSource = new MatTableDataSource();
@ViewChild(MatPaginator) paginator:MatPaginator;
@ViewChild(MatSort) sort:MatSort;
  constructor(public adminser:AdminServiceService,public _route:Router) { }

  ngOnInit() {
   
    this.adminser.getallinflu().subscribe(
      (data:influencer[])=>{
        console.log(data);
        this.influ_arr=data;
        this.dataSource=new MatTableDataSource(this.influ_arr);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      }
    )
  }

  onadd(){
    this._route.navigate(['/menu/add_influ']);
  }
  onupdate(item:influencer){
    this._route.navigate(['/menu/update_influ',item.influId]); 
  }
  ondelete(item:influencer)
  {
  this.adminser.delinflu(item).subscribe(
    (data:any)=>{
      console.log(data);
      this.influ_arr.splice(this.influ_arr.indexOf(item),1)
      this._route.navigate(['/menu/admin_influ']);
      this.dataSource=new MatTableDataSource(this.influ_arr);

      }
    );
  }
  oncheckchange(element:influencer){
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
    this.adminser.delmultipleinflu(this.del_arr).subscribe(
      (data:any)=>{
        for(this.i=0;this.i<this.del_arr.length;this.i++){
          if(this.influ_arr.find(x=>x==this.del_arr[this.i]))
          {
            this.influ_arr.splice(this.influ_arr.indexOf(this.del_arr[this.i]),1);
          }
        }
        this._route.navigate(['/menu/admin_influ']);
        this.dataSource=new MatTableDataSource(this.influ_arr);
      }
    )
  }

}
