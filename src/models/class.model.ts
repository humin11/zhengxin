
'use strict';

import { Company } from './company';
export interface Business {
  shareholder_info: Array<any>;
  business_info: Detail;
  main: Array<Main_info>;
  detail_id:string;
  branch: Array<any>;
}
//主要人员信息
export interface Main_info {
  supervisor_uname: string; //公司主要人员姓名
  supervisor_type: string; //人员职位
}

//资质信息
export interface CerInfo {
  cert_detail: Array<Cert_detail>;
  detail_id: string;
}

export interface Cert_detail {
   cdetail:string;
   cname:string;
   cstart_date:string;
   cend_date:string;
   cid:string;
}

//公司变更信息 节点
export interface ChangeInfo {
  change_detail: Array<Change_detail>;
  detail_id: string;
}
export interface Change_detail {
  cbefore: string; //变更前
  cproject: string; //变更项目
  cdate: string; //变更日期
  cid: string; //序号
  cafter: string; //变更后
}


export interface CopyRightInfo {
  copy_right_detail: Array<Copy_right_detail>;
  detail_id: string;
}
export interface Copy_right_detail {
  wname:string;
  wtype:string;
  wid:string;
  wdate:string;
  wcode:string;
}

//企业基本信息 节点
export class Detail {
  public detail_type:string; //公司类型
  public detail_status:string; // 经营状态
  public contact_detail: Contact_detail;
  public detail_credit_code: string; //统一社会信誉代码
  public detail_reg_code: string; //注册号
  public detail_org_code: string; //组织机构代码
  public detail_range: string; //经营范围

  constructor(detail_type:string, detail_status:string, contact_detail: Contact_detail, detail_credit_code: string, detail_reg_code: string, detail_org_code: string, detail_range: string) {}
}
export interface Contact_detail {
  detail_address: string;
  detail_mail: string;
  detail_web: string;
}

export interface Investment {
  investment: Array<Investment_info>;
  detail_id: string;
}
export interface Investment_info {
  idate: string; //成立日期
  iuname: string; //投资公司法人姓名
  iamt: string; //注册资本
  iname: string; //投资设立企业或购买股权企业名称 (投资公司名称)
  status: string; //状态
  saddress: string;
}

export interface List {
  totalCount: number;
  page: number;
  count: number; //数量
  detail: Array<Company>;
}

export interface PatentInfo {
  patent_detail: Array<Patent_detail>;
  detail_id: string;
}
export interface Patent_detail {
  pcode:string;
  pdate:string;
  pdes:string;
  pdetail:string;
  pid:string;
  ptype:string;
}

export interface Sentence {
  sentence_detail: Array<Sentence_detail>;
  detail_id: string;
}
//裁判文书 节点
export interface Sentence_detail {
  sdetail: string; //详情
  sdate: string; //登记批准日期(公布日期)
  scode: string; //档案编号(登记号)
  surl: string;
  scourt: string; //执行法院
  sid: string; //编号
}

export interface Shareholder {
  shareholder_info: Array<Shareholder_info>;
  detail_id: string;
}
//股东信息 节点
export interface Shareholder_info {
  sname: string; //名称
  scale: string;
  samt_date: string; //股东-认缴出资和金额和日期
  sactual_amt_date: string; //实际出资和金额和日期
}
