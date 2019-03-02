import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private url = "http://localhost:3000/"
  constructor(private http: HttpClient) { }

  addCampaign(data) {
    return this.http.post(this.url, data);
  }
}
