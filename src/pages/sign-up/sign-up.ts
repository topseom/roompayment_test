import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SignInPage} from '../sign-in/sign-in';
import { AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  email:any;
  password:any;
  re_password:any;
  username:any;
  uid:any;
 
  constructor(public afdb:AngularFireDatabase,public auth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
     
  }
  
  goBack(){
    this.navCtrl.setRoot(SignInPage);
  }
  
  signUp(){
    if(this.email && this.password && this.re_password ){
      let text_email = this.email;
      let text_pass = this.password;  
      this.auth.auth.createUserWithEmailAndPassword(text_email,text_pass) 

      this.afdb.list("user").push({
        username:this.email ,
       // uid:this.auth.auth.currentUser.uid
      }).then(success=>{ 
        this.navCtrl.setRoot(SignInPage);
 
      });
      
    }
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

}
