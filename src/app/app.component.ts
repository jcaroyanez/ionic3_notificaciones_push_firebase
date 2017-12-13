import { Component } from '@angular/core';
import { Platform,AlertController, } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {

  rootPage:any = HomePage;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              public push:Push,
              public alertCtrl:AlertController) {

    platform.ready().then(() => {
  
      statusBar.styleDefault();
      splashScreen.hide();

      
    });

    
  }

}

