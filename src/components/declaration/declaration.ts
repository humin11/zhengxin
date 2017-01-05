import { Component } from '@angular/core';

/*
  Generated class for the Declaration component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'declaration',
  templateUrl: 'declaration.html'
})
export class DeclarationComponent {

  text: string;
  
  constructor() {
    console.log('Hello Declaration Component');
    this.text = '全部信息来自全国企业信用信息公示系统。';
  }

}
