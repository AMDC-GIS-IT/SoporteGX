gx.evt.autoSkip=!1;gx.define("k2btools.designsystems.aries.masterpage2_horizontalmenu",!1,function(){var n,i,t;this.ServerClass="k2btools.designsystems.aries.masterpage2_horizontalmenu";this.PackageName="GeneXus.Programs";this.ServerFullClass="k2btools.designsystems.aries.masterpage2_horizontalmenu.aspx";this.setObjectType("web");this.IsMasterPage=!0;this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.DSO="K2BToolsDesignSystemsAriesAries";this.SetStandaloneVars=function(){};this.e110u1_client=function(){return this.clearMessages(),gx.text.compare(gx.fn.getCtrlProperty("MENUCONTAINER_MPAGE","Class"),"K2BToolsMenuContainerVisibleCompact")!=0?(gx.fn.setCtrlProperty("MENUCONTAINER_MPAGE","Class","K2BToolsMenuContainerVisibleCompact"),gx.fn.setCtrlProperty("MENUTOGGLE_MPAGE","Class",gx.fn.getCtrlProperty("MENUTOGGLE_MPAGE","Class")+" K2BToolsButton_BtnToggleActive")):(gx.fn.setCtrlProperty("MENUCONTAINER_MPAGE","Class","K2BToolsMenuContainerInvisibleCompact"),gx.fn.setCtrlProperty("MENUTOGGLE_MPAGE","Class","K2BToolsButton_BtnToggle")),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("MENUCONTAINER_MPAGE","Class")',ctrl:"MENUCONTAINER_MPAGE",prop:"Class"},{ctrl:"MENUTOGGLE_MPAGE",prop:"Class"}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e140u1_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("MYACCOUNTMENU_MPAGE","Visible")==!1?gx.fn.setCtrlProperty("MYACCOUNTMENU_MPAGE","Visible",!0):gx.fn.setCtrlProperty("MYACCOUNTMENU_MPAGE","Visible",!1),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("MYACCOUNTMENU_MPAGE","Visible")',ctrl:"MYACCOUNTMENU_MPAGE",prop:"Visible"}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e150u1_client=function(){return this.clearMessages(),this.call("k2bchangepassword.aspx",[],null,[]),this.refreshOutputs([]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e120u1_client=function(){return this.clearMessages(),this.call("k2bhome.aspx",[],null,[]),this.refreshOutputs([]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e130u1_client=function(){return this.clearMessages(),this.call("k2bhome.aspx",[],null,[]),this.refreshOutputs([]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e180u2_client=function(){return this.executeServerEvent("SIGNOUT_MPAGE",!0,null,!1,!1)};this.e200u2_client=function(){return this.executeServerEvent("ENTER_MPAGE",!0,null,!1,!1)};this.e210u2_client=function(){return this.executeServerEvent("CANCEL_MPAGE",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23,24,26,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,59,60,62,63,64,65,66];this.GXLastCtrlId=66;this.K2BHORIZONTALMENU1_MPAGEContainer=gx.uc.getNew(this,21,0,"K2BHorizontalMenu","K2BHORIZONTALMENU1_MPAGEContainer","K2bhorizontalmenu1","K2BHORIZONTALMENU1_MPAGE");i=this.K2BHORIZONTALMENU1_MPAGEContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("IncludeSearch","Includesearch",!0,"bool");i.setProp("SearchInviteMessage","Searchinvitemessage","Search","str");i.setProp("ExpandDirection","Expanddirection","Down","str");i.addV2CFunction("AV6MenuItems","vMENUITEMS_MPAGE","SetMenuItems");i.addC2VFunction(function(n){n.ParentObject.AV6MenuItems=n.GetMenuItems();gx.fn.setControlValue("vMENUITEMS_MPAGE",n.ParentObject.AV6MenuItems)});i.setProp("SelectedItem","Selecteditem","","str");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);this.K2BACCORDIONMENU_MPAGEContainer=gx.uc.getNew(this,57,34,"K2BAccordionMenu","K2BACCORDIONMENU_MPAGEContainer","K2baccordionmenu","K2BACCORDIONMENU_MPAGE");t=this.K2BACCORDIONMENU_MPAGEContainer;t.setProp("Class","Class","","char");t.setProp("Enabled","Enabled",!0,"boolean");t.setProp("IncludeSearch","Includesearch",!1,"bool");t.setProp("SearchInviteMessage","Searchinvitemessage","Search","str");t.setProp("Toggle","Toggle",!0,"bool");t.setProp("DoubleTapGo","Doubletapgo",!1,"bool");t.addV2CFunction("AV6MenuItems","vMENUITEMS_MPAGE","SetMenuItems");t.addC2VFunction(function(n){n.ParentObject.AV6MenuItems=n.GetMenuItems();gx.fn.setControlValue("vMENUITEMS_MPAGE",n.ParentObject.AV6MenuItems)});t.setProp("SelectedItem","Selecteditem","","str");t.setProp("Visible","Visible",!0,"bool");t.setC2ShowFunction(function(n){n.show()});this.setUserControl(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"SECTION2",grid:0};n[6]={id:6,fld:"SECTION3",grid:0};n[7]={id:7,fld:"TABLE1",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"HEADER",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"TOPSTART",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"MENUTOGGLE",grid:0,evt:"e110u1_client"};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"APPLICATIONICON",grid:0,evt:"e120u1_client"};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"APPLICATIONNAME",format:0,grid:0,evt:"e130u1_client",ctrltype:"textblock"};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"MENUHEADERCONTAINER",grid:0};n[20]={id:20,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"TOPEND",grid:0};n[24]={id:24,fld:"",grid:0};n[26]={id:26,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"TABLE2",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"MYACCOUNT",grid:0};n[32]={id:32,fld:"USERINITIALSTEXTBLOCKSMALL",format:0,grid:0,evt:"e140u1_client",ctrltype:"textblock"};n[33]={id:33,fld:"",grid:0};n[34]={id:34,lvl:0,type:"bits",len:1024,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERAVATARSMALL_MPAGE",fmt:0,gxz:"ZV12UserAvatarSmall",gxold:"OV12UserAvatarSmall",gxvar:"AV12UserAvatarSmall",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV12UserAvatarSmall=n)},v2z:function(n){n!==undefined&&(gx.O.ZV12UserAvatarSmall=n)},v2c:function(){gx.fn.setMultimediaValue("vUSERAVATARSMALL_MPAGE",gx.O.AV12UserAvatarSmall,gx.O.AV17Useravatarsmall_GXI)},c2v:function(){gx.O.AV17Useravatarsmall_GXI=this.val_GXI();this.val()!==undefined&&(gx.O.AV12UserAvatarSmall=this.val())},val:function(){return gx.fn.getBlobValue("vUSERAVATARSMALL_MPAGE")},val_GXI:function(){return gx.fn.getControlValue("vUSERAVATARSMALL_GXI_MPAGE")},gxvar_GXI:"AV17Useravatarsmall_GXI",nac:gx.falseFn,evt:"e140u1_client"};n[35]={id:35,fld:"USERNAMETEXTBLOCK",format:0,grid:0,evt:"e140u1_client",ctrltype:"textblock"};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"MYACCOUNTMENU",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"SECTION1",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,lvl:0,type:"bits",len:1024,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERAVATAR_MPAGE",fmt:0,gxz:"ZV11UserAvatar",gxold:"OV11UserAvatar",gxvar:"AV11UserAvatar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV11UserAvatar=n)},v2z:function(n){n!==undefined&&(gx.O.ZV11UserAvatar=n)},v2c:function(){gx.fn.setMultimediaValue("vUSERAVATAR_MPAGE",gx.O.AV11UserAvatar,gx.O.AV18Useravatar_GXI)},c2v:function(){gx.O.AV18Useravatar_GXI=this.val_GXI();this.val()!==undefined&&(gx.O.AV11UserAvatar=this.val())},val:function(){return gx.fn.getBlobValue("vUSERAVATAR_MPAGE")},val_GXI:function(){return gx.fn.getControlValue("vUSERAVATAR_GXI_MPAGE")},gxvar_GXI:"AV18Useravatar_GXI",nac:gx.falseFn};n[42]={id:42,fld:"USERINITIALSTEXTBLOCK",format:0,grid:0,ctrltype:"textblock"};n[43]={id:43,fld:"USERNAME",format:0,grid:0,ctrltype:"textblock"};n[44]={id:44,fld:"USEREMAIL",format:0,grid:0,ctrltype:"textblock"};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"CHANGEPASSWORD",format:0,grid:0,evt:"e150u1_client",ctrltype:"textblock"};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"SIGNOUT",format:0,grid:0,evt:"e180u2_client",ctrltype:"textblock"};n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"MIDDLE",grid:0};n[51]={id:51,fld:"MENUCELL",grid:0};n[52]={id:52,fld:"CENTERSTART",grid:0};n[53]={id:53,fld:"",grid:0};n[54]={id:54,fld:"MENUCONTAINER",grid:0};n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[58]={id:58,fld:"",grid:0};n[59]={id:59,fld:"CENTERMIDDLE",grid:0};n[60]={id:60,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,fld:"CENTEREND",grid:0};n[64]={id:64,fld:"FOOTERCONTAINER",grid:0};n[65]={id:65,fld:"FOOTERCONTENTS",grid:0};n[66]={id:66,fld:"",grid:0};this.AV17Useravatarsmall_GXI="";this.AV12UserAvatarSmall="";this.ZV12UserAvatarSmall="";this.OV12UserAvatarSmall="";this.AV18Useravatar_GXI="";this.AV11UserAvatar="";this.ZV11UserAvatar="";this.OV11UserAvatar="";this.AV6MenuItems=[];this.AV12UserAvatarSmall="";this.AV11UserAvatar="";this.Events={e180u2_client:["SIGNOUT_MPAGE",!0],e200u2_client:["ENTER_MPAGE",!0],e210u2_client:["CANCEL_MPAGE",!0],e110u1_client:["TOGGLEMENU_MPAGE",!1],e140u1_client:["OPENTABLE_MPAGE",!1],e150u1_client:["CHANGEPASSWORD_MPAGE",!1],e120u1_client:["APPLICATIONICON_MPAGE.CLICK_MPAGE",!1],e130u1_client:["APPLICATIONNAME_MPAGE.CLICK_MPAGE",!1]};this.EvtParms.REFRESH_MPAGE=[[],[]];this.EvtParms.TOGGLEMENU_MPAGE=[[{av:'gx.fn.getCtrlProperty("MENUCONTAINER_MPAGE","Class")',ctrl:"MENUCONTAINER_MPAGE",prop:"Class"},{ctrl:"MENUTOGGLE_MPAGE",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("MENUCONTAINER_MPAGE","Class")',ctrl:"MENUCONTAINER_MPAGE",prop:"Class"},{ctrl:"MENUTOGGLE_MPAGE",prop:"Class"}]];this.EvtParms.OPENTABLE_MPAGE=[[{av:'gx.fn.getCtrlProperty("MYACCOUNTMENU_MPAGE","Visible")',ctrl:"MYACCOUNTMENU_MPAGE",prop:"Visible"}],[{av:'gx.fn.getCtrlProperty("MYACCOUNTMENU_MPAGE","Visible")',ctrl:"MYACCOUNTMENU_MPAGE",prop:"Visible"}]];this.EvtParms.CHANGEPASSWORD_MPAGE=[[],[]];this.EvtParms.SIGNOUT_MPAGE=[[],[]];this.EvtParms["APPLICATIONICON_MPAGE.CLICK_MPAGE"]=[[],[]];this.EvtParms["APPLICATIONNAME_MPAGE.CLICK_MPAGE"]=[[],[]];this.EvtParms.ENTER_MPAGE=[[],[]];this.Initialize();this.setComponent({id:"NOTIFICATIONSCOMPONENT",GXClass:"k2btools.designsystems.aries.notificationsviewer",Prefix:"MPW0025",lvl:1});this.setComponent({id:"UICONFIGURATION",GXClass:"k2btools.designsystems.aries.uiconfiguration",Prefix:"MPW0027",lvl:1});this.setComponent({id:"FOOTERCOMPONENT",GXClass:"k2btools.designsystems.aries.samplefootercomponent",Prefix:"MPW0067",lvl:1})});gx.wi(function(){gx.createMasterPage(k2btools.designsystems.aries.masterpage2_horizontalmenu)})