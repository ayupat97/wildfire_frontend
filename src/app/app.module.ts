import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import {
  MatTableModule,
  MatPaginatorModule,MatSortModule,
  MatIconModule,
  MatFormFieldModule,
  matFormFieldAnimations,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule, 
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule,
  MatAutocompleteModule,
  MatCardModule,
  MatStepperModule,

  
} from '@angular/material';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AddInfluencerComponent } from './add-influencer/add-influencer.component';
import { UpdateInfluencerComponent } from './update-influencer/update-influencer.component';
import { AdminBrandmanagementComponent } from './admin-brandmanagement/admin-brandmanagement.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { UpdateBrandComponent } from './update-brand/update-brand.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { AdminFieldComponent } from './admin-field/admin-field.component';
import { AddfieldComponent } from './addfield/addfield.component';
import { UpdateFieldComponent } from './update-field/update-field.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { UserBrandComponent } from './user-brand/user-brand.component';
import { UserInfluComponent } from './user-influ/user-influ.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { InfluLoginComponent } from './user-login/influ-login/influ-login.component';
import { BrandLoginComponent } from './user-login/brand-login/brand-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { BrandSignupComponent } from './user-signup/brand-signup/brand-signup.component';
import { InfluSignupComponent } from './user-signup/influ-signup/influ-signup.component';
import { UserContactComponent } from './user-contact/user-contact.component';
import { InfluMenuComponent } from './influ-menu/influ-menu.component';
import { BrandMenuComponent } from './brand-menu/brand-menu.component';
import { InfluDashboardComponent } from './user-influ/influ-dashboard/influ-dashboard.component';
import { InfluProfileComponent } from './user-influ/influ-profile/influ-profile.component';
import { InfluSmComponent } from './user-influ/influ-sm/influ-sm.component';
import { InfluEarningComponent } from './user-influ/influ-earning/influ-earning.component';
import { InfluReviewComponent } from './user-influ/influ-review/influ-review.component';
import { BrandReviewComponent } from './user-brand/brand-review/brand-review.component';
import { BrandDashboardComponent } from './user-brand/brand-dashboard/brand-dashboard.component';
import { BrandProfileComponent } from './user-brand/brand-profile/brand-profile.component';
import { BrandSmComponent } from './user-brand/brand-sm/brand-sm.component';
import { BrandPaymentsComponent } from './user-brand/brand-payments/brand-payments.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddInfluencerComponent,
    UpdateInfluencerComponent,
    AdminBrandmanagementComponent,
    AddBrandComponent,
    UpdateBrandComponent,
    MenuComponent,
    HomepageComponent,
    LoginComponent,
    UpdateAdminComponent,
    AdminFieldComponent,
    AddfieldComponent,
    UpdateFieldComponent,
    AddAdminComponent,
    UserBrandComponent,
    UserInfluComponent,
    UserLoginComponent,
    InfluLoginComponent,
    BrandLoginComponent,
    UserSignupComponent,
    BrandSignupComponent,
    InfluSignupComponent,
    UserContactComponent,
    InfluMenuComponent,
    BrandMenuComponent,
    InfluDashboardComponent,
    InfluProfileComponent,
    InfluSmComponent,
    InfluEarningComponent,
    InfluReviewComponent,
    BrandReviewComponent,
    BrandDashboardComponent,
    BrandProfileComponent,
    BrandSmComponent,
    BrandPaymentsComponent,
   
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule, 
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatCardModule,
    MatStepperModule,
  ],
  entryComponents: [HomepageComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
