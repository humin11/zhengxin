import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeclarationComponent } from '../../components/declaration/declaration';


/*
  Generated class for the AnnualReport page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-annual-report',
  templateUrl: 'annual-report.html',
  providers: [DeclarationComponent]
})
export class AnnualReportPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnualReportPage');
  }

}
