import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import 'rxjs/add/operator/take';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {IonicStorageModule} from '@ionic/storage'; // user storage
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { SignInPage } from '../pages/sign-in/sign-in';
import { SignInProvider } from '../providers/sign-in/sign-in';
import { SignUpPage } from '../pages/sign-up/sign-up';
import {ListRoomRatePage} from '../pages/list-room-rate/list-room-rate';
import {EditProfilePage} from '../pages/edit-profile/edit-profile';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignInPage,
    SignUpPage,
    ListRoomRatePage,
    EditProfilePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(), // use for storage all project
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBMomnIbJ0iMeb2_QFkCSYSril3Igs3evI",
    authDomain: "roompayment-ee972.firebaseapp.com",
    databaseURL: "https://roompayment-ee972.firebaseio.com",
    projectId: "roompayment-ee972",
    storageBucket: "roompayment-ee972.appspot.com",
    messagingSenderId: "988473680842" 
  }),
  ], 
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignInPage,
    SignUpPage,
    ListRoomRatePage,
    EditProfilePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SignInProvider
  ]
})
export class AppModule {}
