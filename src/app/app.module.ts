import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SearchPage } from '../pages/search/search';
import { Storage } from '@ionic/storage';
import { CompanyDetailsPage } from '../pages/company-details/company-details';
import { BusinessInformationPage } from '../pages/business-information/business-information';
import { AnnualReportPage } from '../pages/annual-report/annual-report';
import { PatentInformationPage } from '../pages/patent-information/patent-information';
import { DeclarationComponent } from '../components/declaration/declaration';
import { JudicialDecisionPage } from '../pages/judicial-decision/judicial-decision';
import { CopyrightPage } from '../pages/copyright/copyright';
import { InvestorRelationsPage } from '../pages/investor-relations/investor-relations';
import { RatingInformationPage } from '../pages/rating-information/rating-information';
import { CreditReportPage } from '../pages/credit-report/credit-report';
import { OwnershipStructurePage } from '../pages/ownership-structure/ownership-structure';
import { RegisterPage } from '../pages/register/register';
import { NewsSinglePage } from '../pages/news-single/news-single';

import { NewsService } from '../providers/news';
import { CompanyService } from '../providers/companies';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    SearchPage,
    CompanyDetailsPage,
    BusinessInformationPage,
    AnnualReportPage,
    PatentInformationPage,
    DeclarationComponent,
    JudicialDecisionPage,
    CopyrightPage,
    InvestorRelationsPage,
    RatingInformationPage,
    CreditReportPage,
    OwnershipStructurePage,
    RegisterPage,
    NewsSinglePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios'
    }, {})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    SearchPage,
    CompanyDetailsPage,
    BusinessInformationPage,
    AnnualReportPage,
    PatentInformationPage,
    DeclarationComponent,
    JudicialDecisionPage,
    CopyrightPage,
    InvestorRelationsPage,
    RatingInformationPage,
    CreditReportPage,
    OwnershipStructurePage,
    RegisterPage,
    NewsSinglePage,
    TabsPage
  ],
  providers: [Storage, NewsService, CompanyService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
