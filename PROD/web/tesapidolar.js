gx.evt.autoSkip=!1;gx.define("tesapidolar",!1,function(){this.ServerClass="tesapidolar";this.PackageName="GeneXus.Programs";this.ServerFullClass="tesapidolar.aspx";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.DSO="AriesCustom";this.SetStandaloneVars=function(){};this.e11042_client=function(){return this.executeServerEvent("'DOLAR'",!1,null,!1,!1)};this.e13042_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e14042_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6];this.GXLastCtrlId=6;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"DOLAR",grid:0,evt:"e11042_client"};this.Events={e11042_client:["'DOLAR'",!0],e13042_client:["ENTER",!0],e14042_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.EvtParms["'DOLAR'"]=[[],[]];this.EvtParms.ENTER=[[],[]];this.Initialize()});gx.wi(function(){gx.createParentObj(this.tesapidolar)})