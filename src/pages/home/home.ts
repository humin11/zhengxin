import { Component } from '@angular/core';
import { SearchPage } from '../search/search';
import { IonicApp,NavController,MenuController  } from 'ionic-angular';
import { CompanyDetailsPage } from '../company-details/company-details';
import { News } from '../../models/news';
import { Company } from '../../models/company';
import { NewsService } from '../../providers/news';
import { Http } from '@angular/http';
import { NewsSinglePage } from '../news-single/news-single';
import { CompanyService } from '../../providers/companies';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public news: News[] = [];
  public newsSinglePage: any = NewsSinglePage;
  public newsSingleParams: any;
  public _hot_companies: Company[] = [];
  public companyDetailsPage: any = CompanyDetailsPage;

  constructor(public navCtrl: NavController, private menu: MenuController, private app: IonicApp, private newsService: NewsService, private companyService: CompanyService) {
    menu.enable(true);
    this.newsService.getAll().subscribe(news => this.news = news);
    this.companyService.getHot().subscribe(companies => this._hot_companies = companies );
  }

  focus() {
    this.navCtrl.push(SearchPage);
  }

  ionViewWillLoad() {
  }

}
