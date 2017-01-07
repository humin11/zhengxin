import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeclarationComponent } from '../../components/declaration/declaration';
import { Detail} from '../../models/class.model';
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

  detail : Detail;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewWillLoad() {
    console.log('ionViewDidLoad BusinessInformationPage');
    this.detail = this.navParams.get('detail');
  }

}
