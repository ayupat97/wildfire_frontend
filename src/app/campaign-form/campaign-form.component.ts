import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CampaignService } from './../services/campaign.service';

@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.css']
})
export class CampaignFormComponent implements OnInit {

  public formGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private campaignService: CampaignService  
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      title: ['',Validators.required],
      startDate: ['',Validators.required],
      endDate: ['',Validators.required],
      description: ['',Validators.required],
      influencerRequired: [0,Validators.required],
      reach: [0,Validators.required],
      rating: [0,Validators.required],
      payment: [0,Validators.required],
      dueDate: ['',Validators.required],
    });
  }

  save() {
    console.log(this.formGroup.value);
    this.campaignService.addCampaign(this.formGroup.value)
      .subscribe(
        (data) => {
          if(data) {
            console.log("Success");
          }
        },
        err => {
          console.log("Error")
        }
      );
  }
}
