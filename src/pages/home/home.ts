import { Component } from '@angular/core';
import { SearchPage } from '../search/search';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  focus() {
    this.navCtrl.push(SearchPage);
  }


}
