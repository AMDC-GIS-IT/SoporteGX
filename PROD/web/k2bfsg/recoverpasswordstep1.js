gx.evt.autoSkip=!1;gx.define("k2bfsg.recoverpasswordstep1",!1,function(){var n,t,i;this.ServerClass="k2bfsg.recoverpasswordstep1";this.PackageName="GeneXus.Programs";this.ServerFullClass="k2bfsg.recoverpasswordstep1.aspx";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.DSO="AriesCustom";this.SetStandaloneVars=function(){this.AV9CaptchaIsCorrect=gx.fn.getControlValue("vCAPTCHAISCORRECT");this.AV45UserAuthTypeName=gx.fn.getControlValue("vUSERAUTHTYPENAME");this.AV22LastEmailSent=gx.fn.getDateTimeValue("vLASTEMAILSENT");this.AV63IDP_State=gx.fn.getControlValue("vIDP_STATE");this.AV35ShowDetailedMessages=gx.fn.getControlValue("vSHOWDETAILEDMESSAGES");this.AV15ErrorMessage=gx.fn.getControlValue("vERRORMESSAGE");this.AV6AmountOfCharacters=gx.fn.getIntegerValue("vAMOUNTOFCHARACTERS",",")};this.Validv_Userbirthday=function(){return this.validCliEvt("Validv_Userbirthday",0,function(){try{var n=gx.util.balloon.getNew("vUSERBIRTHDAY");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.AV58UserBirthDay)===0||new gx.date.gxdate(this.AV58UserBirthDay).compare(gx.date.ymdtod(1753,1,1))>=0))try{n.setError("Field User Birth Day is out of range");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.s112_client=function(){};this.e134c2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e154c2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,7,8,9,10,11,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73];this.GXLastCtrlId=73;this.RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTESContainer=gx.uc.getNew(this,12,0,"K2BT_Component","RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTESContainer","Responsivetable_mainattributes_attributes","RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES");t=this.RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTESContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("Icon","Icon","","str");t.setProp("Title","Title","Recover password","str");t.setProp("TitleClass","Titleclass","TextBlock_Subtitle","str");t.setProp("Collapsible","Collapsible",!1,"bool");t.setProp("Open","Open",!0,"bool");t.setProp("ShowBorders","Showborders",!0,"bool");t.setProp("ContainsEditableForm","Containseditableform",!0,"bool");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);this.K2BCONTROLBEAUTIFY1Container=gx.uc.getNew(this,74,29,"K2BControlBeautify","K2BCONTROLBEAUTIFY1Container","K2bcontrolbeautify1","K2BCONTROLBEAUTIFY1");i=this.K2BCONTROLBEAUTIFY1Container;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("UpdateCheckboxes","Updatecheckboxes",!0,"bool");i.setProp("Visible","Visible",!0,"bool");i.setProp("Gx Control Type","Gxcontroltype","","int");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"CONTENTTABLE",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[14]={id:14,fld:"RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES_CONTENT",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"ATTRIBUTESCONTAINERTABLE_RESPONSIVETABLE_MAINATTRIBUTES_ATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"COLUMNS",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"COLUMN",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"TABLE_CONTAINER_USERNAME",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,lvl:0,type:"char",len:60,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERNAME",fmt:0,gxz:"ZV56UserName",gxold:"OV56UserName",gxvar:"AV56UserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV56UserName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV56UserName=n)},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV56UserName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV56UserName=this.val())},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};this.declareDomainHdlr(29,function(){});n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"TABLE_CONTAINER_USEREMAIL",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSEREMAIL",fmt:0,gxz:"ZV57UserEmail",gxold:"OV57UserEmail",gxvar:"AV57UserEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV57UserEmail=n)},v2z:function(n){n!==undefined&&(gx.O.ZV57UserEmail=n)},v2c:function(){gx.fn.setControlValue("vUSEREMAIL",gx.O.AV57UserEmail,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV57UserEmail=this.val())},val:function(){return gx.fn.getControlValue("vUSEREMAIL")},nac:gx.falseFn};this.declareDomainHdlr(35,function(){});n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"TABLE_CONTAINER_USERBIRTHDAY",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Userbirthday,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERBIRTHDAY",fmt:0,gxz:"ZV58UserBirthDay",gxold:"OV58UserBirthDay",gxvar:"AV58UserBirthDay",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[41],ip:[41],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV58UserBirthDay=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV58UserBirthDay=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("vUSERBIRTHDAY",gx.O.AV58UserBirthDay,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV58UserBirthDay=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("vUSERBIRTHDAY")},nac:gx.falseFn};this.declareDomainHdlr(41,function(){});n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,fld:"TABLE_CONTAINER_USERFIRSTNAME",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,lvl:0,type:"char",len:60,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERFIRSTNAME",fmt:0,gxz:"ZV59UserFirstName",gxold:"OV59UserFirstName",gxvar:"AV59UserFirstName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV59UserFirstName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV59UserFirstName=n)},v2c:function(){gx.fn.setControlValue("vUSERFIRSTNAME",gx.O.AV59UserFirstName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV59UserFirstName=this.val())},val:function(){return gx.fn.getControlValue("vUSERFIRSTNAME")},nac:gx.falseFn};this.declareDomainHdlr(47,function(){});n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"COLUMN1",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"TEXTBLOCK_CAPTCHADESCRIPTION_CELLCONTAINERTABLE",grid:0};n[53]={id:53,fld:"CAPTCHADESCRIPTION",format:0,grid:0,ctrltype:"textblock"};n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"TABLE_CONTAINER_CAPTCHAIMAGE",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,lvl:0,type:"bits",len:1024,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCAPTCHAIMAGE",fmt:0,gxz:"ZV60CaptchaImage",gxold:"OV60CaptchaImage",gxvar:"AV60CaptchaImage",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV60CaptchaImage=n)},v2z:function(n){n!==undefined&&(gx.O.ZV60CaptchaImage=n)},v2c:function(){gx.fn.setMultimediaValue("vCAPTCHAIMAGE",gx.O.AV60CaptchaImage,gx.O.AV69Captchaimage_GXI);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.AV69Captchaimage_GXI=this.val_GXI();this.val()!==undefined&&(gx.O.AV60CaptchaImage=this.val())},val:function(){return gx.fn.getBlobValue("vCAPTCHAIMAGE")},val_GXI:function(){return gx.fn.getControlValue("vCAPTCHAIMAGE_GXI")},gxvar_GXI:"AV69Captchaimage_GXI",nac:gx.falseFn};this.declareDomainHdlr(58,function(){});n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"TABLE_CONTAINER_CAPTCHATEXT",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,lvl:0,type:"char",len:50,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCAPTCHATEXT",fmt:0,gxz:"ZV61CaptchaText",gxold:"OV61CaptchaText",gxvar:"AV61CaptchaText",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV61CaptchaText=n)},v2z:function(n){n!==undefined&&(gx.O.ZV61CaptchaText=n)},v2c:function(){gx.fn.setControlValue("vCAPTCHATEXT",gx.O.AV61CaptchaText,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV61CaptchaText=this.val())},val:function(){return gx.fn.getControlValue("vCAPTCHATEXT")},nac:gx.falseFn};this.declareDomainHdlr(63,function(){});n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"",grid:0};n[66]={id:66,fld:"RESPONSIVETABLE_CONTAINERNODE_ACTIONS",grid:0};n[67]={id:67,fld:"",grid:0};n[68]={id:68,fld:"",grid:0};n[69]={id:69,fld:"ACTIONSCONTAINERTABLELEFT_ACTIONS",grid:0};n[70]={id:70,fld:"",grid:0};n[71]={id:71,fld:"CONFIRM",grid:0,evt:"e134c2_client",std:"ENTER"};n[72]={id:72,fld:"",grid:0};n[73]={id:73,fld:"",grid:0};this.AV56UserName="";this.ZV56UserName="";this.OV56UserName="";this.AV57UserEmail="";this.ZV57UserEmail="";this.OV57UserEmail="";this.AV58UserBirthDay=gx.date.nullDate();this.ZV58UserBirthDay=gx.date.nullDate();this.OV58UserBirthDay=gx.date.nullDate();this.AV59UserFirstName="";this.ZV59UserFirstName="";this.OV59UserFirstName="";this.AV69Captchaimage_GXI="";this.AV60CaptchaImage="";this.ZV60CaptchaImage="";this.OV60CaptchaImage="";this.AV61CaptchaText="";this.ZV61CaptchaText="";this.OV61CaptchaText="";this.AV56UserName="";this.AV57UserEmail="";this.AV58UserBirthDay=gx.date.nullDate();this.AV59UserFirstName="";this.AV60CaptchaImage="";this.AV61CaptchaText="";this.AV63IDP_State="";this.AV9CaptchaIsCorrect=!1;this.AV45UserAuthTypeName="";this.AV22LastEmailSent=gx.date.nullDate();this.AV35ShowDetailedMessages=!1;this.AV15ErrorMessage="";this.AV6AmountOfCharacters=0;this.Events={e134c2_client:["ENTER",!0],e154c2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"AV45UserAuthTypeName",fld:"vUSERAUTHTYPENAME",pic:"",hsh:!0},{av:"AV6AmountOfCharacters",fld:"vAMOUNTOFCHARACTERS",pic:"ZZZ9",hsh:!0}],[{av:'gx.fn.getCtrlProperty("vUSERBIRTHDAY","Visible")',ctrl:"vUSERBIRTHDAY",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vUSEREMAIL","Visible")',ctrl:"vUSEREMAIL",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vUSERFIRSTNAME","Visible")',ctrl:"vUSERFIRSTNAME",prop:"Visible"}]];this.EvtParms.ENTER=[[{av:"AV9CaptchaIsCorrect",fld:"vCAPTCHAISCORRECT",pic:""},{av:"AV56UserName",fld:"vUSERNAME",pic:""},{av:"AV57UserEmail",fld:"vUSEREMAIL",pic:""},{av:"AV59UserFirstName",fld:"vUSERFIRSTNAME",pic:""},{av:"AV58UserBirthDay",fld:"vUSERBIRTHDAY",pic:""},{av:"AV45UserAuthTypeName",fld:"vUSERAUTHTYPENAME",pic:"",hsh:!0},{av:"AV61CaptchaText",fld:"vCAPTCHATEXT",pic:""},{av:"AV22LastEmailSent",fld:"vLASTEMAILSENT",pic:"99/99/99 99:99"},{av:"AV63IDP_State",fld:"vIDP_STATE",pic:""},{av:"AV35ShowDetailedMessages",fld:"vSHOWDETAILEDMESSAGES",pic:""},{av:"AV15ErrorMessage",fld:"vERRORMESSAGE",pic:""},{av:"AV6AmountOfCharacters",fld:"vAMOUNTOFCHARACTERS",pic:"ZZZ9",hsh:!0}],[{av:"AV15ErrorMessage",fld:"vERRORMESSAGE",pic:""},{av:"AV9CaptchaIsCorrect",fld:"vCAPTCHAISCORRECT",pic:""},{av:"AV56UserName",fld:"vUSERNAME",pic:""},{av:"AV63IDP_State",fld:"vIDP_STATE",pic:""},{av:"AV35ShowDetailedMessages",fld:"vSHOWDETAILEDMESSAGES",pic:""},{av:'gx.fn.getCtrlProperty("CAPTCHADESCRIPTION","Visible")',ctrl:"CAPTCHADESCRIPTION",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vCAPTCHAIMAGE","Visible")',ctrl:"vCAPTCHAIMAGE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vCAPTCHATEXT","Visible")',ctrl:"vCAPTCHATEXT",prop:"Visible"},{av:"AV61CaptchaText",fld:"vCAPTCHATEXT",pic:""},{av:"AV60CaptchaImage",fld:"vCAPTCHAIMAGE",pic:""},{av:"AV22LastEmailSent",fld:"vLASTEMAILSENT",pic:"99/99/99 99:99"}]];this.EvtParms.VALIDV_USERBIRTHDAY=[[],[]];this.EnterCtrl=["CONFIRM"];this.setVCMap("AV9CaptchaIsCorrect","vCAPTCHAISCORRECT",0,"boolean",4,0);this.setVCMap("AV45UserAuthTypeName","vUSERAUTHTYPENAME",0,"char",60,0);this.setVCMap("AV22LastEmailSent","vLASTEMAILSENT",0,"dtime",8,5);this.setVCMap("AV63IDP_State","vIDP_STATE",0,"char",60,0);this.setVCMap("AV35ShowDetailedMessages","vSHOWDETAILEDMESSAGES",0,"boolean",4,0);this.setVCMap("AV15ErrorMessage","vERRORMESSAGE",0,"char",500,0);this.setVCMap("AV6AmountOfCharacters","vAMOUNTOFCHARACTERS",0,"int",4,0);this.Initialize();this.setSDTMapping("GeneXusSecurity\\GAMRole",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMRoleFilter",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMRepository",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMUser",{Attributes:{sdt:"GeneXusSecurity\\GAMUserAttribute"}});this.setSDTMapping("K2BActivityList.K2BActivityListItem",{Activity:{sdt:"K2BActivity"}});this.setSDTMapping("GeneXusSecurity\\GAMApplication",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMApplicationPermission",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMApplicationMenuOption",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMApplicationMenu",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMSession",{User:{sdt:"GeneXusSecurity\\GAMUser"},InitialProperties:{sdt:"GeneXusSecurity\\GAMProperty"},SecurityPolicy:{sdt:"GeneXusSecurity\\GAMSecurityPolicy"}});this.setSDTMapping("GeneXusSecurity\\GAMLoginAdditionalParameters",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("K2BTrnContext",{TransactionName:{extr:"Transaction"},CallerUrl:{extr:"CallerUrl"},EntityManagerName:{extr:"EMName"},EntityManagerNextTaskCode:{extr:"NextTaskCode"},EntityManagerNextTaskMode:{extr:"NextTaskMode"},EntityManagerEncryptUrlParameters:{extr:"EncryptUrlParms"},ReturnMode:{extr:"ReturnMode"},SavePK:{extr:"SavePK"},AfterInsert:{sdt:"K2BTrnNavigation"},AfterUpdate:{sdt:"K2BTrnNavigation"},AfterDelete:{sdt:"K2BTrnNavigation"},Attributes:{extr:"Attributes"}});this.setSDTMapping("GeneXusSecurity\\GAMAuthenticationTypeFilter",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMAuthenticationType",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMEventSubscription",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMSecurityPolicyFilter",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMSecurityPolicy",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}})});gx.wi(function(){gx.createParentObj(this.k2bfsg.recoverpasswordstep1)})