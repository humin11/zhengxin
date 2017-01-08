import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Company } from '../models/company';

/*
  Generated class for the CompanyServe provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CompanyService {
  private companies: Company[] = [];

  constructor(public http: Http) {
    console.log('Hello CompanyServe Provider');
  }

  getAll(): Observable<Company[]> {
    return this.http.get('/assets/json/companies.json').map(res =>  res.json());
  }

  getLike(): Observable<Company[]> {
    return this.http.get('/assets/json/companies.json').map(res =>  res.json()).map(x => x.filter((c: Company) => c.like === true ));
  }

  getHot(): Observable<Company[]> {
    return this.http.get('/assets/json/companies.json').map(res =>  res.json()).map(x => x.filter((c: Company) => c.hot === true ));
  }

  get(id: string): Company {
    return this.companies.find(company => company.company_id === id );
  }

}
