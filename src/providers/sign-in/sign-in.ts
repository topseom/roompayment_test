import { Injectable } from '@angular/core';
import {IonicStorageModule} from '@ionic/storage';
import { Storage } from '@ionic/storage/dist/storage';

/*
  Generated class for the SignInProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class SignInProvider {
  //public http: HttpClient
  constructor(public storage:Storage) {
    console.log('Hello SignInProvider Provider');
  }
  setUser(data){
    // callback when save wait clear to continious to other function
    return new Promise((resolve,reject)=>{
      this.storage.set("users",JSON.stringify(data)).then(callback=>{

        resolve(true);
      })

    });
   // this.storage.set("","");
  }
  getUser(){ // get
    return new Promise((resolve,reject)=>{
      this.storage.get("users").then(data=>{

        resolve(JSON.parse(data));
      });
    });
  }

}
