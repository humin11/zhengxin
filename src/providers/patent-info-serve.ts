import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PatentInfoServe provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PatentInfoServe {

  constructor(public http: Http) {
    console.log('Hello PatentInfoServe Provider');
  }

  getPatentInfo(id){
    return this.http.get('assets/json/patentInfo/'+id+'_patentInfo.json').map(res => res.json())
  }
}
