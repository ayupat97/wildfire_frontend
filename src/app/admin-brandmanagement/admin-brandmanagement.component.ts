import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';
import { Router } from '@angular/router';
import { brand } from "../classes/brand_class";
import { influencer } from "../classes/influencer_class"; 
import { AdminServiceService } from "../services/admin-service.service";
@Component({
  selector: 'app-admin-brandmanagement',
  templateUrl: './admin-brandmanagement.component.html',
  styleUrls: ['./admin-brandmanagement.component.css']
})
export class AdminBrandmanagementComponent implements OnInit {
  i:number;
  brand_arr:brand[]=[];
  del_arr:brand[]=[];
  displayedColumns: string[] = ['Action','name','Edit','Delete'];
  dataSource = new MatTableDataSource();
  constructor(public adminser:AdminServiceService,public _route:Router) { }
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;
  ngOnInit() {
    
    this.adminser.getallbrand().subscribe(
      (data:brand[])=>{
        console.log(data);
        this.brand_arr=data;
        this.dataSource=new MatTableDataSource(this.brand_arr);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      }
    )
  }
  onadd(){
    this._route.navigate(['/menu/add_brand']);
  }
  onupdate(item:brand){
    this._route.navigate(['/menu/update_brand',item.brandId]);
  }
  ondelete(item:brand)
  {
  this.adminser.delbrand(item).subscribe(
    (data:any)=>{
      console.log(data);
      this.brand_arr.splice(this.brand_arr.indexOf(item),1);
      this._route.navigate(['/menu/admin_brand']);
      this.dataSource=new MatTableDataSource(this.brand_arr);

      }
    );
  }
  oncheckchange(element:brand){
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
    this.adminser.delmultiplebrand(this.del_arr).subscribe(
      (data:any)=>{
        for(this.i=0;this.i<this.del_arr.length;this.i++){
          if(this.brand_arr.find(x=>x==this.del_arr[this.i]))
          {
            this.brand_arr.splice(this.brand_arr.indexOf(this.del_arr[this.i]),1);
          }
        }
        this._route.navigate(['/menu/admin_brand']);
        this.dataSource=new MatTableDataSource(this.brand_arr);

      }
    )
  }
 
}
