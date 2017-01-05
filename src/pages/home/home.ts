import { Component } from '@angular/core';
import { SearchPage } from '../search/search';
import { IonicApp,NavController,MenuController  } from 'ionic-angular';
import { CompanyDetailsPage } from '../company-details/company-details';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public http: Http,public navCtrl: NavController,private menu: MenuController,private app: IonicApp) {
    menu.enable(true);
    // this.http.get('json/business/12d61309e7361b3e3d2f49e9dd31b937_business.json').map(res => res.json()).subscribe(data => {
    //     console.log(data);
    // });
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
