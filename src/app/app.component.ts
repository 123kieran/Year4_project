import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';


import { LogIn } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = LogIn; // Want the app to start on the login page
  constructor(public platform: Platform) {
    this.initializeApp();
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Platform initialised, status bar (signal/carrier/notifs etc? that bar?) currently set to default style of platform, no splashscreen at the moment
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

}
