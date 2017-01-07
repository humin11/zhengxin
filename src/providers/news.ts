import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { News } from '../models/news';
/*
  Generated class for the News provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NewsService {
  private news: News[] = [];

  constructor(public http: Http) {
    console.log('Hello News Provider');
  }

  getAll(): Observable<News[]> {
    let news$ = this.http.get('/assets/json/news.json').map(res =>  res.json());
    return news$;
  }

  get(id: string): Observable<News> {
    let news$ = this.http.get('/assets/json/news.json').map(res =>  res.json()[id]);
    return news$;
  }

  delete(news: News){

  }

  private clone(object: any) {
    return JSON.parse(JSON.stringify(object));
  }

}
