gx.evt.autoSkip=!1;gx.define("gamexamplerecoverpasswordstep2",!1,function(){this.ServerClass="gamexamplerecoverpasswordstep2";this.PackageName="GeneXus.Programs";this.ServerFullClass="gamexamplerecoverpasswordstep2.aspx";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.DSO="AriesCustom";this.SetStandaloneVars=function(){this.AV14UserAuthTypeName=gx.fn.getControlValue("vUSERAUTHTYPENAME");this.AV10KeyToChangePassword=gx.fn.getControlValue("vKEYTOCHANGEPASSWORD");this.AV18UserRememberMe=gx.fn.getIntegerValue("vUSERREMEMBERME",gx.thousandSeparator);this.AV9IDP_State=gx.fn.getControlValue("vIDP_STATE")};this.e11312_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e12312_client=function(){return this.executeServerEvent("'LOGIN'",!1,null,!1,!1)};this.e14312_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,28,29,30,31,32,33,34,35,36,37,38];this.GXLastCtrlId=38;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLECONTAINER",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"TITLE",format:0,grid:0,ctrltype:"textblock"};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,lvl:0,type:"svchar",len:100,dec:60,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERNAME",fmt:0,gxz:"ZV15UserName",gxold:"OV15UserName",gxvar:"AV15UserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV15UserName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV15UserName=n)},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV15UserName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV15UserName=this.val())},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};this.declareDomainHdlr(14,function(){});n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,lvl:0,type:"char",len:50,dec:0,sign:!1,isPwd:!0,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERPASSWORDNEW",fmt:0,gxz:"ZV16UserPasswordNew",gxold:"OV16UserPasswordNew",gxvar:"AV16UserPasswordNew",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV16UserPasswordNew=n)},v2z:function(n){n!==undefined&&(gx.O.ZV16UserPasswordNew=n)},v2c:function(){gx.fn.setControlValue("vUSERPASSWORDNEW",gx.O.AV16UserPasswordNew,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV16UserPasswordNew=this.val())},val:function(){return gx.fn.getControlValue("vUSERPASSWORDNEW")},nac:gx.falseFn};this.declareDomainHdlr(19,function(){});n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"",grid:0};n[24]={id:24,lvl:0,type:"char",len:50,dec:0,sign:!1,isPwd:!0,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERPASSWORDNEWCONF",fmt:0,gxz:"ZV17UserPasswordNewConf",gxold:"OV17UserPasswordNewConf",gxvar:"AV17UserPasswordNewConf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV17UserPasswordNewConf=n)},v2z:function(n){n!==undefined&&(gx.O.ZV17UserPasswordNewConf=n)},v2c:function(){gx.fn.setControlValue("vUSERPASSWORDNEWCONF",gx.O.AV17UserPasswordNewConf,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV17UserPasswordNewConf=this.val())},val:function(){return gx.fn.getControlValue("vUSERPASSWORDNEWCONF")},nac:gx.falseFn};this.declareDomainHdlr(24,function(){});n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"ENTER",grid:0,evt:"e11312_client",std:"ENTER"};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"TABLEBACK",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"IMAGE1",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"LOGIN",grid:0,evt:"e12312_client"};this.AV15UserName="";this.ZV15UserName="";this.OV15UserName="";this.AV16UserPasswordNew="";this.ZV16UserPasswordNew="";this.OV16UserPasswordNew="";this.AV17UserPasswordNewConf="";this.ZV17UserPasswordNewConf="";this.OV17UserPasswordNewConf="";this.AV15UserName="";this.AV16UserPasswordNew="";this.AV17UserPasswordNewConf="";this.AV9IDP_State="";this.AV10KeyToChangePassword="";this.AV14UserAuthTypeName="";this.AV18UserRememberMe=0;this.Events={e11312_client:["ENTER",!0],e12312_client:["'LOGIN'",!0],e14312_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"AV14UserAuthTypeName",fld:"vUSERAUTHTYPENAME",pic:"",hsh:!0},{av:"AV18UserRememberMe",fld:"vUSERREMEMBERME",pic:"Z9",hsh:!0},{av:"AV10KeyToChangePassword",fld:"vKEYTOCHANGEPASSWORD",pic:"",hsh:!0}],[]];this.EvtParms.ENTER=[[{av:"AV16UserPasswordNew",fld:"vUSERPASSWORDNEW",pic:""},{av:"AV17UserPasswordNewConf",fld:"vUSERPASSWORDNEWCONF",pic:""},{av:"AV14UserAuthTypeName",fld:"vUSERAUTHTYPENAME",pic:"",hsh:!0},{av:"AV15UserName",fld:"vUSERNAME",pic:""},{av:"AV10KeyToChangePassword",fld:"vKEYTOCHANGEPASSWORD",pic:"",hsh:!0},{av:"AV18UserRememberMe",fld:"vUSERREMEMBERME",pic:"Z9",hsh:!0},{av:"AV9IDP_State",fld:"vIDP_STATE",pic:""}],[]];this.EvtParms["'LOGIN'"]=[[{av:"AV9IDP_State",fld:"vIDP_STATE",pic:""}],[{av:"AV9IDP_State",fld:"vIDP_STATE",pic:""}]];this.EnterCtrl=["ENTER"];this.setVCMap("AV14UserAuthTypeName","vUSERAUTHTYPENAME",0,"char",60,0);this.setVCMap("AV10KeyToChangePassword","vKEYTOCHANGEPASSWORD",0,"char",120,0);this.setVCMap("AV18UserRememberMe","vUSERREMEMBERME",0,"int",2,0);this.setVCMap("AV9IDP_State","vIDP_STATE",0,"char",60,0);this.Initialize()});gx.wi(function(){gx.createParentObj(this.gamexamplerecoverpasswordstep2)})