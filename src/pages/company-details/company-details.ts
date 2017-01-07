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

import { List,List_detail,Business,Detail,Investment ,Shareholder} from '../../models/class.model';
import { BusinessServe} from '../../providers/business-serve';
import {InvestmentServe} from '../../providers/investment-serve';
import {ShareholderServe} from '../../providers/shareholder-serve';
/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-company-details',
  templateUrl: 'company-details.html',
  providers:[BusinessServe,InvestmentServe,ShareholderServe]
})
export class CompanyDetailsPage {

  const : List_detail;
  business : Business;
  detail : Detail;
  investment : Investment;
  shareholder : Shareholder;
  constructor(private businessServe : BusinessServe,private investmentServe :  InvestmentServe,private shareholderServe : ShareholderServe,public navCtrl: NavController, public navParams: NavParams,private app: IonicApp) {
  }

  ionViewWillLoad() {
    this.const = this.navParams.get("cons");
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
    this.businessServe.getBusiness(this.const.detail_id).subscribe(data => {
      this.business = data;
      this.detail = this.business.business_info;
      console.log(this.detail);
      this.navCtrl.push(BusinessInformationPage,{detail:this.detail});
    })
  }

  investorRelations() {
    this.investmentServe.getInvestment(this.const.detail_id).subscribe(data => {
      this.investment = data;
      this.navCtrl.push(InvestorRelationsPage,{investment : this.investment});
    })
  }

  ratingInformation() {
    this.navCtrl.push(RatingInformationPage);
  }

  creditReport() {
    this.navCtrl.push(CreditReportPage);
  }

  ownershipStructure() {
    this.shareholderServe.getSentence(this.const.detail_id).subscribe(data =>{
      this.shareholder = data;
      this.navCtrl.push(OwnershipStructurePage,{shareholder : this.shareholder});
    })
  }
}
