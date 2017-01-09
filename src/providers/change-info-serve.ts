import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ChangeInfoServe provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ChangeInfoServe {

  constructor(public http: Http) {
    console.log('Hello ChangeInfoServe Provider');
  }

  getChangeInfo(id){
    return this.http.get('assets/json/changeInfo/'+id+'_changeInfo.json').map(res => res.json());
  }

}
