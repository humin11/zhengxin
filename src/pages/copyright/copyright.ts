import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeclarationComponent } from '../../components/declaration/declaration';
import { Copy_right_detail,CopyRightInfo} from '../../models/class.model';

/*
  Generated class for the Copyright page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-copyright',
  templateUrl: 'copyright.html',
  providers:[DeclarationComponent]
})
export class CopyrightPage {

  copyRightInfo:CopyRightInfo;
  copyRightDetail:Copy_right_detail[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewWillLoad() {
    this.copyRightInfo = this.navParams.get('copyRightInfo');
    this.copyRightDetail = this.copyRightInfo.copy_right_detail;
    console.log(this.copyRightDetail);
  }

}
