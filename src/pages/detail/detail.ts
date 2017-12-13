import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  message:any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.message = this.navParams.get('message');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
