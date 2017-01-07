import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompanyServe } from '../../providers/company-serve';
import { List,List_detail } from '../../models/class.model';
import { CompanyDetailsPage } from '../company-details/company-details';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  providers:[CompanyServe]
})
export class SearchPage {
  conList: List;
  totalCount: number;
  detail:List_detail[];
  constructor(private companyServe: CompanyServe,public navCtrl: NavController, public navParams: NavParams) {}

  ionViewWillLoad() {
    this.companyServe.getList().subscribe(data => {
        this.conList = data;
        this.totalCount = this.conList.totalCount;
        this.detail = this.conList.detail;
        console.log(this.conList);
    });
  }

  CompanyDetails(con) {
    this.navCtrl.push(CompanyDetailsPage,{cons : con});
    // this.navCtrl.push(CompanyDetailsPage).then(() => {
    //   const index = this.navCtrl.getActive().index;
    //   this.navCtrl.remove(0, index);
    // });
  }

}
