gx.evt.autoSkip=!1;gx.define("gam_wwconnections",!1,function(){var n,t;this.ServerClass="gam_wwconnections";this.PackageName="GeneXus.Security.Backend";this.ServerFullClass="gam_wwconnections.aspx";this.setObjectType("web");this.setAjaxSecurity(!1);this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.DSO="GAMDesignSystem";this.SetStandaloneVars=function(){this.subGridww_Recordcount=gx.fn.getIntegerValue("subGridww_Recordcount",gx.thousandSeparator)};this.s112_client=function(){this.createWebComponent("Wcmessages","GAM_Messages",[])};this.e170g1_client=function(){return this.clearMessages(),this.refreshOutputs([]),this.refreshGrid("Gridww"),this.refreshOutputs([]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e150g2_client=function(){return this.clearMessages(),this.call("gam_connectionentry.aspx",["DSP",this.AV8Name],null,["Mode","pConnectionName"]),this.refreshOutputs([{av:"AV8Name",fld:"vNAME",pic:""}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e160g2_client=function(){return this.clearMessages(),this.call("gam_connectionkeys.aspx",[this.AV8Name],null,["pConnectionName"]),this.refreshOutputs([{av:"AV8Name",fld:"vNAME",pic:""}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e110g2_client=function(){return this.executeServerEvent("'ADDNEW'",!1,null,!1,!1)};this.e140g2_client=function(){return this.executeServerEvent("VBTNUPD.CLICK",!0,arguments[0],!1,!1)};this.e180g2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e190g2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24,25,26,27,28];this.GXLastCtrlId=28;this.GridwwContainer=new gx.grid.grid(this,2,"WbpLvl2",22,"Gridww","Gridww","GridwwContainer",this.CmpContext,this.IsMasterPage,"gam_wwconnections",[],!1,1,!0,!0,10,!0,!1,!1,"",0,"px",0,"px",gx.getMessage("GXM_newrow"),!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);t=this.GridwwContainer;t.addSingleLineEdit("Name",23,"vNAME",gx.getMessage("Connection Name"),"","Name","char",0,"px",254,80,"start","e150g2_client",[],"Name","Name",!0,0,!1,!1,"Attribute",0,"column");t.addSingleLineEdit("Username",24,"vUSERNAME",gx.getMessage("User Name"),"","UserName","char",0,"px",254,80,"start",null,[],"Username","UserName",!0,0,!1,!1,"Attribute",0,"column column-optional");t.addSingleLineEdit("Btnupd",25,"vBTNUPD","","","BtnUpd","char",0,"px",20,20,"start","e140g2_client",[],"Btnupd","BtnUpd",!0,0,!1,!1,"TextActionAttribute",0,"WWTextActionColumn OptionalColumn");t.addSingleLineEdit("Btnkeys",26,"vBTNKEYS","","","BtnKeys","char",0,"px",20,20,"start","e160g2_client",[],"Btnkeys","BtnKeys",!0,0,!1,!1,"TextActionAttribute",0,"WWTextActionColumn OptionalColumn");this.GridwwContainer.emptyText=gx.getMessage("No results found.");this.setGrid(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"GAM_HEADERWWNOFILTERS",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"GAM_HEADERWWNOFILTERS_TABLEACTIONS",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"GAM_HEADERWWNOFILTERS_TITLE",format:0,grid:0,ctrltype:"textblock"};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"GAM_HEADERWWNOFILTERS_ADDNEW",grid:0,evt:"e110g2_client"};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,lvl:0,type:"svchar",len:100,dec:60,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:"e170g1_client",evt_cvcing:null,rgrid:[],fld:"vSEARCH",fmt:0,gxz:"ZV10Search",gxold:"OV10Search",gxvar:"AV10Search",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV10Search=n)},v2z:function(n){n!==undefined&&(gx.O.ZV10Search=n)},v2c:function(){gx.fn.setControlValue("vSEARCH",gx.O.AV10Search,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV10Search=this.val())},val:function(){return gx.fn.getControlValue("vSEARCH")},nac:gx.falseFn};this.declareDomainHdlr(16,function(){});n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"GRIDCONTAINER",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[23]={id:23,lvl:2,type:"char",len:254,dec:0,sign:!1,ro:0,isacc:0,grid:22,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",fmt:0,gxz:"ZV8Name",gxold:"OV8Name",gxvar:"AV8Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV8Name=n)},v2z:function(n){n!==undefined&&(gx.O.ZV8Name=n)},v2c:function(n){gx.fn.setGridControlValue("vNAME",n||gx.fn.currentGridRowImpl(22),gx.O.AV8Name,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV8Name=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vNAME",n||gx.fn.currentGridRowImpl(22))},nac:gx.falseFn,evt:"e150g2_client"};n[24]={id:24,lvl:2,type:"char",len:254,dec:0,sign:!1,ro:0,isacc:0,grid:22,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERNAME",fmt:0,gxz:"ZV11UserName",gxold:"OV11UserName",gxvar:"AV11UserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV11UserName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV11UserName=n)},v2c:function(n){gx.fn.setGridControlValue("vUSERNAME",n||gx.fn.currentGridRowImpl(22),gx.O.AV11UserName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV11UserName=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vUSERNAME",n||gx.fn.currentGridRowImpl(22))},nac:gx.falseFn};n[25]={id:25,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:0,isacc:0,grid:22,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vBTNUPD",fmt:0,gxz:"ZV5BtnUpd",gxold:"OV5BtnUpd",gxvar:"AV5BtnUpd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV5BtnUpd=n)},v2z:function(n){n!==undefined&&(gx.O.ZV5BtnUpd=n)},v2c:function(n){gx.fn.setGridControlValue("vBTNUPD",n||gx.fn.currentGridRowImpl(22),gx.O.AV5BtnUpd,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV5BtnUpd=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vBTNUPD",n||gx.fn.currentGridRowImpl(22))},nac:gx.falseFn,evt:"e140g2_client"};n[26]={id:26,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:0,isacc:0,grid:22,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vBTNKEYS",fmt:0,gxz:"ZV12BtnKeys",gxold:"OV12BtnKeys",gxvar:"AV12BtnKeys",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV12BtnKeys=n)},v2z:function(n){n!==undefined&&(gx.O.ZV12BtnKeys=n)},v2c:function(n){gx.fn.setGridControlValue("vBTNKEYS",n||gx.fn.currentGridRowImpl(22),gx.O.AV12BtnKeys,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV12BtnKeys=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vBTNKEYS",n||gx.fn.currentGridRowImpl(22))},nac:gx.falseFn,evt:"e160g2_client"};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};this.AV10Search="";this.ZV10Search="";this.OV10Search="";this.ZV8Name="";this.OV8Name="";this.ZV11UserName="";this.OV11UserName="";this.ZV5BtnUpd="";this.OV5BtnUpd="";this.ZV12BtnKeys="";this.OV12BtnKeys="";this.AV10Search="";this.AV8Name="";this.AV11UserName="";this.AV5BtnUpd="";this.AV12BtnKeys="";this.Events={e110g2_client:["'ADDNEW'",!0],e140g2_client:["VBTNUPD.CLICK",!0],e180g2_client:["ENTER",!0],e190g2_client:["CANCEL",!0],e170g1_client:["VSEARCH.CONTROLVALUECHANGED",!1],e150g2_client:["VNAME.CLICK",!1],e160g2_client:["VBTNKEYS.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{ctrl:"GRIDWW",prop:"Rows"},{av:"AV10Search",fld:"vSEARCH",pic:""}],[]];this.EvtParms["GRIDWW.LOAD"]=[[{av:"AV10Search",fld:"vSEARCH",pic:""}],[{av:"AV5BtnUpd",fld:"vBTNUPD",pic:""},{av:"AV12BtnKeys",fld:"vBTNKEYS",pic:""},{av:"AV11UserName",fld:"vUSERNAME",pic:""},{av:"AV8Name",fld:"vNAME",pic:""}]];this.EvtParms["VSEARCH.CONTROLVALUECHANGED"]=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{ctrl:"GRIDWW",prop:"Rows"},{av:"AV10Search",fld:"vSEARCH",pic:""}],[]];this.EvtParms["'ADDNEW'"]=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{ctrl:"GRIDWW",prop:"Rows"},{av:"AV10Search",fld:"vSEARCH",pic:""}],[]];this.EvtParms["VNAME.CLICK"]=[[{av:"AV8Name",fld:"vNAME",pic:""}],[{av:"AV8Name",fld:"vNAME",pic:""}]];this.EvtParms["VBTNUPD.CLICK"]=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{ctrl:"GRIDWW",prop:"Rows"},{av:"AV10Search",fld:"vSEARCH",pic:""},{av:"AV8Name",fld:"vNAME",pic:""}],[{av:"AV8Name",fld:"vNAME",pic:""}]];this.EvtParms["VBTNKEYS.CLICK"]=[[{av:"AV8Name",fld:"vNAME",pic:""}],[{av:"AV8Name",fld:"vNAME",pic:""}]];this.EvtParms.ENTER=[[],[]];this.EvtParms.GRIDWW_FIRSTPAGE=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{ctrl:"GRIDWW",prop:"Rows"},{av:"AV10Search",fld:"vSEARCH",pic:""}],[]];this.EvtParms.GRIDWW_PREVPAGE=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{ctrl:"GRIDWW",prop:"Rows"},{av:"AV10Search",fld:"vSEARCH",pic:""}],[]];this.EvtParms.GRIDWW_NEXTPAGE=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{ctrl:"GRIDWW",prop:"Rows"},{av:"AV10Search",fld:"vSEARCH",pic:""}],[]];this.EvtParms.GRIDWW_LASTPAGE=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{ctrl:"GRIDWW",prop:"Rows"},{av:"AV10Search",fld:"vSEARCH",pic:""},{av:"subGridww_Recordcount"}],[]];t.addRefreshingParm({rfrProp:"Rows",gxGrid:"Gridww"});t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingParm(this.GXValidFnc[16]);this.Initialize();this.setComponent({id:"WCMESSAGES",GXClass:null,Prefix:"W0029",lvl:1})});gx.wi(function(){gx.createParentObj(this.gam_wwconnections)})