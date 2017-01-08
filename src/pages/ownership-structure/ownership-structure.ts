import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeclarationComponent } from '../../components/declaration/declaration';
import { Shareholder,Shareholder_info} from '../../models/class.model';
/*
  Generated class for the OwnershipStructure page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ownership-structure',
  templateUrl: 'ownership-structure.html',
  providers:[DeclarationComponent]
})
export class OwnershipStructurePage {
  shareholder : Shareholder;
  shareholderInfo : Shareholder_info[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewWillLoad() {
    console.log('ionViewDidLoad OwnershipStructurePage');
    this.shareholder = this.navParams.get('shareholder');
    this.shareholderInfo = this.shareholder.shareholder_info;
    console.log(this.shareholderInfo);
  }

}
