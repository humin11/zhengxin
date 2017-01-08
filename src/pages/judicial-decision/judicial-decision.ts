import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeclarationComponent } from '../../components/declaration/declaration';
import { Sentence,Sentence_detail } from '../../models/class.model';

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

  sentence:Sentence;
  sentenceDetail:Sentence_detail[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewWillLoad() {
    this.sentence = this.navParams.get("sentence");
    this.sentenceDetail = this.sentence.sentence_detail;
  }

}
