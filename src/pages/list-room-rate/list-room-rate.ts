import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {SignInProvider} from '../../providers/sign-in/sign-in';
import{ SignInPage} from '../../pages/sign-in/sign-in';

/**
 * Generated class for the ListRoomRatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-list-room-rate',
  templateUrl: 'list-room-rate.html',
})
export class ListRoomRatePage {
  message:any;
  messages =[];
  username:any;
  u_pass:any;
  users= [];

  constructor(public _data:SignInProvider,public afdb:AngularFireDatabase,public auth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  
    this.username = this.navParams.get("username");
    this.u_pass = this.navParams.get("u_pass");
     
    /*this.afdb.list("lists").snapshotChanges().map(change=>{
      return change.map(item=>{
         return {
           key:item.payload.key,
           ...item.payload.val()
         }
      });
    }).subscribe(data=>{
       this.messages = data;
       console.log(data);
    });*/
      

  }

  logout(){
    this._data.setUser(this.users).then(callback=>{
      this.username ="";
      this.u_pass ="";
    });
    this.navCtrl.setRoot(SignInPage);
      
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ListRoomRatePage');
  }

}
