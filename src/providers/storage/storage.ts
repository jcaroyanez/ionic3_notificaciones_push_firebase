import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage'
/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {
  token:string;
  constructor(public http: HttpClient,public storage:Storage) {
    this.token = null;
    console.log('Hello StorageProvider Provider');
  }

  public save(data:string){
    this.storage.set('token',data).catch(error => {
      alert('error storage set');
    });
  }

  public getData(){
    return new Promise((resolve, reject) => {
      this.storage.get('token').then((data) => {
        resolve(data);
      });
    });
  }

}
