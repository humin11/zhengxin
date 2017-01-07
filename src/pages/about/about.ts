import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Company } from '../../models/company';
import { CompanyService } from '../../providers/companies';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public companies: Company[] = [];

  constructor(public navCtrl: NavController, private companyService: CompanyService) {
    this.companyService.getLike().subscribe( companies => this.companies = companies );
  }

}
