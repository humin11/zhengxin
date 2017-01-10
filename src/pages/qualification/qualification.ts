import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CerInfo,Cert_detail } from '../../models/class.model';
/*
  Generated class for the Qualification page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-qualification',
  templateUrl: 'qualification.html'
})
export class QualificationPage {
  cerInfo : CerInfo;
  cert_detail : Cert_detail[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewWillLoad() {
    console.log('ionViewDidLoad QualificationPage');
    this.cerInfo = this.navParams.get('qualification');
    this.cert_detail = this.cerInfo.cert_detail;
    console.log(this.cerInfo);
  }

}
