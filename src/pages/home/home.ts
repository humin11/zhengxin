import { Component } from '@angular/core';
import { SearchPage } from '../search/search';
import { IonicApp,NavController,MenuController  } from 'ionic-angular';
import { CompanyDetailsPage } from '../company-details/company-details';
import { CompanyServe } from "../../providers/company-serve";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[CompanyServe]
})
export class HomePage {

  constructor(private companyServe:CompanyServe,public navCtrl: NavController,private app: IonicApp) {}

  focus() {
    this.navCtrl.push(SearchPage);
  }

  ionViewWillLoad() {
    // this.companyServe.getList().subscribe(data => {
    //     this.conList = data;
    //     console.log(this.conList);
    // });
  }


  CompanyDetails() {
    this.navCtrl.push(CompanyDetailsPage);
    // this.navCtrl.push(CompanyDetailsPage).then(() => {
    //   const index = this.navCtrl.getActive().index;
    //   this.navCtrl.remove(0, index);
    // });
  }

}
