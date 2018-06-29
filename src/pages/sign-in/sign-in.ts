import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database'; 
import {SignInProvider} from '../../providers/sign-in/sign-in';
import { SignUpPage } from '../sign-up/sign-up';
import { ListRoomRatePage } from '../list-room-rate/list-room-rate';
import {EditProfilePage} from '../edit-profile/edit-profile';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage { 
    email:any;
    password:any;
    users= [];
    userId :any;
    constructor(public _data:SignInProvider,public afdb:AngularFireDatabase,public auth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,public alert:AlertController) {
      
      /*this.auth.authState.subscribe(users =>{
        if(users) this.userId = users.uid
      }) */
      
      this._data.getUser().then((users:any)=>{
        if(users){
          console.log(users);
            if(users.id){      
              this.navCtrl.setRoot(EditProfilePage);
           }
          this.users = users;
        } 
        
      });
  
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad SigninPage');
    }
     
    signIn(){
      
      if(this.email && this.password){
        let text_email = this.email;
        let text_pass = this.password;
        this.auth.auth.signInWithEmailAndPassword(text_email,text_pass)
        .then(userSuccess=>{ 
          this._data.setUser(userSuccess).then(callback=>{
          this.email = text_email;
          this.password =  text_pass;
        });
         
        //this.navCtrl.setRoot(EditProfilePage);
        this.navCtrl.setRoot(EditProfilePage,{username:text_email,u_pass:text_pass});
        
       }).catch(error=>{
          alert(error.message);
       });
   
     }
    }
    
    signUp(){
      this.navCtrl.setRoot(SignUpPage);
    } 


  

}
