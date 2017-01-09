import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeclarationComponent } from '../../components/declaration/declaration';

import { Detail,Business } from '../../models/class.model';
/*
  Generated class for the BusinessInformation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-business-information',
  templateUrl: 'business-information.html',
  providers: [DeclarationComponent]
})
export class BusinessInformationPage {

  detail: Detail;
  business: Business;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewWillLoad() {
    this.business = this.navParams.get('business');
    this.detail = this.business.business_info;
  }

}
