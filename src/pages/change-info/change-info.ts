import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChangeInfo,Change_detail} from '../../models/class.model';
/*
  Generated class for the ChangeInfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-change-info',
  templateUrl: 'change-info.html'
})
export class ChangeInfoPage {

  changeInfo : ChangeInfo;
  details : Change_detail[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewWillLoad() {
    console.log('ionViewDidLoad ChangeInfoPage');
    this.changeInfo = this.navParams.get('changeInfo');
    this.details = this.changeInfo.change_detail;
  }

}
