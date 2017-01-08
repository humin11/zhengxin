import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Detail } from '../models/class.model';
import 'rxjs/add/operator/map';

/*
  Generated class for the ListDetailServe provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ListDetailServe {

  constructor(public http: Http) {}

  getListDetail(id: string): Observable<Detail> {
    return this.http.get('/assets/json/detail/'+id+'_detail.json').map(res => res.json());
  }

}
