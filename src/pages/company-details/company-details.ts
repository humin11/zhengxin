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
import { List_detail,Detail,Contact_detail,Sentence,PatentInfo,CopyRightInfo } from '../../models/class.model';
import { ListDetailServe } from '../../providers/list-detail-serve';
import { JudicialDecisionServe } from '../../providers/judicial-decision-serve';
import { PatentInfoServe } from '../../providers/patent-info-serve';
import { CopyrightServe } from '../../providers/copyright-serve';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-company-details',
  templateUrl: 'company-details.html',
  providers:[ListDetailServe,JudicialDecisionServe,PatentInfoServe,CopyrightServe]
})
export class CompanyDetailsPage {
  //列表信息
  con:List_detail;

  //企业详细信息
  detail:Detail;
  contactDetail:Contact_detail;

  //法院判决
  sentence:Sentence;

  //专利信息
  patentInfo:PatentInfo;

  //专利信息
  copyRightInfo:CopyRightInfo;

  constructor(private copyrightServe:CopyrightServe,private patentInfoServe:PatentInfoServe,private judicialDecisionServe:JudicialDecisionServe, private listDetailServe:ListDetailServe,public navCtrl: NavController, public navParams: NavParams,private app: IonicApp) {}

  ionViewWillLoad() {
     this.con = this.navParams.get("info");
     this.detail = this.navParams.get("detail");
     this.contactDetail = this.detail.contact_detail;
  }

  judicialDecision() {
    this.judicialDecisionServe.getJudicialDecision(this.con.detail_id).subscribe(data => {
      this.sentence = data;
      this.navCtrl.push(JudicialDecisionPage,{sentence:this.sentence});
    });
  }

  copyright() {
    this.copyrightServe.getCopyright(this.con.detail_id).subscribe(data => {
      this.copyRightInfo = data;
      this.navCtrl.push(CopyrightPage,{copyRightInfo:this.copyRightInfo});
    });
  }

  annualReport() {
    this.navCtrl.push(AnnualReportPage);
  }

  patentInformation() {
    this.patentInfoServe.getPatentInfo(this.con.detail_id).subscribe(data => {
      this.patentInfo = data;
      this.navCtrl.push(PatentInformationPage,{patentInfo:this.patentInfo});
    });
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
