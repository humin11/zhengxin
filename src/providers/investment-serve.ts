import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Investment} from '../models/class.model'

/*
  Generated class for the InvestmentServe provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class InvestmentServe {

  constructor(public http: Http) {
    console.log('Hello InvestmentServe Provider');
  }

  getInvestment(id){
    return this.http.get('assets/json/investment/'+id+'_investment.json').map(res => res.json())
  }

}
