import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-landing-page',
  templateUrl: './seller-landing-page.component.html',
  styleUrls: ['./seller-landing-page.component.css']
})
export class SellerLandingPageComponent implements OnInit {

  constructor(private route:Router) {
    if(localStorage.getItem('seller'))
    {

    }
    else{
      this.route.navigateByUrl('/Home/Login')
    }
   }

  ngOnInit() {
  }
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('/Home/Login')
  }
}
