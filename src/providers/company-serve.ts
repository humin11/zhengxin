import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { List } from '../models/class.model';
import 'rxjs/add/operator/map';

/*
  Generated class for the CompanyServe provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CompanyServe {
  companyList :List;
  constructor(public http: Http) {}
  getList(){
    return this.http.get('assets/json/list/list.json').map(res => res.json())
  }

}
