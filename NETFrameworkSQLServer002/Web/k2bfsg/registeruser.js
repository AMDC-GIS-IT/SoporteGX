gx.evt.autoSkip=!1;gx.define("k2bfsg.registeruser",!1,function(){var n,t,i;this.ServerClass="k2bfsg.registeruser";this.PackageName="GeneXus.Programs";this.ServerFullClass="k2bfsg.registeruser.aspx";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.DSO="AriesCustom";this.SetStandaloneVars=function(){this.AV30AmountOfCharacters=gx.fn.getIntegerValue("vAMOUNTOFCHARACTERS",gx.thousandSeparator);this.AV25UserRememberMe=gx.fn.getIntegerValue("vUSERREMEMBERME",gx.thousandSeparator)};this.s112_client=function(){};this.e114d1_client=function(){return this.clearMessages(),this.s142_client(),this.refreshOutputs([]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.s142_client=function(){this.call("k2bfsg.login.aspx",[],null,[])};this.e144d2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e164d2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,11,12,13,14,15,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81];this.GXLastCtrlId=81;this.RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTESContainer=gx.uc.getNew(this,16,0,"K2BT_Component","RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTESContainer","Responsivetable_mainattributes_attributes","RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES");t=this.RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Icon","Icon","","str");t.setProp("Title","Title",gx.getMessage("K2BT_GAM_NewUserInformation"),"str");t.setProp("TitleClass","Titleclass","TextBlock_Subtitle","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Open","Open",!0,"bool");t.setProp("ShowBorders","Showborders",!0,"bool");t.setProp("ContainsEditableForm","Containseditableform",!0,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);this.K2BCONTROLBEAUTIFY1Container=gx.uc.getNew(this,82,29,"K2BControlBeautify","K2BCONTROLBEAUTIFY1Container","K2bcontrolbeautify1","K2BCONTROLBEAUTIFY1");i=this.K2BCONTROLBEAUTIFY1Container;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("UpdateCheckboxes","Updatecheckboxes",!0,"bool");i.setProp("Visible","Visible",!0,"bool");i.setProp("Gx Control Type","Gxcontroltype","","int");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TITLECONTAINERSECTION",grid:0};n[7]={id:7,fld:"TITLE",format:0,grid:0,ctrltype:"textblock"};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"CONTENTTABLE",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"",grid:0};n[18]={id:18,fld:"RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES_CONTENT",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"ATTRIBUTESCONTAINERTABLE_RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES",grid:0};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"TEXTBLOCK_TEXTBLOCK_CELLCONTAINERTABLE",grid:0};n[25]={id:25,fld:"TEXTBLOCK",format:0,grid:0,ctrltype:"textblock"};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vLOGIN_ACTION",fmt:0,gxz:"ZV34Login_Action",gxold:"OV34Login_Action",gxvar:"AV34Login_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV34Login_Action=n)},v2z:function(n){n!==undefined&&(gx.O.ZV34Login_Action=n)},v2c:function(){gx.fn.setControlValue("vLOGIN_ACTION",gx.O.AV34Login_Action,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV34Login_Action=this.val())},val:function(){return gx.fn.getControlValue("vLOGIN_ACTION")},nac:gx.falseFn,evt:"e114d1_client"};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"TABLE_CONTAINER_FIRSTNAME",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,lvl:0,type:"char",len:60,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFIRSTNAME",fmt:0,gxz:"ZV13FirstName",gxold:"OV13FirstName",gxvar:"AV13FirstName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV13FirstName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV13FirstName=n)},v2c:function(){gx.fn.setControlValue("vFIRSTNAME",gx.O.AV13FirstName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV13FirstName=this.val())},val:function(){return gx.fn.getControlValue("vFIRSTNAME")},nac:gx.falseFn};this.declareDomainHdlr(35,function(){});n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"TABLE_CONTAINER_LASTNAME",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,lvl:0,type:"char",len:60,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vLASTNAME",fmt:0,gxz:"ZV15LastName",gxold:"OV15LastName",gxvar:"AV15LastName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV15LastName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV15LastName=n)},v2c:function(){gx.fn.setControlValue("vLASTNAME",gx.O.AV15LastName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV15LastName=this.val())},val:function(){return gx.fn.getControlValue("vLASTNAME")},nac:gx.falseFn};this.declareDomainHdlr(40,function(){});n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"TABLE_CONTAINER_USERNAME",grid:0};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,lvl:0,type:"svchar",len:100,dec:60,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERNAME",fmt:0,gxz:"ZV24UserName",gxold:"OV24UserName",gxvar:"AV24UserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV24UserName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV24UserName=n)},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV24UserName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV24UserName=this.val())},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};this.declareDomainHdlr(46,function(){});n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"TABLE_CONTAINER_EMAIL",grid:0};n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vEMAIL",fmt:0,gxz:"ZV10EMail",gxold:"OV10EMail",gxvar:"AV10EMail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV10EMail=n)},v2z:function(n){n!==undefined&&(gx.O.ZV10EMail=n)},v2c:function(){gx.fn.setControlValue("vEMAIL",gx.O.AV10EMail,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV10EMail=this.val())},val:function(){return gx.fn.getControlValue("vEMAIL")},nac:gx.falseFn};this.declareDomainHdlr(51,function(){});n[52]={id:52,fld:"",grid:0};n[53]={id:53,fld:"",grid:0};n[54]={id:54,fld:"TABLE_CONTAINER_PASSWORD",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,lvl:0,type:"char",len:50,dec:0,sign:!1,isPwd:!0,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPASSWORD",fmt:0,gxz:"ZV18Password",gxold:"OV18Password",gxvar:"AV18Password",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV18Password=n)},v2z:function(n){n!==undefined&&(gx.O.ZV18Password=n)},v2c:function(){gx.fn.setControlValue("vPASSWORD",gx.O.AV18Password,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV18Password=this.val())},val:function(){return gx.fn.getControlValue("vPASSWORD")},nac:gx.falseFn};this.declareDomainHdlr(57,function(){});n[58]={id:58,fld:"",grid:0};n[59]={id:59,fld:"TABLE_CONTAINER_PASSWORDCONFIRMATION",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,lvl:0,type:"char",len:50,dec:0,sign:!1,isPwd:!0,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPASSWORDCONFIRMATION",fmt:0,gxz:"ZV19PasswordConfirmation",gxold:"OV19PasswordConfirmation",gxvar:"AV19PasswordConfirmation",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV19PasswordConfirmation=n)},v2z:function(n){n!==undefined&&(gx.O.ZV19PasswordConfirmation=n)},v2c:function(){gx.fn.setControlValue("vPASSWORDCONFIRMATION",gx.O.AV19PasswordConfirmation,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV19PasswordConfirmation=this.val())},val:function(){return gx.fn.getControlValue("vPASSWORDCONFIRMATION")},nac:gx.falseFn};this.declareDomainHdlr(62,function(){});n[63]={id:63,fld:"",grid:0};n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"I_USERREGION_USERREGION",grid:0};n[66]={id:66,fld:"SECTION1",grid:0};n[67]={id:67,fld:"",grid:0};n[68]={id:68,fld:"",grid:0};n[69]={id:69,lvl:0,type:"bits",len:1024,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCAPTCHAIMAGE",fmt:0,gxz:"ZV8CaptchaImage",gxold:"OV8CaptchaImage",gxvar:"AV8CaptchaImage",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV8CaptchaImage=n)},v2z:function(n){n!==undefined&&(gx.O.ZV8CaptchaImage=n)},v2c:function(){gx.fn.setMultimediaValue("vCAPTCHAIMAGE",gx.O.AV8CaptchaImage,gx.O.AV40Captchaimage_GXI)},c2v:function(){gx.O.AV40Captchaimage_GXI=this.val_GXI();this.val()!==undefined&&(gx.O.AV8CaptchaImage=this.val())},val:function(){return gx.fn.getBlobValue("vCAPTCHAIMAGE")},val_GXI:function(){return gx.fn.getControlValue("vCAPTCHAIMAGE_GXI")},gxvar_GXI:"AV40Captchaimage_GXI",nac:gx.falseFn};n[70]={id:70,fld:"",grid:0};n[71]={id:71,lvl:0,type:"char",len:50,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCAPTCHATEXT",fmt:0,gxz:"ZV9CaptchaText",gxold:"OV9CaptchaText",gxvar:"AV9CaptchaText",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV9CaptchaText=n)},v2z:function(n){n!==undefined&&(gx.O.ZV9CaptchaText=n)},v2c:function(){gx.fn.setControlValue("vCAPTCHATEXT",gx.O.AV9CaptchaText,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV9CaptchaText=this.val())},val:function(){return gx.fn.getControlValue("vCAPTCHATEXT")},nac:gx.falseFn};this.declareDomainHdlr(71,function(){});n[72]={id:72,fld:"",grid:0};n[73]={id:73,fld:"",grid:0};n[74]={id:74,fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS",grid:0};n[75]={id:75,fld:"",grid:0};n[76]={id:76,fld:"",grid:0};n[77]={id:77,fld:"ACTIONSCONTAINERTABLELEFT_ACTIONS",grid:0};n[78]={id:78,fld:"",grid:0};n[79]={id:79,fld:"CREATEACCOUNT",grid:0,evt:"e144d2_client",std:"ENTER"};n[80]={id:80,fld:"",grid:0};n[81]={id:81,fld:"",grid:0};this.AV34Login_Action="";this.ZV34Login_Action="";this.OV34Login_Action="";this.AV13FirstName="";this.ZV13FirstName="";this.OV13FirstName="";this.AV15LastName="";this.ZV15LastName="";this.OV15LastName="";this.AV24UserName="";this.ZV24UserName="";this.OV24UserName="";this.AV10EMail="";this.ZV10EMail="";this.OV10EMail="";this.AV18Password="";this.ZV18Password="";this.OV18Password="";this.AV19PasswordConfirmation="";this.ZV19PasswordConfirmation="";this.OV19PasswordConfirmation="";this.AV40Captchaimage_GXI="";this.AV8CaptchaImage="";this.ZV8CaptchaImage="";this.OV8CaptchaImage="";this.AV9CaptchaText="";this.ZV9CaptchaText="";this.OV9CaptchaText="";this.AV34Login_Action="";this.AV13FirstName="";this.AV15LastName="";this.AV24UserName="";this.AV10EMail="";this.AV18Password="";this.AV19PasswordConfirmation="";this.AV8CaptchaImage="";this.AV9CaptchaText="";this.AV30AmountOfCharacters=0;this.AV25UserRememberMe=0;this.Events={e144d2_client:["ENTER",!0],e164d2_client:["CANCEL",!0],e114d1_client:["'E_LOGIN'",!1]};this.EvtParms.REFRESH=[[{av:"AV30AmountOfCharacters",fld:"vAMOUNTOFCHARACTERS",pic:"ZZZ9",hsh:!0},{av:"AV25UserRememberMe",fld:"vUSERREMEMBERME",pic:"Z9",hsh:!0}],[{av:"AV34Login_Action",fld:"vLOGIN_ACTION",pic:""},{av:"AV8CaptchaImage",fld:"vCAPTCHAIMAGE",pic:""}]];this.EvtParms.ENTER=[[{av:"AV9CaptchaText",fld:"vCAPTCHATEXT",pic:""},{av:"AV18Password",fld:"vPASSWORD",pic:""},{av:"AV19PasswordConfirmation",fld:"vPASSWORDCONFIRMATION",pic:""},{av:"AV24UserName",fld:"vUSERNAME",pic:""},{av:"AV10EMail",fld:"vEMAIL",pic:""},{av:"AV13FirstName",fld:"vFIRSTNAME",pic:""},{av:"AV15LastName",fld:"vLASTNAME",pic:""},{av:"AV25UserRememberMe",fld:"vUSERREMEMBERME",pic:"Z9",hsh:!0}],[]];this.EvtParms["'E_LOGIN'"]=[[],[]];this.EnterCtrl=["CREATEACCOUNT"];this.setVCMap("AV30AmountOfCharacters","vAMOUNTOFCHARACTERS",0,"int",4,0);this.setVCMap("AV25UserRememberMe","vUSERREMEMBERME",0,"int",2,0);this.Initialize();this.setSDTMapping("GeneXusSecurity\\GAMApplication",{Environment:{sdt:"GeneXusSecurity\\GAMApplicationEnvironment"},Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMApplicationPermission",{Environment:{sdt:"GeneXusSecurity\\GAMApplicationEnvironment"},Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMPermission",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMSession",{User:{sdt:"GeneXusSecurity\\GAMUser"},InitialProperties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMUser",{Attributes:{sdt:"GeneXusSecurity\\GAMUserAttribute"}});this.setSDTMapping("GeneXusSecurity\\GAMRepository",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMMenuOptionList",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"},Nodes:{sdt:"GeneXusSecurity\\GAMMenuOptionList"}});this.setSDTMapping("K2BActivityList.K2BActivityListItem",{Activity:{sdt:"K2BActivity"}});this.setSDTMapping("GeneXusSecurity\\GAMApplicationMenu",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMLoginAdditionalParameters",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("K2BTrnContext",{TransactionName:{extr:"Transaction"},CallerUrl:{extr:"CallerUrl"},EntityManagerName:{extr:"EMName"},EntityManagerNextTaskCode:{extr:"NextTaskCode"},EntityManagerNextTaskMode:{extr:"NextTaskMode"},EntityManagerEncryptUrlParameters:{extr:"EncryptUrlParms"},ReturnMode:{extr:"ReturnMode"},SavePK:{extr:"SavePK"},AfterInsert:{sdt:"K2BTrnNavigation"},AfterUpdate:{sdt:"K2BTrnNavigation"},AfterDelete:{sdt:"K2BTrnNavigation"},Attributes:{extr:"Attributes"}});this.setSDTMapping("GeneXusSecurity\\GAMAuthenticationTypeFilter",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMAuthenticationType",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMApplicationFilter",{Environment:{sdt:"GeneXusSecurity\\GAMApplicationEnvironment"},Properties:{sdt:"GeneXusSecurity\\GAMProperty"}})});gx.wi(function(){gx.createParentObj(this.k2bfsg.registeruser)})