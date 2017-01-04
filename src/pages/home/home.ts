import { Component } from '@angular/core';
import { SearchPage } from '../search/search';
import { IonicApp, App,NavController,MenuController  } from 'ionic-angular';
import { CompanyDetailsPage } from '../company-details/company-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private menu: MenuController,private app: IonicApp) {
    menu.enable(true);
  }

  focus() {
    this.navCtrl.push(SearchPage);
  }


  CompanyDetails() {
    this.navCtrl.push(CompanyDetailsPage)
    // this.navCtrl.push(CompanyDetailsPage).then(() => {
    //   const index = this.navCtrl.getActive().index;
    //   this.navCtrl.remove(0, index);
    // });
  }

}
