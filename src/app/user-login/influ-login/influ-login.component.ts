import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfluServiceService } from '../../services/influ-service.service';
import { influ_login } from '../../classes/influencer_class';

@Component({
  selector: 'app-influ-login',
  templateUrl: './influ-login.component.html',
  styleUrls: ['./influ-login.component.css']
})
export class InfluLoginComponent implements OnInit {

  email:string;
  password:string; 
  hide = true;
  constructor(public _route:Router,public _influser:InfluServiceService) { }

  ngOnInit() {
  }

  onlogin(){
    this._influser.login(new influ_login(this.email,this.password)).subscribe(
      (data:influ_login[])=>{
        console.log(data);
        if (data.length==1)
        {
          localStorage.setItem('email',this.email);
          this._route.navigate(['/influ_menu']);
        }
        else
        {
          alert("Invalid email_id or password");
        }
      }
      
    );
  }

}
