import { Component } from '@angular/core';
import { StorageProvider } from '../../providers/storage/storage';
/**
 * Generated class for the SendComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'send',
  templateUrl: 'send.html'
})
export class SendComponent {
  token:any;
  text: string;

  constructor(public _storageProvider:StorageProvider) {
   
  }

  show(){
   this._storageProvider.getData().then(value =>{
     this.token = value;
   });
   alert(this.token);
  }

}
