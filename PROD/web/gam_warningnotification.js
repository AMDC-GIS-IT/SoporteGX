gx.evt.autoSkip=!1;gx.define("gam_warningnotification",!1,function(){this.ServerClass="gam_warningnotification";this.PackageName="GeneXus.Security.Backend";this.ServerFullClass="gam_warningnotification.aspx";this.setObjectType("web");this.setAjaxSecurity(!1);this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.DSO="GAMDesignSystem";this.SetStandaloneVars=function(){this.AV6PanelId=gx.fn.getControlValue("vPANELID");this.AV8UserGUID=gx.fn.getControlValue("vUSERGUID")};this.e12362_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e14361_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];this.GXLastCtrlId=16;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TXTMESSAGE",format:0,grid:0,ctrltype:"textblock"};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"GAM_FOOTERENTRY",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"GAM_FOOTERENTRY_TABLEBUTTONS",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"GAM_FOOTERENTRY_BTNCANCEL",grid:0,evt:"e14361_client"};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"GAM_FOOTERENTRY_BTNCONFIRM",grid:0,evt:"e12362_client",std:"ENTER"};this.AV6PanelId="";this.AV8UserGUID="";this.Events={e12362_client:["ENTER",!0],e14361_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"AV6PanelId",fld:"vPANELID",pic:"",hsh:!0},{av:"AV8UserGUID",fld:"vUSERGUID",pic:"",hsh:!0}],[]];this.EvtParms.ENTER=[[{av:"AV6PanelId",fld:"vPANELID",pic:"",hsh:!0},{av:"AV8UserGUID",fld:"vUSERGUID",pic:"",hsh:!0}],[]];this.EnterCtrl=["GAM_FOOTERENTRY_BTNCONFIRM"];this.setVCMap("AV6PanelId","vPANELID",0,"svchar",40,0);this.setVCMap("AV8UserGUID","vUSERGUID",0,"char",40,0);this.Initialize()});gx.wi(function(){gx.createParentObj(this.gam_warningnotification)})