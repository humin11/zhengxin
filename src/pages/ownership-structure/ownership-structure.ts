import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeclarationComponent } from '../../components/declaration/declaration';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OwnershipStructurePage');
  }

}
