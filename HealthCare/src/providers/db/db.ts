import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';
import * as firebase from 'firebase/app';

/*
  Generated class for the DbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbProvider {

  constructor(public afdb: AngularFireDatabase, public afAuth:AngularFireAuth,public alertCtrl: AlertController) {
    console.log('Hello DbProvider Provider');
  }
  addUserToDB(newaccount){
    this.afdb.list('/patients/').push(newaccount);
  }

  //gets
  getdoctor() { return this.afdb.list('/Doctor/'); }
  getpatient(){return this.afdb.list('/patients/');}
  getHealthEducation(){return this.afdb.list('/HealthEducation/');}

  AddHealthEducation(items){
    this.afdb.list('/HealthEducation/').push(items)        
    .then( () => {
      let alert = this.alertCtrl.create({
        title: '',
        subTitle: 'Added Successfully',
        buttons: ['OK']
 });
 alert.present();
    });;
  }


}
