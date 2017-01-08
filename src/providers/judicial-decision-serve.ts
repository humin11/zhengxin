import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the JudicialDecisionServe provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class JudicialDecisionServe {

  constructor(public http: Http) {
    console.log('Hello JudicialDecisionServe Provider');
  }
  getJudicialDecision(id){
    return this.http.get('assets/json/sentence/'+id+'_sentence.json').map(res => res.json())
  }

}
