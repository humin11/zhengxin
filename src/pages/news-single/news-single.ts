import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { News } from '../../models/news';

/*
  Generated class for the NewsSingle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-news-single',
  templateUrl: 'news-single.html'
})
export class NewsSinglePage {
  public news: News;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.news = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsSinglePage');
  }

}
