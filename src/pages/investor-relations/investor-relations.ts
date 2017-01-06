import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeclarationComponent } from '../../components/declaration/declaration';
import { Investment,Investment_info} from '../../models/class.model';
/*
  Generated class for the InvestorRelations page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-investor-relations',
  templateUrl: 'investor-relations.html',
  providers: [DeclarationComponent]
})
export class InvestorRelationsPage {
  investment : Investment;
  investmentInfo : Investment_info[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewWillLoad() {
    console.log('ionViewDidLoad InvestorRelationsPage');
    this.investment = this.navParams.get('investment');
    this.investmentInfo = this.investment.investment;
  }

}
