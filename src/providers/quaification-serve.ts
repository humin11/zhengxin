import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the QuaificationServe provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class QuaificationServe {

  constructor(public http: Http) {
    console.log('Hello QuaificationServe Provider');
  }

  getQuaificatinServe(id){
    return this.http.get('assets/json/certInfo/'+id+'_certInfo.json').map(res =>res.json());
  }
}
