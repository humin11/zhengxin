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

  constructor(public http: Http,public navCtrl: NavController,private menu: MenuController,private app: IonicApp, private newsService: NewsService, private companyService: CompanyService) {
    menu.enable(true);
    // this.http.get('json/business/12d61309e7361b3e3d2f49e9dd31b937_business.json').map(res => res.json()).subscribe(data => {
    //     console.log(data);
    // });
    this.newsService.getAll().subscribe(news => this.news = news);
    this.companyService.getHot().subscribe(companies => this._hot_companies = companies );
  }

  focus() {
    this.navCtrl.push(SearchPage);
  }

  ionViewWillLoad() {
    // this.companyServe.getList().subscribe(data => {
    //     this.conList = data;
    //     console.log(this.conList);
    // });
  }

}
