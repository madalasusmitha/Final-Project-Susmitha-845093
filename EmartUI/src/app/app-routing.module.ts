import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLandingPageComponent } from './Admin/admin-landing-page/admin-landing-page.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { DailyReportsComponent } from './Admin/daily-reports/daily-reports.component';
import { BuyerLandingPageComponent } from './Buyer/buyer-landing-page/buyer-landing-page.component';
import { BuyProductComponent } from './Buyer/buy-product/buy-product.component';
import { SearchingComponent } from './Buyer/searching/searching.component';
import { BuyerViewProfileComponent } from './Buyer/buyer-view-profile/buyer-view-profile.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { SellerLandingPageComponent } from './Seller/seller-landing-page/seller-landing-page.component';
import { AddItemComponent } from './Seller/add-item/add-item.component';
import { ViewItemComponent } from './Seller/view-item/view-item.component';
import { SellerViewProfileComponent } from './Seller/seller-view-profile/seller-view-profile.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import { RegisterBuyerComponent } from './Account/register-buyer/register-buyer.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { LoginComponent } from './Account/login/login.component';
import { ViewcartComponent } from './Buyer/viewcart/viewcart.component';
import { HomeComponent } from './Account/home/home.component';


const routes: Routes = [{path:'Adminlandingpage',component:AdminLandingPageComponent
,children:[
{path:'AddCategory',component:AddCategoryComponent},
{path:'AddSubCategory',component:AddSubCategoryComponent},
{path:'blockunblockseller',component:BlockUnblockSellerComponent},
{path:'blockunblockbuyer',component:BlockUnblockBuyerComponent},
{path:'dailyreports',component:DailyReportsComponent}
]},

{path:'Buyerlandingpage',component:BuyerLandingPageComponent
,children:[
{path:'Buyproduct',component:BuyProductComponent},
{path:'serach',component:SearchingComponent},
{path:'purchasehistory',component:PurchaseHistoryComponent},
{path:'viewcart',component:ViewcartComponent},
{path:'buyerviewprofile',component:BuyerViewProfileComponent}
]},
{path:'sellerlandingpage',component:SellerLandingPageComponent
,children:[
{path:'Additem',component:AddItemComponent},
{path:'Viewitems',component:ViewItemComponent},
{path:'sellerviewprofile',component:SellerViewProfileComponent},
{path:'viewreports',component:ViewReportsComponent}

]},

{path:'Home',component:HomeComponent,children:[

{path:'Login',component:LoginComponent},
{path:'RegisterBuyer',component:RegisterBuyerComponent},
{path:'RegisterSeller',component:RegisterSellerComponent}

]},
{path:'',redirectTo:'Login',pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
