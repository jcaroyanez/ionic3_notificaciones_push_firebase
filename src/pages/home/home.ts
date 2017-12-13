import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { DetailPage } from '../detail/detail';
import { StorageProvider } from '../../providers/storage/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  estado:string;

  constructor(public navCtrl: NavController,
              public push:Push,public alertCtrl:AlertController,
              public _storageProvider:StorageProvider) {

    this.pushsetup();
  }

  pushsetup() {
    const options: PushOptions = {
     android: {
         senderID: '358720980507'
     },
     ios: {
         alert: 'true',
         badge: true,
         sound: 'false'
     },
     windows: {}
  };


    
    const pushObject: PushObject = this.push.init(options);
   
    pushObject.on('notification').subscribe((notification: any) => {
      if (notification.additionalData.foreground) {
        this.estado = 'foreground';
        let prompt = this.alertCtrl.create({
          title: notification.title,
          subTitle: notification.message,
        });
        prompt.present();
      }else{
          this.estado = 'background';
          this.navCtrl.push(DetailPage,{message:notification.message});
      }
    });
   
    pushObject.on('registration').subscribe((registration: any) => {
      this._storageProvider.save(registration.registrationId);
      alert(registration.registrationId);
    });
   
    pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
    }

}
