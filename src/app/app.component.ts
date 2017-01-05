import { Component,ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import {Storage} from '@ionic/storage';

import { RegisterPage } from '../pages/register/register';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  public rootPage:any;

  constructor(platform: Platform, private storage: Storage) {
    this.rootPage = TabsPage;

    //storage.get("zhengxin-username").then(() => this.rootPage = TabsPage );

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(key) {
    // if(key=="account"){
    //   this.nav.push(LoginPage);
    // }else if(key=="setting"){
    //   this.nav.setRoot(RegisterPage);
    // }
    this.nav.setRoot(LoginPage);
    console.log(key);
  }
}
