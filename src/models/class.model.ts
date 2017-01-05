export interface Business{
  shareholder_info: Array<any>;
  business_info: Detail;
  main: Array<Main_info>;
  detail_id:string;
  branch: Array<any>;
}
export interface Main_info{
  supervisor_uname: string;
  supervisor_type: string;
}

export interface CerInfo{
  cert_detail: Array<any>;
  detail_id: string;
}

export interface ChangeInfo{
  change_detail: Array<Change_detail>;
  detail_id: string;
}
export interface Change_detail{
  cbefore: string;
  cproject: string;
  cdate: string;
  cid: string;
  cafter: string;
}


export interface CopyRightInfo{
  copy_right_detail: Array<any>;
  detail_id: string;
}

export interface Detail{
  detail_type:string;
  detail_status:string;
  contact_detail: Array<any>;
  detail_credit_code: string;
  detail_reg_code: string;
  detail_org_code: string;
  detail_range: string;
}

export interface Investment{
  investment: Array<Investment_info>;
  detail_id: string;
}
export interface Investment_info{
  idate: string;
  iuname: string;
  iamt: string;
  iname: string;
  status: string;
  saddress: string;
}

export interface List{
  totalCount: number;
  page: number;
  count: number;
  detail: Array<List_detail>;
}
export interface List_detail{
  detail_name: string;
  detail_address: string;
  detail_amt: string;
  detail_industry: string;
  detail_id: string;
  detail_corporation: string;
}

export interface PatentInfo{
  patent_detail: Array<any>;
  detail_id: string;
}

export interface Sentence{
  sentence_detail: Array<Sentence_detail>;
  detail_id: string;
}
export interface Sentence_detail{
  sdetail: string;
  sdate: string;
  scode: string;
  surl: string;
  scourt: string;
  sid: string;
}

export interface Shareholder{
  shareholder_info: Array<Shareholder_info>;
  detail_id: string;
}
export interface Shareholder_info{
  sname: string;
  scale: string;
  samt_date: string;
  sactual_amt_date: string;
}
