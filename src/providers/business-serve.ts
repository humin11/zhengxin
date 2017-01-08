import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Business } from '../models/class.model';
import 'rxjs/add/operator/map';

/*
  Generated class for the BusinessServe provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BusinessServe {

  constructor(public http: Http) {
    console.log('Hello BusinessServe Provider');
  }

  getBusiness(id){
    return this.http.get('assets/json/business/'+id+'_business.json').map(res => res.json())
  }

}
