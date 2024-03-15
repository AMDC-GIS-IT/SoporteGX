gx.evt.autoSkip=!1;gx.define("gam_wweventsubscriptions",!1,function(){var n,t;this.ServerClass="gam_wweventsubscriptions";this.PackageName="GeneXus.Security.Backend";this.ServerFullClass="gam_wweventsubscriptions.aspx";this.setObjectType("web");this.setAjaxSecurity(!1);this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.DSO="GAMDesignSystem";this.SetStandaloneVars=function(){this.AV18CountReg=gx.fn.getIntegerValue("vCOUNTREG",gx.thousandSeparator);this.subGridww_Recordcount=gx.fn.getIntegerValue("subGridww_Recordcount",gx.thousandSeparator)};this.Validv_Status=function(){var n=gx.fn.currentGridRowImpl(22);return this.validCliEvt("Validv_Status",22,function(){try{var n=gx.util.balloon.getNew("vSTATUS");if(this.AnyError=0,!(gx.text.compare(this.AV17Status,"u")==0||gx.text.compare(this.AV17Status,"s")==0))try{n.setError(gx.text.format(gx.getMessage("GXSPC_OutOfRange"),gx.getMessage("Status"),"","","","","","","",""));this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Validv_Event=function(){var n=gx.fn.currentGridRowImpl(22);return this.validCliEvt("Validv_Event",22,function(){try{var n=gx.util.balloon.getNew("vEVENT");if(this.AnyError=0,!(gx.text.compare(this.AV10Event,"user-update")==0||gx.text.compare(this.AV10Event,"user-insert")==0||gx.text.compare(this.AV10Event,"user-delete")==0||gx.text.compare(this.AV10Event,"user-updateroles")==0||gx.text.compare(this.AV10Event,"user-getcustominfo")==0||gx.text.compare(this.AV10Event,"user-savecustominfo")==0||gx.text.compare(this.AV10Event,"role-insert")==0||gx.text.compare(this.AV10Event,"role-update")==0||gx.text.compare(this.AV10Event,"role-delete")==0||gx.text.compare(this.AV10Event,"repository-login")==0||gx.text.compare(this.AV10Event,"repository-loginfailed")==0||gx.text.compare(this.AV10Event,"repository-logout")==0||gx.text.compare(this.AV10Event,"externalauthentication-response")==0||gx.text.compare(this.AV10Event,"application-checkprmfail")==0||gx.text.compare(this.AV10Event,"user-otp-validateuser")==0||gx.text.compare(this.AV10Event,"user-otp-generatecode")==0||gx.text.compare(this.AV10Event,"user-otp-sendcode")==0||gx.text.compare(this.AV10Event,"user-otp-validatecode")==0))try{n.setError(gx.text.format(gx.getMessage("GXSPC_OutOfRange"),gx.getMessage("Event"),"","","","","","","",""));this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e112l1_client=function(){return this.clearMessages(),this.call("gam_eventsubscriptionentry.aspx",["INS",""],null,["Mode","Id"]),this.refreshOutputs([]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e132l2_client=function(){return this.clearMessages(),this.call("gam_eventsubscriptionentry.aspx",["DSP",this.AV14Id],null,["Mode","Id"]),this.refreshOutputs([{av:"AV14Id",fld:"vID",pic:""}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e142l2_client=function(){return this.clearMessages(),this.call("gam_eventsubscriptionentry.aspx",["UPD",this.AV14Id],null,["Mode","Id"]),this.refreshOutputs([{av:"AV14Id",fld:"vID",pic:""}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e152l2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e162l2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24,25,26,27,28,29,30];this.GXLastCtrlId=30;this.GridwwContainer=new gx.grid.grid(this,2,"WbpLvl2",22,"Gridww","Gridww","GridwwContainer",this.CmpContext,this.IsMasterPage,"gam_wweventsubscriptions",[],!1,1,!0,!0,10,!0,!1,!1,"",0,"px",0,"px",gx.getMessage("GXM_newrow"),!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);t=this.GridwwContainer;t.addSingleLineEdit("Description",23,"vDESCRIPTION",gx.getMessage("Event Description"),"","Description","char",0,"px",254,80,"start","e132l2_client",[],"Description","Description",!0,0,!1,!1,"Attribute",0,"column");t.addComboBox("Status",24,"vSTATUS",gx.getMessage("Status"),"Status","char",null,0,!0,!1,100,"px","column column-optional");t.addComboBox("Event",25,"vEVENT",gx.getMessage("Event"),"Event","char",null,0,!0,!1,0,"px","column column-optional");t.addSingleLineEdit("Filename",26,"vFILENAME",gx.getMessage("File Name"),"","FileName","char",0,"px",254,80,"start",null,[],"Filename","FileName",!0,0,!1,!1,"Attribute",0,"column column-optional");t.addSingleLineEdit("Classname",27,"vCLASSNAME",gx.getMessage("ClassName"),"","ClassName","char",0,"px",60,60,"start",null,[],"Classname","ClassName",!0,0,!1,!1,"Attribute",0,"column column-optional");t.addSingleLineEdit("Methodname",28,"vMETHODNAME",gx.getMessage("Method Name"),"","MethodName","char",0,"px",60,60,"start",null,[],"Methodname","MethodName",!0,0,!1,!1,"Attribute",0,"column column-optional");t.addSingleLineEdit("Btnupd",29,"vBTNUPD","","","BtnUpd","char",0,"px",20,20,"start","e142l2_client",[],"Btnupd","BtnUpd",!0,0,!1,!1,"TextActionAttribute",0,"WWTextActionColumn column-optional");t.addSingleLineEdit("Id",30,"vID",gx.getMessage("GUID"),"","Id","char",0,"px",40,40,"start",null,[],"Id","Id",!1,0,!1,!1,"Attribute",0,"");this.GridwwContainer.emptyText=gx.getMessage("No results found.");this.setGrid(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"GAM_HEADERWWNOFILTERS",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"GAM_HEADERWWNOFILTERS_TABLEACTIONS",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"GAM_HEADERWWNOFILTERS_TITLE",format:0,grid:0,ctrltype:"textblock"};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"GAM_HEADERWWNOFILTERS_ADDNEW",grid:0,evt:"e112l1_client"};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,lvl:0,type:"svchar",len:100,dec:60,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSEARCH",fmt:0,gxz:"ZV16Search",gxold:"OV16Search",gxvar:"AV16Search",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV16Search=n)},v2z:function(n){n!==undefined&&(gx.O.ZV16Search=n)},v2c:function(){gx.fn.setControlValue("vSEARCH",gx.O.AV16Search,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV16Search=this.val())},val:function(){return gx.fn.getControlValue("vSEARCH")},nac:gx.falseFn};this.declareDomainHdlr(16,function(){});n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"GRIDCONTAINER",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[23]={id:23,lvl:2,type:"char",len:254,dec:0,sign:!1,ro:0,isacc:0,grid:22,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDESCRIPTION",fmt:0,gxz:"ZV8Description",gxold:"OV8Description",gxvar:"AV8Description",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV8Description=n)},v2z:function(n){n!==undefined&&(gx.O.ZV8Description=n)},v2c:function(n){gx.fn.setGridControlValue("vDESCRIPTION",n||gx.fn.currentGridRowImpl(22),gx.O.AV8Description,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV8Description=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDESCRIPTION",n||gx.fn.currentGridRowImpl(22))},nac:gx.falseFn,evt:"e132l2_client"};n[24]={id:24,lvl:2,type:"char",len:1,dec:0,sign:!1,ro:0,isacc:0,grid:22,gxgrid:this.GridwwContainer,fnc:this.Validv_Status,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSTATUS",fmt:0,gxz:"ZV17Status",gxold:"OV17Status",gxvar:"AV17Status",ucs:[],op:[24],ip:[24],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV17Status=n)},v2z:function(n){n!==undefined&&(gx.O.ZV17Status=n)},v2c:function(n){gx.fn.setGridComboBoxValue("vSTATUS",n||gx.fn.currentGridRowImpl(22),gx.O.AV17Status);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV17Status=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vSTATUS",n||gx.fn.currentGridRowImpl(22))},nac:gx.falseFn};n[25]={id:25,lvl:2,type:"char",len:60,dec:0,sign:!1,ro:0,isacc:0,grid:22,gxgrid:this.GridwwContainer,fnc:this.Validv_Event,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vEVENT",fmt:0,gxz:"ZV10Event",gxold:"OV10Event",gxvar:"AV10Event",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV10Event=n)},v2z:function(n){n!==undefined&&(gx.O.ZV10Event=n)},v2c:function(n){gx.fn.setGridComboBoxValue("vEVENT",n||gx.fn.currentGridRowImpl(22),gx.O.AV10Event);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV10Event=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vEVENT",n||gx.fn.currentGridRowImpl(22))},nac:gx.falseFn};n[26]={id:26,lvl:2,type:"char",len:254,dec:0,sign:!1,ro:0,isacc:0,grid:22,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFILENAME",fmt:0,gxz:"ZV13FileName",gxold:"OV13FileName",gxvar:"AV13FileName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV13FileName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV13FileName=n)},v2c:function(n){gx.fn.setGridControlValue("vFILENAME",n||gx.fn.currentGridRowImpl(22),gx.O.AV13FileName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV13FileName=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vFILENAME",n||gx.fn.currentGridRowImpl(22))},nac:gx.falseFn};n[27]={id:27,lvl:2,type:"char",len:60,dec:0,sign:!1,ro:0,isacc:0,grid:22,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCLASSNAME",fmt:0,gxz:"ZV6ClassName",gxold:"OV6ClassName",gxvar:"AV6ClassName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV6ClassName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV6ClassName=n)},v2c:function(n){gx.fn.setGridControlValue("vCLASSNAME",n||gx.fn.currentGridRowImpl(22),gx.O.AV6ClassName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV6ClassName=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vCLASSNAME",n||gx.fn.currentGridRowImpl(22))},nac:gx.falseFn};n[28]={id:28,lvl:2,type:"char",len:60,dec:0,sign:!1,ro:0,isacc:0,grid:22,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMETHODNAME",fmt:0,gxz:"ZV15MethodName",gxold:"OV15MethodName",gxvar:"AV15MethodName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV15MethodName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV15MethodName=n)},v2c:function(n){gx.fn.setGridControlValue("vMETHODNAME",n||gx.fn.currentGridRowImpl(22),gx.O.AV15MethodName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV15MethodName=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vMETHODNAME",n||gx.fn.currentGridRowImpl(22))},nac:gx.falseFn};n[29]={id:29,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:0,isacc:0,grid:22,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vBTNUPD",fmt:0,gxz:"ZV5BtnUpd",gxold:"OV5BtnUpd",gxvar:"AV5BtnUpd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV5BtnUpd=n)},v2z:function(n){n!==undefined&&(gx.O.ZV5BtnUpd=n)},v2c:function(n){gx.fn.setGridControlValue("vBTNUPD",n||gx.fn.currentGridRowImpl(22),gx.O.AV5BtnUpd,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV5BtnUpd=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vBTNUPD",n||gx.fn.currentGridRowImpl(22))},nac:gx.falseFn,evt:"e142l2_client"};n[30]={id:30,lvl:2,type:"char",len:40,dec:0,sign:!1,ro:0,isacc:0,grid:22,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vID",fmt:0,gxz:"ZV14Id",gxold:"OV14Id",gxvar:"AV14Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV14Id=n)},v2z:function(n){n!==undefined&&(gx.O.ZV14Id=n)},v2c:function(n){gx.fn.setGridControlValue("vID",n||gx.fn.currentGridRowImpl(22),gx.O.AV14Id,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV14Id=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vID",n||gx.fn.currentGridRowImpl(22))},nac:gx.falseFn};this.AV16Search="";this.ZV16Search="";this.OV16Search="";this.ZV8Description="";this.OV8Description="";this.ZV17Status="";this.OV17Status="";this.ZV10Event="";this.OV10Event="";this.ZV13FileName="";this.OV13FileName="";this.ZV6ClassName="";this.OV6ClassName="";this.ZV15MethodName="";this.OV15MethodName="";this.ZV5BtnUpd="";this.OV5BtnUpd="";this.ZV14Id="";this.OV14Id="";this.AV16Search="";this.AV8Description="";this.AV17Status="";this.AV10Event="";this.AV13FileName="";this.AV6ClassName="";this.AV15MethodName="";this.AV5BtnUpd="";this.AV14Id="";this.AV18CountReg=0;this.Events={e152l2_client:["ENTER",!0],e162l2_client:["CANCEL",!0],e112l1_client:["'ADDNEW'",!1],e132l2_client:["VDESCRIPTION.CLICK",!1],e142l2_client:["VBTNUPD.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{ctrl:"GRIDWW",prop:"Rows"},{av:"AV16Search",fld:"vSEARCH",pic:""},{av:"AV18CountReg",fld:"vCOUNTREG",pic:"ZZZZZZZZZ9",hsh:!0}],[]];this.EvtParms["GRIDWW.LOAD"]=[[{av:"AV16Search",fld:"vSEARCH",pic:""},{av:"AV18CountReg",fld:"vCOUNTREG",pic:"ZZZZZZZZZ9",hsh:!0}],[{av:"AV5BtnUpd",fld:"vBTNUPD",pic:""},{av:"AV18CountReg",fld:"vCOUNTREG",pic:"ZZZZZZZZZ9",hsh:!0},{av:"AV14Id",fld:"vID",pic:""},{av:"AV8Description",fld:"vDESCRIPTION",pic:""},{ctrl:"vSTATUS"},{av:"AV17Status",fld:"vSTATUS",pic:""},{ctrl:"vEVENT"},{av:"AV10Event",fld:"vEVENT",pic:""},{av:"AV13FileName",fld:"vFILENAME",pic:""},{av:"AV6ClassName",fld:"vCLASSNAME",pic:""},{av:"AV15MethodName",fld:"vMETHODNAME",pic:""}]];this.EvtParms["'ADDNEW'"]=[[],[]];this.EvtParms["VDESCRIPTION.CLICK"]=[[{av:"AV14Id",fld:"vID",pic:""}],[{av:"AV14Id",fld:"vID",pic:""}]];this.EvtParms["VBTNUPD.CLICK"]=[[{av:"AV14Id",fld:"vID",pic:""}],[{av:"AV14Id",fld:"vID",pic:""}]];this.EvtParms.ENTER=[[],[]];this.EvtParms.GRIDWW_FIRSTPAGE=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{ctrl:"GRIDWW",prop:"Rows"},{av:"AV16Search",fld:"vSEARCH",pic:""},{av:"AV18CountReg",fld:"vCOUNTREG",pic:"ZZZZZZZZZ9",hsh:!0}],[]];this.EvtParms.GRIDWW_PREVPAGE=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{ctrl:"GRIDWW",prop:"Rows"},{av:"AV16Search",fld:"vSEARCH",pic:""},{av:"AV18CountReg",fld:"vCOUNTREG",pic:"ZZZZZZZZZ9",hsh:!0}],[]];this.EvtParms.GRIDWW_NEXTPAGE=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{ctrl:"GRIDWW",prop:"Rows"},{av:"AV16Search",fld:"vSEARCH",pic:""},{av:"AV18CountReg",fld:"vCOUNTREG",pic:"ZZZZZZZZZ9",hsh:!0}],[]];this.EvtParms.GRIDWW_LASTPAGE=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{ctrl:"GRIDWW",prop:"Rows"},{av:"AV16Search",fld:"vSEARCH",pic:""},{av:"AV18CountReg",fld:"vCOUNTREG",pic:"ZZZZZZZZZ9",hsh:!0},{av:"subGridww_Recordcount"}],[]];this.EvtParms.VALIDV_STATUS=[[{ctrl:"vSTATUS"},{av:"AV17Status",fld:"vSTATUS",pic:""}],[{ctrl:"vSTATUS"},{av:"AV17Status",fld:"vSTATUS",pic:""}]];this.EvtParms.VALIDV_EVENT=[[{ctrl:"vEVENT"},{av:"AV10Event",fld:"vEVENT",pic:""}],[{ctrl:"vEVENT"},{av:"AV10Event",fld:"vEVENT",pic:""}]];this.setVCMap("AV18CountReg","vCOUNTREG",0,"int",10,0);this.setVCMap("AV18CountReg","vCOUNTREG",0,"int",10,0);this.setVCMap("AV18CountReg","vCOUNTREG",0,"int",10,0);t.addRefreshingParm({rfrProp:"Rows",gxGrid:"Gridww"});t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar({rfrVar:"AV18CountReg"});t.addRefreshingParm(this.GXValidFnc[16]);t.addRefreshingParm({rfrVar:"AV18CountReg"});this.Initialize()});gx.wi(function(){gx.createParentObj(this.gam_wweventsubscriptions)})