import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import {Storage} from '@ionic/storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
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
}
