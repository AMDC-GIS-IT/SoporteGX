gx.evt.autoSkip=!1;gx.define("gam_changerepository",!1,function(){this.ServerClass="gam_changerepository";this.PackageName="GeneXus.Security.Backend";this.ServerFullClass="gam_changerepository.aspx";this.setObjectType("web");this.setAjaxSecurity(!1);this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.DSO="GAMDesignSystem";this.SetStandaloneVars=function(){};this.s112_client=function(){this.createWebComponent("Wcmessages","GAM_Messages",[])};this.e121l2_client=function(){return this.executeServerEvent("'CONFIRM'",!1,null,!1,!1)};this.e141l2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e151l2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33];this.GXLastCtrlId=33;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"GAM_DATACARD",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"GAM_DATACARD_TABLEGENERALTITLE",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"GAM_DATACARD_TBTITLEGENERAL",format:0,grid:0,ctrltype:"textblock"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"GAM_DATACARD_TABLEDATAGENERAL",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,lvl:0,type:"char",len:60,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECTEDCONNECTION",fmt:0,gxz:"ZV12SelectedConnection",gxold:"OV12SelectedConnection",gxvar:"AV12SelectedConnection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(n){n!==undefined&&(gx.O.AV12SelectedConnection=n)},v2z:function(n){n!==undefined&&(gx.O.ZV12SelectedConnection=n)},v2c:function(){gx.fn.setRadioValue("vSELECTEDCONNECTION",gx.O.AV12SelectedConnection);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV12SelectedConnection=this.val())},val:function(){return gx.fn.getControlValue("vSELECTEDCONNECTION")},nac:gx.falseFn};this.declareDomainHdlr(20,function(){});n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"GAM_FOOTERENTRY",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"GAM_FOOTERENTRY_TABLEBUTTONS",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"GAM_FOOTERENTRY_BTNCANCEL",grid:0,evt:"e161l1_client"};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"GAM_FOOTERENTRY_BTNCONFIRM",grid:0,evt:"e121l2_client"};this.AV12SelectedConnection="";this.ZV12SelectedConnection="";this.OV12SelectedConnection="";this.AV12SelectedConnection="";this.Events={e121l2_client:["'CONFIRM'",!0],e141l2_client:["ENTER",!0],e151l2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{ctrl:"vSELECTEDCONNECTION"},{av:"AV12SelectedConnection",fld:"vSELECTEDCONNECTION",pic:""}],[]];this.EvtParms["'CONFIRM'"]=[[{ctrl:"vSELECTEDCONNECTION"},{av:"AV12SelectedConnection",fld:"vSELECTEDCONNECTION",pic:""}],[{ctrl:"WCMESSAGES"}]];this.EvtParms.ENTER=[[],[]];this.Initialize();this.setComponent({id:"WCMESSAGES",GXClass:null,Prefix:"W0023",lvl:1})});gx.wi(function(){gx.createParentObj(this.gam_changerepository)})