import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeclarationComponent } from '../../components/declaration/declaration';
import { PatentInfo,Patent_detail } from '../../models/class.model';

/*
  Generated class for the PatentInformation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-patent-information',
  templateUrl: 'patent-information.html',
  providers: [DeclarationComponent]
})
export class PatentInformationPage {

  patentInfo:PatentInfo;
  patentDetail:Patent_detail[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewWillLoad() {
    this.patentInfo = this.navParams.get('patentInfo');
    this.patentDetail = this.patentInfo.patent_detail;
  }

}
