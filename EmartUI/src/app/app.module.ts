import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerLandingPageComponent } from './Buyer/buyer-landing-page/buyer-landing-page.component';
import { SearchingComponent } from './Buyer/searching/searching.component';
import { BuyProductComponent } from './Buyer/buy-product/buy-product.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { AddItemComponent } from './Seller/add-item/add-item.component';
import { SellerLandingPageComponent } from './Seller/seller-landing-page/seller-landing-page.component';
import { ViewItemComponent } from './Seller/view-item/view-item.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import { SellerViewProfileComponent } from './Seller/seller-view-profile/seller-view-profile.component';
import { BuyerViewProfileComponent } from './Buyer/buyer-view-profile/buyer-view-profile.component';
import { AdminLandingPageComponent } from './Admin/admin-landing-page/admin-landing-page.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { DailyReportsComponent } from './Admin/daily-reports/daily-reports.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterBuyerComponent } from './Account/register-buyer/register-buyer.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { ViewcartComponent } from './Buyer/viewcart/viewcart.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './Account/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    BuyerLandingPageComponent,
    SearchingComponent,
    BuyProductComponent,
    PurchaseHistoryComponent,
    AddItemComponent,
    SellerLandingPageComponent,
    ViewItemComponent,
    ViewReportsComponent,
    SellerViewProfileComponent,
    BuyerViewProfileComponent,
    AdminLandingPageComponent,
    BlockUnblockBuyerComponent,
    BlockUnblockSellerComponent,
    AddCategoryComponent,
    AddSubCategoryComponent,
    DailyReportsComponent,
    LoginComponent,
    RegisterBuyerComponent,
    RegisterSellerComponent,
    ViewcartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
