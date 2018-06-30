import { Component,ViewChild } from '@angular/core';
import { Platform,NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignInPage} from '../pages/sign-in/sign-in';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';

import { SignInProvider } from '../providers/sign-in/sign-in';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav:NavController;
  rootPage:any; // first page

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,_user:SignInProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

     
      _user.getUser().then(user=>{
        if(user){
           // if already user login
          this.nav.setRoot(EditProfilePage,{id:user.uid,username:user.email});
        }else{
           // if not authen
          this.rootPage = SignInPage;
        }
      });
    });
  }
}

