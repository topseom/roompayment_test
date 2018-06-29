import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {SignInProvider} from '../../providers/sign-in/sign-in';
import{ SignInPage} from '../../pages/sign-in/sign-in';
import { Storage } from '@ionic/storage';
import {ListRoomRatePage} from '../../pages/list-room-rate/list-room-rate';
import firebase from "firebase";

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
 
  password:any;
  username:any;
  profile = [];
  currentUser:any;
  first_name:any;
  constructor(public storage: Storage,public _data:SignInProvider,public afdb:AngularFireDatabase,public auth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
     
    this.currentUser = this.auth.auth.currentUser.uid;
    this.username = this.navParams.get("username");  
    //console.log(this.username );
    this.afdb.list(`profile/${this.currentUser}`).snapshotChanges().map(change=>{
      return change.map(item=>{
         return {
           key:item.payload.key,
           ...item.payload.val()
         }
      });
    }).subscribe(data=>{
      this.profile = data[0];
      //console.log(this.profile);
    });
     
  }

  createProfile(){ 
      this.auth.authState.take(1).subscribe(users =>{
        this.afdb.list(`profile/${users.uid}`).push( this.profile )  
        .then(success=>{  alert('Success!');
        this.navCtrl.setRoot(ListRoomRatePage); 
        });
      }) 
   }

  EditProfile(key,val){  
   
    //console.log(this.profile);
    //console.log(this.profile['first_name']);
    
    this.afdb.database.ref().child(`profile/${this.currentUser}/${this.profile['key']}`).update(this.profile)
      
      .then(success=>{
        alert('Success!');
      }).catch(error=>{
        alert(error.message);
     });  
  }
 
  logout(){
 
    this.auth.auth.signOut()
    .then(callback=>{
      this.username ="";
      this.password ="";
    });  
    
    this.navCtrl.setRoot(SignInPage); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

}
