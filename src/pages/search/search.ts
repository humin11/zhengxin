import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { List,Detail } from '../../models/class.model';
import { Company } from '../../models/company';
import { CompanyDetailsPage } from '../company-details/company-details';
import { CompanyService } from '../../providers/companies';
import { ListDetailServe } from '../../providers/list-detail-serve';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  public companies: Company[];
  totalCount: number;
  details: Company[];
  detail:Detail;
  public companyDetailsPage: any = CompanyDetailsPage;

  constructor(private listDetailServe:ListDetailServe,private companyService: CompanyService,public navCtrl: NavController, public navParams: NavParams) {}

  ionViewWillLoad() {
    this.companyService.getAll().subscribe(data => {
        this.companies = data;
        this.totalCount = this.companies.length;
    });
  }


  CompanyDetails(con) {
    this.listDetailServe.getListDetail(con.detail_id).subscribe(data => {
      this.detail = data;
      this.navCtrl.push(CompanyDetailsPage,{info:con,detail:this.detail});
    });
  }

}
