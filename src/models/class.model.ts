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

export interface CerInfo {
  cert_detail: Array<any>;
  detail_id: string;
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
  copy_right_detail: Array<any>;
  detail_id: string;
}

//企业基本信息 节点
export interface Detail {
  detail_type:string;  //公司类型
  detail_status:string; // 经营状态
  contact_detail: Array<any>;
  detail_credit_code: string; //统一社会信誉代码
  detail_reg_code: string; //注册号
  detail_org_code: string;  //组织机构代码
  detail_range: string; //经营范围
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
  detail: Array<List_detail>;
}
export interface List_detail {
  detail_name: string; //公司名称
  detail_address: string; //公司地址
  detail_amt: string; //注册资本
  detail_industry: string; //行业
  detail_id: string;
  detail_corporation: string; //法定代表人
}

export interface PatentInfo {
  patent_detail: Array<any>;
  detail_id: string;
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
