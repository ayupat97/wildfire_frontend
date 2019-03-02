import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from "./homepage/homepage.component";
import { MenuComponent } from "./menu/menu.component";
import { AdminComponent } from "./admin/admin.component";
import { AddInfluencerComponent } from "./add-influencer/add-influencer.component";
import { UpdateInfluencerComponent } from "./update-influencer/update-influencer.component";
import { AdminBrandmanagementComponent } from "./admin-brandmanagement/admin-brandmanagement.component";
import { AddBrandComponent } from "./add-brand/add-brand.component";
import { UpdateBrandComponent } from "./update-brand/update-brand.component";
import { LoginComponent } from "./login/login.component";
import { AddAdminComponent } from "./add-admin/add-admin.component";
import { UpdateAdminComponent } from "./update-admin/update-admin.component";
import { AdminFieldComponent } from "./admin-field/admin-field.component";
import { AddfieldComponent } from "./addfield/addfield.component";
import { UpdateFieldComponent } from "./update-field/update-field.component";
import { UserLoginComponent } from './user-login/user-login.component';
import { BrandLoginComponent } from './user-login/brand-login/brand-login.component';
import { InfluLoginComponent } from './user-login/influ-login/influ-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { BrandSignupComponent } from './user-signup/brand-signup/brand-signup.component';
import { InfluSignupComponent } from './user-signup/influ-signup/influ-signup.component';
import { UserBrandComponent } from './user-brand/user-brand.component';
import { UserInfluComponent } from './user-influ/user-influ.component';
import { UserContactComponent } from './user-contact/user-contact.component';
import { InfluMenuComponent } from "./influ-menu/influ-menu.component";
import { BrandMenuComponent } from './brand-menu/brand-menu.component';
import { InfluDashboardComponent } from './user-influ/influ-dashboard/influ-dashboard.component';
import { InfluProfileComponent } from './user-influ/influ-profile/influ-profile.component';
import { InfluSmComponent } from './user-influ/influ-sm/influ-sm.component';
import { InfluEarningComponent } from './user-influ/influ-earning/influ-earning.component';
import { InfluReviewComponent } from './user-influ/influ-review/influ-review.component';
import { BrandDashboardComponent } from './user-brand/brand-dashboard/brand-dashboard.component';
import { BrandProfileComponent } from './user-brand/brand-profile/brand-profile.component';
import { BrandSmComponent } from './user-brand/brand-sm/brand-sm.component';
import { BrandPaymentsComponent } from './user-brand/brand-payments/brand-payments.component';
import { BrandReviewComponent } from './user-brand/brand-review/brand-review.component';

const routes: Routes = [

    
    {path:'',component:HomepageComponent},
    {path:'login',component:UserLoginComponent},
    {path:'brand_login',component:BrandLoginComponent},
    {path:'influ_login',component:InfluLoginComponent},
    {path:'admin_login',component:LoginComponent},
    {path:'signup',component:UserSignupComponent},
    {path:'brand_signup',component:BrandSignupComponent},
    {path:'influ_signup',component:InfluSignupComponent},
    {path:'brand',component:UserBrandComponent},
    {path:'influ',component:UserInfluComponent},
    {path:'contact',component:UserContactComponent},
    {path:'influ_menu',component:InfluMenuComponent,children:[
      {path:'influ_dashboard',component:InfluDashboardComponent},
      {path:'influ_profile',component:InfluProfileComponent},
      {path:'influ_sm',component:InfluSmComponent},
      {path:'influ_earnings',component:InfluEarningComponent},
      {path:'influ_review',component:InfluReviewComponent},
    ]},
    {path:'brand_menu',component:BrandMenuComponent,children:[
      {path:'brand_dashboard',component:BrandDashboardComponent},
      {path:'brand_profile',component:BrandProfileComponent},
      {path:'brand_sm',component:BrandSmComponent},
      {path:'brand_payments',component:BrandPaymentsComponent},
      {path:'brand_review',component:BrandReviewComponent},
    ]},
    
    {path:'menu',component:MenuComponent,children:[
      {path:'add_admin',component:AddAdminComponent},
      {path:'admin_profile',component:UpdateAdminComponent},
      {path:'admin_influ',component:AdminComponent},
      {path:'add_influ',component:AddInfluencerComponent},
      {path:'update_influ/:influId',component:UpdateInfluencerComponent},
      {path:'admin_brand',component:AdminBrandmanagementComponent},
      {path:'add_brand',component:AddBrandComponent},
      {path:'update_brand/:brandId',component:UpdateBrandComponent},
      {path:'admin_field',component:AdminFieldComponent},
      {path:'add_field',component:AddfieldComponent},
      {path:'update_field/:f_id',component:UpdateFieldComponent}
    ]},
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
