import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeclarationComponent } from '../../components/declaration/declaration'

/*
  Generated class for the JudicialDecision page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-judicial-decision',
  templateUrl: 'judicial-decision.html',
  providers:[DeclarationComponent]
})
export class JudicialDecisionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad JudicialDecisionPage');
  }

}
