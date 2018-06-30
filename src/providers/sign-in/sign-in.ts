import { Injectable } from '@angular/core';
import  {Storage } from '@ionic/storage';

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
    return new Promise<any>((resolve,reject)=>{
      this.storage.set("users",JSON.stringify(data)).then(callback=>{

        resolve(true);
      })

    });
   // this.storage.set("","");
  }
  getUser(){ // get
    return new Promise<any>((resolve,reject)=>{
      this.storage.get("users").then(data=>{

        resolve(JSON.parse(data));
      });
    });
  }

  removeUser(){
    return new Promise<any>((resolve,reject)=>{
      this.storage.remove("users").then(success=>{
        resolve(true);
      }).catch(err=>{
        reject(err);
      });
    });
  }

}
