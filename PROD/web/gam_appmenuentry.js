gx.evt.autoSkip=!1;gx.define("gam_appmenuentry",!1,function(){this.ServerClass="gam_appmenuentry";this.PackageName="GeneXus.Security.Backend";this.ServerFullClass="gam_appmenuentry.aspx";this.setObjectType("web");this.setAjaxSecurity(!1);this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.DSO="GAMDesignSystem";this.SetStandaloneVars=function(){this.AV7ApplicationId=gx.fn.getIntegerValue("vAPPLICATIONID",gx.thousandSeparator);this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV6isOK=gx.fn.getControlValue("vISOK")};this.s112_client=function(){this.createWebComponent("Wcmessages","GAM_Messages",[])};this.e152h1_client=function(){return this.clearMessages(),this.call("gam_wwappmenus.aspx",[this.AV7ApplicationId],null,["ApplicationId"]),this.refreshOutputs([{av:"AV7ApplicationId",fld:"vAPPLICATIONID",pic:"ZZZZZZZZZZZ9"}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e122h2_client=function(){return this.executeServerEvent("'CONFIRM'",!1,null,!1,!1)};this.e132h2_client=function(){return this.executeServerEvent("'CANCEL'",!1,null,!1,!1)};this.e162h2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e172h2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,69,70,71,72,73,74,75,76,77,78];this.GXLastCtrlId=78;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"GAM_HEADERENTRY",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"GAM_HEADERENTRY_TBLBACKCONTAINER",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"GAM_HEADERENTRY_TABLEBACK",grid:0,evt:"e152h1_client"};n[15]={id:15,fld:"GAM_HEADERENTRY_TXTBACK",format:0,grid:0,ctrltype:"textblock"};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"GAM_HEADERENTRY_TABLETITLEACTIONS",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"GAM_HEADERENTRY_TITLE",format:0,grid:0,ctrltype:"textblock"};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"GAM_HEADERENTRY_TXTSTATUS",format:0,grid:0,ctrltype:"textblock"};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"GAM_HEADERENTRY_TBLTOOLBARS",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"GAM_HEADERENTRY_MENUTABLE",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"GAM_DATACARD",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"GAM_DATACARD_TABLEGENERALTITLE",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"GAM_DATACARD_TBTITLEGENERAL",format:0,grid:0,ctrltype:"textblock"};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"GAM_DATACARD_TABLEDATAGENERAL",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,fld:"",grid:0};n[45]={id:45,lvl:0,type:"char",len:254,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CTLNAME",fmt:0,gxz:"ZV16GXV1",gxold:"OV16GXV1",gxvar:"GXV1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.GXV1=n)},v2z:function(n){n!==undefined&&(gx.O.ZV16GXV1=n)},v2c:function(){gx.fn.setControlValue("CTLNAME",gx.O.GXV1,0)},c2v:function(){this.val()!==undefined&&(gx.O.GXV1=this.val())},val:function(){return gx.fn.getControlValue("CTLNAME")},nac:gx.falseFn};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"",grid:0};n[50]={id:50,lvl:0,type:"char",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGUID",fmt:0,gxz:"ZV12GUID",gxold:"OV12GUID",gxvar:"AV12GUID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV12GUID=n)},v2z:function(n){n!==undefined&&(gx.O.ZV12GUID=n)},v2c:function(){gx.fn.setControlValue("vGUID",gx.O.AV12GUID,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV12GUID=this.val())},val:function(){return gx.fn.getControlValue("vGUID")},nac:gx.falseFn};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,fld:"",grid:0};n[54]={id:54,fld:"",grid:0};n[55]={id:55,lvl:0,type:"int",len:12,dec:0,sign:!1,pic:"ZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vID",fmt:0,gxz:"ZV13Id",gxold:"OV13Id",gxvar:"AV13Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV13Id=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV13Id=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vID",gx.O.AV13Id,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV13Id=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vID",gx.thousandSeparator)},nac:gx.falseFn};this.declareDomainHdlr(55,function(){});n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,fld:"",grid:0};n[59]={id:59,fld:"",grid:0};n[60]={id:60,lvl:0,type:"char",len:254,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",fmt:0,gxz:"ZV14Name",gxold:"OV14Name",gxvar:"AV14Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV14Name=n)},v2z:function(n){n!==undefined&&(gx.O.ZV14Name=n)},v2c:function(){gx.fn.setControlValue("vNAME",gx.O.AV14Name,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV14Name=this.val())},val:function(){return gx.fn.getControlValue("vNAME")},nac:gx.falseFn};this.declareDomainHdlr(60,function(){});n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,fld:"",grid:0};n[64]={id:64,fld:"",grid:0};n[65]={id:65,lvl:0,type:"char",len:254,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDSC",fmt:0,gxz:"ZV9Dsc",gxold:"OV9Dsc",gxvar:"AV9Dsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV9Dsc=n)},v2z:function(n){n!==undefined&&(gx.O.ZV9Dsc=n)},v2c:function(){gx.fn.setControlValue("vDSC",gx.O.AV9Dsc,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV9Dsc=this.val())},val:function(){return gx.fn.getControlValue("vDSC")},nac:gx.falseFn};this.declareDomainHdlr(65,function(){});n[66]={id:66,fld:"",grid:0};n[67]={id:67,fld:"",grid:0};n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"",grid:0};n[71]={id:71,fld:"GAM_FOOTERENTRY",grid:0};n[72]={id:72,fld:"",grid:0};n[73]={id:73,fld:"",grid:0};n[74]={id:74,fld:"GAM_FOOTERENTRY_TABLEBUTTONS",grid:0};n[75]={id:75,fld:"",grid:0};n[76]={id:76,fld:"GAM_FOOTERENTRY_BTNCANCEL",grid:0,evt:"e132h2_client"};n[77]={id:77,fld:"",grid:0};n[78]={id:78,fld:"GAM_FOOTERENTRY_BTNCONFIRM",grid:0,evt:"e122h2_client"};this.GXV1="";this.ZV16GXV1="";this.OV16GXV1="";this.AV12GUID="";this.ZV12GUID="";this.OV12GUID="";this.AV13Id=0;this.ZV13Id=0;this.OV13Id=0;this.AV14Name="";this.ZV14Name="";this.OV14Name="";this.AV9Dsc="";this.ZV9Dsc="";this.OV9Dsc="";this.GXV1="";this.AV12GUID="";this.AV13Id=0;this.AV14Name="";this.AV9Dsc="";this.AV7ApplicationId=0;this.Gx_mode="";this.AV6isOK=!1;this.AV5GAMApplication={};this.Events={e122h2_client:["'CONFIRM'",!0],e132h2_client:["'CANCEL'",!0],e162h2_client:["ENTER",!0],e172h2_client:["CANCEL",!0],e152h1_client:["GAM_HEADERENTRY_TABLEBACK.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0}],[]];this.EvtParms["'CONFIRM'"]=[[{av:"AV7ApplicationId",fld:"vAPPLICATIONID",pic:"ZZZZZZZZZZZ9"},{av:"AV14Name",fld:"vNAME",pic:""},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV12GUID",fld:"vGUID",pic:""},{av:"AV9Dsc",fld:"vDSC",pic:""},{av:"AV13Id",fld:"vID",pic:"ZZZZZZZZZZZ9"},{av:"AV6isOK",fld:"vISOK",pic:""}],[{av:"AV6isOK",fld:"vISOK",pic:""},{ctrl:"WCMESSAGES"}]];this.EvtParms["'CANCEL'"]=[[{av:"AV13Id",fld:"vID",pic:"ZZZZZZZZZZZ9"},{av:"AV7ApplicationId",fld:"vAPPLICATIONID",pic:"ZZZZZZZZZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0}],[]];this.EvtParms["GAM_HEADERENTRY_TABLEBACK.CLICK"]=[[{av:"AV7ApplicationId",fld:"vAPPLICATIONID",pic:"ZZZZZZZZZZZ9"}],[{av:"AV7ApplicationId",fld:"vAPPLICATIONID",pic:"ZZZZZZZZZZZ9"}]];this.EvtParms.ENTER=[[],[]];this.setVCMap("AV7ApplicationId","vAPPLICATIONID",0,"int",12,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV6isOK","vISOK",0,"boolean",4,0);this.setVCMap("AV7ApplicationId","vAPPLICATIONID",0,"int",12,0);this.addBCProperty("Gamapplication",["Name"],this.GXValidFnc[45],"AV5GAMApplication");this.Initialize();this.setComponent({id:"WCMESSAGES",GXClass:null,Prefix:"W0068",lvl:1})});gx.wi(function(){gx.createParentObj(this.gam_appmenuentry)})