import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Shareholder } from '../models/class.model';
/*
  Generated class for the ShareholderServe provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ShareholderServe {

  constructor(public http: Http) {
    console.log('Hello ShareholderServe Provider');
  }
  getSentence(id){
    return this.http.get('assets/json/shareholder/'+id+'_shareholder.json').map(res => res.json())
  }

}
