import { Component } from '@angular/core';
import { NavController, NavParams,IonicApp } from 'ionic-angular';
import { JudicialDecisionPage } from '../judicial-decision/judicial-decision';
import { CopyrightPage } from '../copyright/copyright';
import { AnnualReportPage } from '../annual-report/annual-report';
import { PatentInformationPage } from '../patent-information/patent-information';
import { BusinessInformationPage } from '../business-information/business-information';
import { InvestorRelationsPage } from '../investor-relations/investor-relations';
import { RatingInformationPage } from '../rating-information/rating-information';
import { CreditReportPage } from '../credit-report/credit-report';
import { OwnershipStructurePage } from '../ownership-structure/ownership-structure';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-company-details',
  templateUrl: 'company-details.html'
})
export class CompanyDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private app: IonicApp) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyDetailsPage');
  }

  judicialDecision() {
    this.navCtrl.push(JudicialDecisionPage);
  }

  copyright() {
    this.navCtrl.push(CopyrightPage);
  }

  annualReport() {
    this.navCtrl.push(AnnualReportPage);
  }

  patentInformation() {
    this.navCtrl.push(PatentInformationPage);
  }

  businessInformation() {
    this.navCtrl.push(BusinessInformationPage);
  }

  investorRelations() {
    this.navCtrl.push(InvestorRelationsPage);
  }

  ratingInformation() {
    this.navCtrl.push(RatingInformationPage);
  }

  creditReport() {
    this.navCtrl.push(CreditReportPage);
  }

  ownershipStructure() {
    this.navCtrl.push(OwnershipStructurePage);
  }
}
