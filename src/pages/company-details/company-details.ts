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
import { Contact_detail,Sentence,PatentInfo,CopyRightInfo,List,Business,Detail,Investment ,Shareholder,ChangeInfo} from '../../models/class.model';
import { ListDetailServe } from '../../providers/list-detail-serve';
import { JudicialDecisionServe } from '../../providers/judicial-decision-serve';
import { PatentInfoServe } from '../../providers/patent-info-serve';
import { CopyrightServe } from '../../providers/copyrights';
import { BusinessServe } from '../../providers/business';
import { InvestmentServe } from '../../providers/investment-serve';
import { ShareholderServe } from '../../providers/shareholder-serve';

import { Company } from '../../models/company';


import { ChangeInfoServe } from '../../providers/change-info-serve';
import { ChangeInfoPage } from '../change-info/change-info';
/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-company-details',
  templateUrl: 'company-details.html',
  providers:[BusinessServe,InvestmentServe,ShareholderServe,ChangeInfoServe]
})
export class CompanyDetailsPage {
  public company: Company;
  //列表信息
  // con:List_detail;

  //企业详细信息
  public companyInfo: Detail;

  public contactDetail: Contact_detail;

  //法院判决
  public sentence:Sentence;

  //专利信息
  public patentInfo:PatentInfo;

  //专利信息
  public copyRightInfo:CopyRightInfo;

  //工商信息
  public business:Business;

  //股东
  public shareholder : Shareholder;

  //投资
  public investment : Investment;

  public change_Info : ChangeInfo;

  like : number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,private app: IonicApp, private investmentServe:InvestmentServe,private shareholderServe:ShareholderServe,private businessServe:BusinessServe,private copyrightServe:CopyrightServe,private patentInfoServe:PatentInfoServe,private judicialDecisionServe:JudicialDecisionServe, private listDetailServe:ListDetailServe,private changeInfoServe : ChangeInfoServe) {
    this.company = this.navParams.data;
    this.listDetailServe.getListDetail(this.company.company_id).subscribe((res: Detail ) => {this.companyInfo = res;});
  }

  ngOnInit() {
    console.log("NG Init.");
  }

  ionViewDidLoad() {
    console.log("Did Load");
  }

  ionViewWillEnter() {
    console.log("Will Enter");
  }

  judicialDecision() {
    this.judicialDecisionServe.getJudicialDecision(this.company.company_id).subscribe(data => {
      this.sentence = data;
      this.navCtrl.push(JudicialDecisionPage,{sentence:this.sentence});
    });
  }

  copyright() {
    this.copyrightServe.getCopyright(this.company.company_id).subscribe(data => {
      this.copyRightInfo = data;
      this.navCtrl.push(CopyrightPage,{copyRightInfo:this.copyRightInfo});
    });
  }

  annualReport() {
    this.navCtrl.push(AnnualReportPage);
  }

  patentInformation() {
    this.patentInfoServe.getPatentInfo(this.company.company_id).subscribe(data => {
      this.patentInfo = data;
      this.navCtrl.push(PatentInformationPage,{patentInfo:this.patentInfo});
    });
  }

  businessInformation() {
    this.businessServe.getBusiness(this.company.company_id).subscribe(data => {
      this.business = data;
      this.navCtrl.push(BusinessInformationPage,{business:this.business});
    })
  }

  investorRelations() {
    this.investmentServe.getInvestment(this.company.company_id).subscribe(data => {
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
    this.shareholderServe.getSentence(this.company.company_id).subscribe(data =>{
      this.shareholder = data;
      this.navCtrl.push(OwnershipStructurePage,{shareholder : this.shareholder});
    })
  }

  changeInfo(){
    this.changeInfoServe.getChangeInfo(this.company.company_id).subscribe(data => {
      this.change_Info = data;
      this.navCtrl.push(ChangeInfoPage,{changeInfo : this.change_Info});
    })
  }

  //点赞
  likes(){
    this.like ++;
  }
}
