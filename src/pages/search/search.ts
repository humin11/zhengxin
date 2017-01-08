import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompanyServe } from '../../providers/company-serve';
import { List,List_detail,Detail } from '../../models/class.model';
import { CompanyDetailsPage } from '../company-details/company-details';
import { ListDetailServe } from '../../providers/list-detail-serve';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  providers:[CompanyServe,ListDetailServe]
})
export class SearchPage {
  conList: List;
  totalCount: number;
  details:List_detail[];
  detail:Detail;
  constructor(private listDetailServe:ListDetailServe,private companyServe: CompanyServe,public navCtrl: NavController, public navParams: NavParams) {}

  ionViewWillLoad() {
    this.companyServe.getList().subscribe(data => {
        this.conList = data;
        this.totalCount = this.conList.totalCount;
        this.details = this.conList.detail;
    });
  }


  CompanyDetails(con) {
    this.listDetailServe.getListDetail(con.detail_id).subscribe(data => {
      this.detail = data;
      this.navCtrl.push(CompanyDetailsPage,{info:con,detail:this.detail});
    });
  }

}
