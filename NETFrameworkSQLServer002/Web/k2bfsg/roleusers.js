gx.evt.autoSkip=!1;gx.define("k2bfsg.roleusers",!0,function(n){var t,i,r,u;this.ServerClass="k2bfsg.roleusers";this.PackageName="GeneXus.Programs";this.ServerFullClass="k2bfsg.roleusers.aspx";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.DSO="AriesCustom";this.SetStandaloneVars=function(){this.AV16CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",gx.thousandSeparator);this.AV18ClassCollection_Grid=gx.fn.getControlValue("vCLASSCOLLECTION_GRID");this.AV41Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV15GridConfiguration=gx.fn.getControlValue("vGRIDCONFIGURATION");this.AV20HasNextPage_Grid=gx.fn.getControlValue("vHASNEXTPAGE_GRID");this.AV22RowsPerPage_Grid=gx.fn.getIntegerValue("vROWSPERPAGE_GRID",gx.thousandSeparator);this.AV19I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",gx.thousandSeparator);this.AV38Id=gx.fn.getIntegerValue("vID",gx.thousandSeparator);this.subGrid_Recordcount=gx.fn.getIntegerValue("subGrid_Recordcount",gx.thousandSeparator)};this.s112_client=function(){};this.s132_client=function(){};this.s142_client=function(){this.s262_client()};this.s262_client=function(){gx.fn.setCtrlProperty("ADD","Visible",!0)};this.s212_client=function(){};this.s192_client=function(){gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption","1");gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption",gx.num.str(this.AV16CurrentPage_Grid-1,10,0));gx.fn.setCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption",gx.num.str(this.AV16CurrentPage_Grid,4,0));gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption",gx.num.str(this.AV16CurrentPage_Grid+1,10,0));gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class","K2BToolsTextBlock_PaginationNormal");gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class","K2BToolsTextBlock_PaginationNormal");0==this.AV16CurrentPage_Grid||this.AV16CurrentPage_Grid<=1?(gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class","K2BToolsTextBlock_PaginationDisabled"),gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Visible",!1),gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible",!1),gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Visible",!1)):(gx.fn.setCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Visible",!0),this.AV16CurrentPage_Grid==2?(gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Visible",!1),gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible",!1)):(gx.fn.setCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Visible",!0),this.AV16CurrentPage_Grid==3?gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible",!1):gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible",!0)));this.AV20HasNextPage_Grid==!1?(gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class","K2BToolsTextBlock_PaginationNormal_Disabled"),gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID","Visible",!1),gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Visible",!1)):(gx.fn.setCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Visible",!0),gx.fn.setCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID","Visible",!0));this.AV16CurrentPage_Grid<=1&&this.AV20HasNextPage_Grid==!1?gx.fn.setCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible",!1):gx.fn.setCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible",!0)};this.e133z1_client=function(){return this.clearMessages(),this.AV16CurrentPage_Grid=gx.num.trunc(1,0),this.refreshOutputs([{av:"AV16CurrentPage_Grid",fld:"vCURRENTPAGE_GRID",pic:"ZZZ9"}]),this.refreshGrid("Grid"),this.refreshOutputs([{av:"AV16CurrentPage_Grid",fld:"vCURRENTPAGE_GRID",pic:"ZZZ9"}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e123z1_client=function(){return this.clearMessages(),this.AV16CurrentPage_Grid>1&&(this.AV16CurrentPage_Grid=gx.num.trunc(this.AV16CurrentPage_Grid-1,0)),this.refreshOutputs([{av:"AV16CurrentPage_Grid",fld:"vCURRENTPAGE_GRID",pic:"ZZZ9"}]),this.refreshGrid("Grid"),this.refreshOutputs([{av:"AV16CurrentPage_Grid",fld:"vCURRENTPAGE_GRID",pic:"ZZZ9"}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e143z1_client=function(){return this.clearMessages(),this.AV20HasNextPage_Grid&&(this.AV16CurrentPage_Grid=gx.num.trunc(this.AV16CurrentPage_Grid+1,0)),this.refreshOutputs([{av:"AV16CurrentPage_Grid",fld:"vCURRENTPAGE_GRID",pic:"ZZZ9"}]),this.refreshGrid("Grid"),this.refreshOutputs([{av:"AV16CurrentPage_Grid",fld:"vCURRENTPAGE_GRID",pic:"ZZZ9"}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e113z1_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")==!1?(this.AV24GridSettingsRowsPerPage_Grid=gx.num.trunc(this.AV22RowsPerPage_Grid,0),gx.fn.setCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible",!0)):gx.fn.setCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible",!1),this.refreshOutputs([{ctrl:"vGRIDSETTINGSROWSPERPAGE_GRID"},{av:"AV24GridSettingsRowsPerPage_Grid",fld:"vGRIDSETTINGSROWSPERPAGE_GRID",pic:"ZZZ9"},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:"GRIDSETTINGS_CONTENTOUTERTABLEGRID",prop:"Visible"}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e153z2_client=function(){return this.executeServerEvent("'SAVEGRIDSETTINGS(GRID)'",!1,null,!1,!1)};this.e213z2_client=function(){return this.executeServerEvent("'E_DELETEUSER'",!0,arguments[0],!1,!1)};this.e163z2_client=function(){return this.executeServerEvent("'E_ADD'",!1,null,!1,!1)};this.e223z2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e233z2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,7,8,9,10,11,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,73,74,75,76,77,78,79,80,81,82,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];this.GXLastCtrlId=100;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",72,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"k2bfsg.roleusers",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px",gx.getMessage("GXM_newrow"),!1,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);i=this.GridContainer;i.addSingleLineEdit("Authenticationtypename",73,"vAUTHENTICATIONTYPENAME",gx.getMessage("K2BT_GAM_Authentication"),"","AuthenticationTypeName","char",0,"px",60,60,"start",null,[],"Authenticationtypename","AuthenticationTypeName",!0,0,!1,!1,"Attribute_Grid",0,"K2BToolsGridColumn InvisibleInExtraSmallColumn InvisibleInSmallColumn InvisibleInMediumColumn");i.addSingleLineEdit("Username",74,"vUSERNAME",gx.getMessage("K2BT_GAM_Name"),"","UserName","char",0,"px",120,80,"start",null,[],"Username","UserName",!0,0,!1,!1,"Attribute_Grid",0,"K2BToolsGridColumn InvisibleInExtraSmallColumn");i.addSingleLineEdit("Firstname",75,"vFIRSTNAME",gx.getMessage("K2BT_GAM_FirstName"),"","FirstName","char",0,"px",120,80,"start",null,[],"Firstname","FirstName",!0,0,!1,!1,"Attribute_Grid",0,"K2BToolsGridColumn InvisibleInExtraSmallColumn InvisibleInSmallColumn InvisibleInMediumColumn");i.addSingleLineEdit("Lastname",76,"vLASTNAME",gx.getMessage("K2BT_GAM_LastName"),"","LastName","char",0,"px",120,80,"start",null,[],"Lastname","LastName",!0,0,!1,!1,"Attribute_Grid",0,"K2BToolsGridColumn InvisibleInExtraSmallColumn InvisibleInSmallColumn InvisibleInMediumColumn");i.addSingleLineEdit("Email",77,"vEMAIL",gx.getMessage("K2BT_GAM_Email"),"","Email","svchar",0,"px",100,80,"start",null,[],"Email","Email",!0,0,!1,!1,"Attribute_Grid",0,"K2BToolsGridColumn InvisibleInExtraSmallColumn");i.addSingleLineEdit("Userid",78,"vUSERID",gx.getMessage("K2BT_GAM_UserId"),"","UserId","char",0,"px",40,40,"start",null,[],"Userid","UserId",!1,0,!1,!1,"Attribute_Grid",0,"K2BToolsGridColumn InvisibleInExtraSmallColumn");i.addBitmap("&Deleteuser_action","vDELETEUSER_ACTION",79,20,"px",17,"px","e213z2_client","","","Image_Action","K2BToolsGridColumn ActionColumn ActionVisibleOnRowHover");this.GridContainer.emptyText=gx.getMessage("");this.setGrid(i);this.GRIDCOMPONENT_GRIDContainer=gx.uc.getNew(this,12,0,"K2BT_Component",this.CmpContext+"GRIDCOMPONENT_GRIDContainer","Gridcomponent_grid","GRIDCOMPONENT_GRID");r=this.GRIDCOMPONENT_GRIDContainer;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Icon","Icon","","str");r.setProp("Title","Title",gx.getMessage("K2BT_GAM_Users"),"str");r.setProp("TitleClass","Titleclass","TextBlock_Subtitle","str");r.setProp("Collapsible","Collapsible",!0,"bool");r.setProp("Open","Open",!1,"bool");r.setProp("ShowBorders","Showborders",!0,"bool");r.setProp("ContainsEditableForm","Containseditableform",!1,"bool");r.setProp("Visible","Visible",!0,"bool");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);this.K2BCONTROLBEAUTIFY1Container=gx.uc.getNew(this,101,50,"K2BControlBeautify",this.CmpContext+"K2BCONTROLBEAUTIFY1Container","K2bcontrolbeautify1","K2BCONTROLBEAUTIFY1");u=this.K2BCONTROLBEAUTIFY1Container;u.setProp("Class","Class","","char");u.setProp("Enabled","Enabled",!0,"boolean");u.setProp("UpdateCheckboxes","Updatecheckboxes",!0,"bool");u.setProp("Visible","Visible",!0,"bool");u.setProp("Gx Control Type","Gxcontroltype","","int");u.setC2ShowFunction(function(n){n.show()});this.setUserControl(u);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"MAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"CONTENTTABLE",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[14]={id:14,fld:"GRIDCOMPONENT_GRID_CONTENT",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"GRIDCOMPONENTCONTENT_GRID",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"LAYOUTDEFINED_GRID_INNER_GRID",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,fld:"LAYOUTDEFINED_TABLE10_GRID",grid:0};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"LAYOUTDEFINED_FILTERCONTAINERSECTION_GRID",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"LAYOUTDEFINED_TABLE7_GRID",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"GRIDSETTINGS_GLOBALTABLE_GRID",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"GRIDSETTINGS_LABELGRID",grid:0,evt:"e113z1_client"};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"GRIDSETTINGS_CONTENTOUTERTABLEGRID",grid:0};t[34]={id:34,fld:"",grid:0};t[35]={id:35,fld:"",grid:0};t[36]={id:36,fld:"GSLAYOUTDEFINED_GRIDCONTENTINNERTABLE",grid:0};t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"GRIDCUSTOMIZATIONCONTAINER_GRID",grid:0};t[39]={id:39,fld:"",grid:0};t[40]={id:40,fld:"",grid:0};t[41]={id:41,fld:"GSLAYOUTDEFINED_GRIDRUNTIMECOLUMNSELECTIONTB",format:0,grid:0,ctrltype:"textblock"};t[42]={id:42,fld:"",grid:0};t[43]={id:43,fld:"",grid:0};t[44]={id:44,fld:"GSLAYOUTDEFINED_GRIDCUSTOMIZATIONCOLLAPSIBLESECTION",grid:0};t[45]={id:45,fld:"",grid:0};t[46]={id:46,fld:"",grid:0};t[47]={id:47,fld:"ROWSPERPAGECONTAINER_GRID",grid:0};t[48]={id:48,fld:"",grid:0};t[49]={id:49,fld:"",grid:0};t[50]={id:50,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGRIDSETTINGSROWSPERPAGE_GRID",fmt:0,gxz:"ZV24GridSettingsRowsPerPage_Grid",gxold:"OV24GridSettingsRowsPerPage_Grid",gxvar:"AV24GridSettingsRowsPerPage_Grid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.AV24GridSettingsRowsPerPage_Grid=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV24GridSettingsRowsPerPage_Grid=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("vGRIDSETTINGSROWSPERPAGE_GRID",gx.O.AV24GridSettingsRowsPerPage_Grid)},c2v:function(){this.val()!==undefined&&(gx.O.AV24GridSettingsRowsPerPage_Grid=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vGRIDSETTINGSROWSPERPAGE_GRID",gx.thousandSeparator)},nac:gx.falseFn};t[51]={id:51,fld:"",grid:0};t[52]={id:52,fld:"",grid:0};t[53]={id:53,fld:"FREEZECOLUMNTITLESCONTAINER_GRID",grid:0};t[54]={id:54,fld:"",grid:0};t[55]={id:55,fld:"",grid:0};t[56]={id:56,lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFREEZECOLUMNTITLES_GRID",fmt:0,gxz:"ZV25FreezeColumnTitles_Grid",gxold:"OV25FreezeColumnTitles_Grid",gxvar:"AV25FreezeColumnTitles_Grid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){n!==undefined&&(gx.O.AV25FreezeColumnTitles_Grid=gx.lang.booleanValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV25FreezeColumnTitles_Grid=gx.lang.booleanValue(n))},v2c:function(){gx.fn.setCheckBoxValue("vFREEZECOLUMNTITLES_GRID",gx.O.AV25FreezeColumnTitles_Grid,!0)},c2v:function(){this.val()!==undefined&&(gx.O.AV25FreezeColumnTitles_Grid=gx.lang.booleanValue(this.val()))},val:function(){return gx.fn.getControlValue("vFREEZECOLUMNTITLES_GRID")},nac:gx.falseFn,values:["true","false"]};t[57]={id:57,fld:"",grid:0};t[58]={id:58,fld:"",grid:0};t[59]={id:59,fld:"GRIDSETTINGS_SAVEGRID",grid:0,evt:"e153z2_client"};t[60]={id:60,fld:"",grid:0};t[61]={id:61,fld:"ACTIONS_GRID_TOPRIGHT",grid:0};t[62]={id:62,fld:"",grid:0};t[63]={id:63,fld:"ADD",grid:0,evt:"e163z2_client"};t[64]={id:64,fld:"",grid:0};t[65]={id:65,fld:"",grid:0};t[66]={id:66,fld:"LAYOUTDEFINED_TABLE3_GRID",grid:0};t[67]={id:67,fld:"",grid:0};t[68]={id:68,fld:"",grid:0};t[69]={id:69,fld:"MAINGRID_RESPONSIVETABLE_GRID",grid:0};t[70]={id:70,fld:"",grid:0};t[71]={id:71,fld:"",grid:0};t[73]={id:73,lvl:2,type:"char",len:60,dec:0,sign:!1,ro:0,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAUTHENTICATIONTYPENAME",fmt:0,gxz:"ZV26AuthenticationTypeName",gxold:"OV26AuthenticationTypeName",gxvar:"AV26AuthenticationTypeName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV26AuthenticationTypeName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV26AuthenticationTypeName=n)},v2c:function(n){gx.fn.setGridControlValue("vAUTHENTICATIONTYPENAME",n||gx.fn.currentGridRowImpl(72),gx.O.AV26AuthenticationTypeName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV26AuthenticationTypeName=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vAUTHENTICATIONTYPENAME",n||gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};t[74]={id:74,lvl:2,type:"char",len:120,dec:0,sign:!1,ro:0,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERNAME",fmt:0,gxz:"ZV27UserName",gxold:"OV27UserName",gxvar:"AV27UserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV27UserName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV27UserName=n)},v2c:function(n){gx.fn.setGridControlValue("vUSERNAME",n||gx.fn.currentGridRowImpl(72),gx.O.AV27UserName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV27UserName=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vUSERNAME",n||gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};t[75]={id:75,lvl:2,type:"char",len:120,dec:0,sign:!1,ro:0,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFIRSTNAME",fmt:0,gxz:"ZV28FirstName",gxold:"OV28FirstName",gxvar:"AV28FirstName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV28FirstName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV28FirstName=n)},v2c:function(n){gx.fn.setGridControlValue("vFIRSTNAME",n||gx.fn.currentGridRowImpl(72),gx.O.AV28FirstName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV28FirstName=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vFIRSTNAME",n||gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};t[76]={id:76,lvl:2,type:"char",len:120,dec:0,sign:!1,ro:0,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vLASTNAME",fmt:0,gxz:"ZV29LastName",gxold:"OV29LastName",gxvar:"AV29LastName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV29LastName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV29LastName=n)},v2c:function(n){gx.fn.setGridControlValue("vLASTNAME",n||gx.fn.currentGridRowImpl(72),gx.O.AV29LastName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV29LastName=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vLASTNAME",n||gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};t[77]={id:77,lvl:2,type:"svchar",len:100,dec:0,sign:!1,ro:0,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vEMAIL",fmt:0,gxz:"ZV30Email",gxold:"OV30Email",gxvar:"AV30Email",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV30Email=n)},v2z:function(n){n!==undefined&&(gx.O.ZV30Email=n)},v2c:function(n){gx.fn.setGridControlValue("vEMAIL",n||gx.fn.currentGridRowImpl(72),gx.O.AV30Email,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV30Email=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vEMAIL",n||gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};t[78]={id:78,lvl:2,type:"char",len:40,dec:0,sign:!1,ro:0,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERID",fmt:0,gxz:"ZV31UserId",gxold:"OV31UserId",gxvar:"AV31UserId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV31UserId=n)},v2z:function(n){n!==undefined&&(gx.O.ZV31UserId=n)},v2c:function(n){gx.fn.setGridControlValue("vUSERID",n||gx.fn.currentGridRowImpl(72),gx.O.AV31UserId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV31UserId=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vUSERID",n||gx.fn.currentGridRowImpl(72))},nac:gx.falseFn};t[79]={id:79,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:72,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETEUSER_ACTION",fmt:0,gxz:"ZV32DeleteUser_Action",gxold:"OV32DeleteUser_Action",gxvar:"AV32DeleteUser_Action",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV32DeleteUser_Action=n)},v2z:function(n){n!==undefined&&(gx.O.ZV32DeleteUser_Action=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vDELETEUSER_ACTION",n||gx.fn.currentGridRowImpl(72),gx.O.AV32DeleteUser_Action,gx.O.AV43Deleteuser_action_GXI)},c2v:function(n){gx.O.AV43Deleteuser_action_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV32DeleteUser_Action=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDELETEUSER_ACTION",n||gx.fn.currentGridRowImpl(72))},val_GXI:function(n){return gx.fn.getGridControlValue("vDELETEUSER_ACTION_GXI",n||gx.fn.currentGridRowImpl(72))},gxvar_GXI:"AV43Deleteuser_action_GXI",nac:gx.falseFn,evt:"e213z2_client"};t[80]={id:80,fld:"",grid:0};t[81]={id:81,fld:"",grid:0};t[82]={id:82,fld:"I_NORESULTSFOUNDTABLENAME_GRID",grid:0};t[85]={id:85,fld:"I_NORESULTSFOUNDTEXTBLOCK_GRID",format:0,grid:0,ctrltype:"textblock"};t[86]={id:86,fld:"",grid:0};t[87]={id:87,fld:"",grid:0};t[88]={id:88,fld:"LAYOUTDEFINED_SECTION8_GRID",grid:0};t[89]={id:89,fld:"PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID",grid:0};t[90]={id:90,fld:"PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID",format:0,grid:0,evt:"e123z1_client",ctrltype:"textblock"};t[91]={id:91,fld:"PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID",format:0,grid:0,evt:"e133z1_client",ctrltype:"textblock"};t[92]={id:92,fld:"PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID",format:0,grid:0,ctrltype:"textblock"};t[93]={id:93,fld:"PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID",format:0,grid:0,evt:"e123z1_client",ctrltype:"textblock"};t[94]={id:94,fld:"PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID",format:0,grid:0,ctrltype:"textblock"};t[95]={id:95,fld:"PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID",format:0,grid:0,evt:"e143z1_client",ctrltype:"textblock"};t[96]={id:96,fld:"PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID",format:0,grid:0,ctrltype:"textblock"};t[97]={id:97,fld:"PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID",format:0,grid:0,evt:"e143z1_client",ctrltype:"textblock"};t[98]={id:98,fld:"",grid:0};t[99]={id:99,fld:"",grid:0};t[100]={id:100,fld:"",grid:0};this.AV24GridSettingsRowsPerPage_Grid=0;this.ZV24GridSettingsRowsPerPage_Grid=0;this.OV24GridSettingsRowsPerPage_Grid=0;this.AV25FreezeColumnTitles_Grid=!1;this.ZV25FreezeColumnTitles_Grid=!1;this.OV25FreezeColumnTitles_Grid=!1;this.ZV26AuthenticationTypeName="";this.OV26AuthenticationTypeName="";this.ZV27UserName="";this.OV27UserName="";this.ZV28FirstName="";this.OV28FirstName="";this.ZV29LastName="";this.OV29LastName="";this.ZV30Email="";this.OV30Email="";this.ZV31UserId="";this.OV31UserId="";this.ZV32DeleteUser_Action="";this.OV32DeleteUser_Action="";this.AV24GridSettingsRowsPerPage_Grid=0;this.AV25FreezeColumnTitles_Grid=!1;this.AV38Id=0;this.AV26AuthenticationTypeName="";this.AV27UserName="";this.AV28FirstName="";this.AV29LastName="";this.AV30Email="";this.AV31UserId="";this.AV32DeleteUser_Action="";this.AV16CurrentPage_Grid=0;this.AV18ClassCollection_Grid=[];this.AV41Pgmname="";this.AV15GridConfiguration={FreezeColumnTitles:!1,GridColumns:[],GridColumnsOrder:[]};this.AV20HasNextPage_Grid=!1;this.AV22RowsPerPage_Grid=0;this.AV19I_LoadCount_Grid=0;this.Events={e153z2_client:["'SAVEGRIDSETTINGS(GRID)'",!0],e213z2_client:["'E_DELETEUSER'",!0],e163z2_client:["'E_ADD'",!0],e223z2_client:["ENTER",!0],e233z2_client:["CANCEL",!0],e133z1_client:["'PAGINGFIRST(GRID)'",!1],e123z1_client:["'PAGINGPREVIOUS(GRID)'",!1],e143z1_client:["'PAGINGNEXT(GRID)'",!1],e113z1_client:["'TOGGLEGRIDSETTINGS(GRID)'",!1]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV22RowsPerPage_Grid",fld:"vROWSPERPAGE_GRID",pic:"ZZZ9"},{av:"AV38Id",fld:"vID",pic:"ZZZZZZZZZZZ9"},{av:"sPrefix"},{av:"AV16CurrentPage_Grid",fld:"vCURRENTPAGE_GRID",pic:"ZZZ9"},{av:"AV18ClassCollection_Grid",fld:"vCLASSCOLLECTION_GRID",pic:""},{av:"AV15GridConfiguration",fld:"vGRIDCONFIGURATION",pic:""},{av:"AV25FreezeColumnTitles_Grid",fld:"vFREEZECOLUMNTITLES_GRID",pic:""},{av:"AV41Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV20HasNextPage_Grid",fld:"vHASNEXTPAGE_GRID",pic:"",hsh:!0},{av:"AV19I_LoadCount_Grid",fld:"vI_LOADCOUNT_GRID",pic:"ZZZ9",hsh:!0}],[{av:"AV16CurrentPage_Grid",fld:"vCURRENTPAGE_GRID",pic:"ZZZ9"},{av:"AV18ClassCollection_Grid",fld:"vCLASSCOLLECTION_GRID",pic:""},{av:'gx.fn.getCtrlProperty("MAINGRID_RESPONSIVETABLE_GRID","Class")',ctrl:"MAINGRID_RESPONSIVETABLE_GRID",prop:"Class"},{av:"AV15GridConfiguration",fld:"vGRIDCONFIGURATION",pic:""},{ctrl:"ADD",prop:"Visible"},{av:"AV25FreezeColumnTitles_Grid",fld:"vFREEZECOLUMNTITLES_GRID",pic:""}]];this.EvtParms["GRID.REFRESH"]=[[{av:"AV41Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV16CurrentPage_Grid",fld:"vCURRENTPAGE_GRID",pic:"ZZZ9"},{av:"AV20HasNextPage_Grid",fld:"vHASNEXTPAGE_GRID",pic:"",hsh:!0},{av:"AV15GridConfiguration",fld:"vGRIDCONFIGURATION",pic:""},{av:"AV18ClassCollection_Grid",fld:"vCLASSCOLLECTION_GRID",pic:""}],[{ctrl:"GRID",prop:"Backcolorstyle"},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption")',ctrl:"PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID",prop:"Caption"},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption")',ctrl:"PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID",prop:"Caption"},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption")',ctrl:"PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID",prop:"Caption"},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption")',ctrl:"PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID",prop:"Caption"},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:"PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID",prop:"Class"},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:"PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID",prop:"Class"},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Visible")',ctrl:"PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible")',ctrl:"PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Visible")',ctrl:"PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID","Visible")',ctrl:"PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Visible")',ctrl:"PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible")',ctrl:"PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID",prop:"Visible"},{av:"AV15GridConfiguration",fld:"vGRIDCONFIGURATION",pic:""},{ctrl:"ADD",prop:"Visible"},{av:"AV25FreezeColumnTitles_Grid",fld:"vFREEZECOLUMNTITLES_GRID",pic:""},{av:"AV18ClassCollection_Grid",fld:"vCLASSCOLLECTION_GRID",pic:""}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV22RowsPerPage_Grid",fld:"vROWSPERPAGE_GRID",pic:"ZZZ9"},{av:"AV16CurrentPage_Grid",fld:"vCURRENTPAGE_GRID",pic:"ZZZ9"},{av:"AV19I_LoadCount_Grid",fld:"vI_LOADCOUNT_GRID",pic:"ZZZ9",hsh:!0},{av:"AV38Id",fld:"vID",pic:"ZZZZZZZZZZZ9"},{av:"AV20HasNextPage_Grid",fld:"vHASNEXTPAGE_GRID",pic:"",hsh:!0},{av:"AV41Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{av:'gx.fn.getCtrlProperty("I_NORESULTSFOUNDTABLENAME_GRID","Visible")',ctrl:"I_NORESULTSFOUNDTABLENAME_GRID",prop:"Visible"},{av:"AV19I_LoadCount_Grid",fld:"vI_LOADCOUNT_GRID",pic:"ZZZ9",hsh:!0},{av:"AV20HasNextPage_Grid",fld:"vHASNEXTPAGE_GRID",pic:"",hsh:!0},{av:"AV32DeleteUser_Action",fld:"vDELETEUSER_ACTION",pic:""},{av:'gx.fn.getCtrlProperty("vDELETEUSER_ACTION","Tooltiptext")',ctrl:"vDELETEUSER_ACTION",prop:"Tooltiptext"},{av:"AV26AuthenticationTypeName",fld:"vAUTHENTICATIONTYPENAME",pic:""},{av:"AV27UserName",fld:"vUSERNAME",pic:""},{av:"AV28FirstName",fld:"vFIRSTNAME",pic:""},{av:"AV29LastName",fld:"vLASTNAME",pic:""},{av:"AV30Email",fld:"vEMAIL",pic:""},{av:"AV31UserId",fld:"vUSERID",pic:"",hsh:!0},{av:'gx.fn.getCtrlProperty("vUSERNAME","Link")',ctrl:"vUSERNAME",prop:"Link"},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Caption")',ctrl:"PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID",prop:"Caption"},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Caption")',ctrl:"PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID",prop:"Caption"},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID","Caption")',ctrl:"PAGINATIONBAR_CURRENTPAGETEXTBLOCKGRID",prop:"Caption"},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Caption")',ctrl:"PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID",prop:"Caption"},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:"PAGINATIONBAR_PREVIOUSPAGEBUTTONTEXTBLOCKGRID",prop:"Class"},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID","Class")',ctrl:"PAGINATIONBAR_NEXTPAGEBUTTONTEXTBLOCKGRID",prop:"Class"},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID","Visible")',ctrl:"PAGINATIONBAR_FIRSTPAGETEXTBLOCKGRID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID","Visible")',ctrl:"PAGINATIONBAR_SPACINGLEFTTEXTBLOCKGRID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID","Visible")',ctrl:"PAGINATIONBAR_PREVIOUSPAGETEXTBLOCKGRID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID","Visible")',ctrl:"PAGINATIONBAR_SPACINGRIGHTTEXTBLOCKGRID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID","Visible")',ctrl:"PAGINATIONBAR_NEXTPAGETEXTBLOCKGRID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID","Visible")',ctrl:"PAGINATIONBAR_PAGINGCONTAINERTABLE_GRID",prop:"Visible"}]];this.EvtParms["'PAGINGFIRST(GRID)'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV41Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV16CurrentPage_Grid",fld:"vCURRENTPAGE_GRID",pic:"ZZZ9"},{av:"AV20HasNextPage_Grid",fld:"vHASNEXTPAGE_GRID",pic:"",hsh:!0},{av:"AV15GridConfiguration",fld:"vGRIDCONFIGURATION",pic:""},{av:"AV18ClassCollection_Grid",fld:"vCLASSCOLLECTION_GRID",pic:""},{av:"AV22RowsPerPage_Grid",fld:"vROWSPERPAGE_GRID",pic:"ZZZ9"},{av:"AV19I_LoadCount_Grid",fld:"vI_LOADCOUNT_GRID",pic:"ZZZ9",hsh:!0},{av:"AV38Id",fld:"vID",pic:"ZZZZZZZZZZZ9"},{av:"AV25FreezeColumnTitles_Grid",fld:"vFREEZECOLUMNTITLES_GRID",pic:""},{av:"sPrefix"}],[{av:"AV16CurrentPage_Grid",fld:"vCURRENTPAGE_GRID",pic:"ZZZ9"},{av:"AV18ClassCollection_Grid",fld:"vCLASSCOLLECTION_GRID",pic:""},{av:'gx.fn.getCtrlProperty("MAINGRID_RESPONSIVETABLE_GRID","Class")',ctrl:"MAINGRID_RESPONSIVETABLE_GRID",prop:"Class"},{av:"AV15GridConfiguration",fld:"vGRIDCONFIGURATION",pic:""},{ctrl:"ADD",prop:"Visible"},{av:"AV25FreezeColumnTitles_Grid",fld:"vFREEZECOLUMNTITLES_GRID",pic:""}]];this.EvtParms["'PAGINGPREVIOUS(GRID)'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV41Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV16CurrentPage_Grid",fld:"vCURRENTPAGE_GRID",pic:"ZZZ9"},{av:"AV20HasNextPage_Grid",fld:"vHASNEXTPAGE_GRID",pic:"",hsh:!0},{av:"AV15GridConfiguration",fld:"vGRIDCONFIGURATION",pic:""},{av:"AV18ClassCollection_Grid",fld:"vCLASSCOLLECTION_GRID",pic:""},{av:"AV22RowsPerPage_Grid",fld:"vROWSPERPAGE_GRID",pic:"ZZZ9"},{av:"AV19I_LoadCount_Grid",fld:"vI_LOADCOUNT_GRID",pic:"ZZZ9",hsh:!0},{av:"AV38Id",fld:"vID",pic:"ZZZZZZZZZZZ9"},{av:"AV25FreezeColumnTitles_Grid",fld:"vFREEZECOLUMNTITLES_GRID",pic:""},{av:"sPrefix"}],[{av:"AV16CurrentPage_Grid",fld:"vCURRENTPAGE_GRID",pic:"ZZZ9"},{av:"AV18ClassCollection_Grid",fld:"vCLASSCOLLECTION_GRID",pic:""},{av:'gx.fn.getCtrlProperty("MAINGRID_RESPONSIVETABLE_GRID","Class")',ctrl:"MAINGRID_RESPONSIVETABLE_GRID",prop:"Class"},{av:"AV15GridConfiguration",fld:"vGRIDCONFIGURATION",pic:""},{ctrl:"ADD",prop:"Visible"},{av:"AV25FreezeColumnTitles_Grid",fld:"vFREEZECOLUMNTITLES_GRID",pic:""}]];this.EvtParms["'PAGINGNEXT(GRID)'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV41Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV16CurrentPage_Grid",fld:"vCURRENTPAGE_GRID",pic:"ZZZ9"},{av:"AV20HasNextPage_Grid",fld:"vHASNEXTPAGE_GRID",pic:"",hsh:!0},{av:"AV15GridConfiguration",fld:"vGRIDCONFIGURATION",pic:""},{av:"AV18ClassCollection_Grid",fld:"vCLASSCOLLECTION_GRID",pic:""},{av:"AV22RowsPerPage_Grid",fld:"vROWSPERPAGE_GRID",pic:"ZZZ9"},{av:"AV19I_LoadCount_Grid",fld:"vI_LOADCOUNT_GRID",pic:"ZZZ9",hsh:!0},{av:"AV38Id",fld:"vID",pic:"ZZZZZZZZZZZ9"},{av:"AV25FreezeColumnTitles_Grid",fld:"vFREEZECOLUMNTITLES_GRID",pic:""},{av:"sPrefix"}],[{av:"AV16CurrentPage_Grid",fld:"vCURRENTPAGE_GRID",pic:"ZZZ9"},{av:"AV18ClassCollection_Grid",fld:"vCLASSCOLLECTION_GRID",pic:""},{av:'gx.fn.getCtrlProperty("MAINGRID_RESPONSIVETABLE_GRID","Class")',ctrl:"MAINGRID_RESPONSIVETABLE_GRID",prop:"Class"},{av:"AV15GridConfiguration",fld:"vGRIDCONFIGURATION",pic:""},{ctrl:"ADD",prop:"Visible"},{av:"AV25FreezeColumnTitles_Grid",fld:"vFREEZECOLUMNTITLES_GRID",pic:""}]];this.EvtParms["'TOGGLEGRIDSETTINGS(GRID)'"]=[[{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:"GRIDSETTINGS_CONTENTOUTERTABLEGRID",prop:"Visible"},{av:"AV22RowsPerPage_Grid",fld:"vROWSPERPAGE_GRID",pic:"ZZZ9"}],[{ctrl:"vGRIDSETTINGSROWSPERPAGE_GRID"},{av:"AV24GridSettingsRowsPerPage_Grid",fld:"vGRIDSETTINGSROWSPERPAGE_GRID",pic:"ZZZ9"},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:"GRIDSETTINGS_CONTENTOUTERTABLEGRID",prop:"Visible"}]];this.EvtParms["'SAVEGRIDSETTINGS(GRID)'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV41Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV16CurrentPage_Grid",fld:"vCURRENTPAGE_GRID",pic:"ZZZ9"},{av:"AV20HasNextPage_Grid",fld:"vHASNEXTPAGE_GRID",pic:"",hsh:!0},{av:"AV15GridConfiguration",fld:"vGRIDCONFIGURATION",pic:""},{av:"AV18ClassCollection_Grid",fld:"vCLASSCOLLECTION_GRID",pic:""},{av:"AV22RowsPerPage_Grid",fld:"vROWSPERPAGE_GRID",pic:"ZZZ9"},{av:"AV19I_LoadCount_Grid",fld:"vI_LOADCOUNT_GRID",pic:"ZZZ9",hsh:!0},{av:"AV38Id",fld:"vID",pic:"ZZZZZZZZZZZ9"},{av:"AV25FreezeColumnTitles_Grid",fld:"vFREEZECOLUMNTITLES_GRID",pic:""},{av:"sPrefix"},{ctrl:"vGRIDSETTINGSROWSPERPAGE_GRID"},{av:"AV24GridSettingsRowsPerPage_Grid",fld:"vGRIDSETTINGSROWSPERPAGE_GRID",pic:"ZZZ9"}],[{av:"AV15GridConfiguration",fld:"vGRIDCONFIGURATION",pic:""},{av:"AV22RowsPerPage_Grid",fld:"vROWSPERPAGE_GRID",pic:"ZZZ9"},{av:"AV16CurrentPage_Grid",fld:"vCURRENTPAGE_GRID",pic:"ZZZ9"},{av:'gx.fn.getCtrlProperty("GRIDSETTINGS_CONTENTOUTERTABLEGRID","Visible")',ctrl:"GRIDSETTINGS_CONTENTOUTERTABLEGRID",prop:"Visible"},{av:"AV18ClassCollection_Grid",fld:"vCLASSCOLLECTION_GRID",pic:""},{av:'gx.fn.getCtrlProperty("MAINGRID_RESPONSIVETABLE_GRID","Class")',ctrl:"MAINGRID_RESPONSIVETABLE_GRID",prop:"Class"},{ctrl:"ADD",prop:"Visible"},{av:"AV25FreezeColumnTitles_Grid",fld:"vFREEZECOLUMNTITLES_GRID",pic:""}]];this.EvtParms["'E_DELETEUSER'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV41Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV16CurrentPage_Grid",fld:"vCURRENTPAGE_GRID",pic:"ZZZ9"},{av:"AV20HasNextPage_Grid",fld:"vHASNEXTPAGE_GRID",pic:"",hsh:!0},{av:"AV15GridConfiguration",fld:"vGRIDCONFIGURATION",pic:""},{av:"AV18ClassCollection_Grid",fld:"vCLASSCOLLECTION_GRID",pic:""},{av:"AV22RowsPerPage_Grid",fld:"vROWSPERPAGE_GRID",pic:"ZZZ9"},{av:"AV19I_LoadCount_Grid",fld:"vI_LOADCOUNT_GRID",pic:"ZZZ9",hsh:!0},{av:"AV38Id",fld:"vID",pic:"ZZZZZZZZZZZ9"},{av:"AV25FreezeColumnTitles_Grid",fld:"vFREEZECOLUMNTITLES_GRID",pic:""},{av:"sPrefix"},{av:"AV31UserId",fld:"vUSERID",pic:"",hsh:!0}],[{av:"AV16CurrentPage_Grid",fld:"vCURRENTPAGE_GRID",pic:"ZZZ9"},{av:"AV18ClassCollection_Grid",fld:"vCLASSCOLLECTION_GRID",pic:""},{av:'gx.fn.getCtrlProperty("MAINGRID_RESPONSIVETABLE_GRID","Class")',ctrl:"MAINGRID_RESPONSIVETABLE_GRID",prop:"Class"},{av:"AV15GridConfiguration",fld:"vGRIDCONFIGURATION",pic:""},{ctrl:"ADD",prop:"Visible"},{av:"AV25FreezeColumnTitles_Grid",fld:"vFREEZECOLUMNTITLES_GRID",pic:""}]];this.EvtParms["'E_ADD'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV41Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV16CurrentPage_Grid",fld:"vCURRENTPAGE_GRID",pic:"ZZZ9"},{av:"AV20HasNextPage_Grid",fld:"vHASNEXTPAGE_GRID",pic:"",hsh:!0},{av:"AV15GridConfiguration",fld:"vGRIDCONFIGURATION",pic:""},{av:"AV18ClassCollection_Grid",fld:"vCLASSCOLLECTION_GRID",pic:""},{av:"AV22RowsPerPage_Grid",fld:"vROWSPERPAGE_GRID",pic:"ZZZ9"},{av:"AV19I_LoadCount_Grid",fld:"vI_LOADCOUNT_GRID",pic:"ZZZ9",hsh:!0},{av:"AV38Id",fld:"vID",pic:"ZZZZZZZZZZZ9"},{av:"AV25FreezeColumnTitles_Grid",fld:"vFREEZECOLUMNTITLES_GRID",pic:""},{av:"sPrefix"}],[{av:"AV16CurrentPage_Grid",fld:"vCURRENTPAGE_GRID",pic:"ZZZ9"},{av:"AV18ClassCollection_Grid",fld:"vCLASSCOLLECTION_GRID",pic:""},{av:'gx.fn.getCtrlProperty("MAINGRID_RESPONSIVETABLE_GRID","Class")',ctrl:"MAINGRID_RESPONSIVETABLE_GRID",prop:"Class"},{av:"AV15GridConfiguration",fld:"vGRIDCONFIGURATION",pic:""},{ctrl:"ADD",prop:"Visible"},{av:"AV25FreezeColumnTitles_Grid",fld:"vFREEZECOLUMNTITLES_GRID",pic:""}]];this.EvtParms.ENTER=[[],[]];this.setVCMap("AV16CurrentPage_Grid","vCURRENTPAGE_GRID",0,"int",4,0);this.setVCMap("AV18ClassCollection_Grid","vCLASSCOLLECTION_GRID",0,"Collchar",0,0);this.setVCMap("AV41Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV15GridConfiguration","vGRIDCONFIGURATION",0,"K2BGridConfiguration",0,0);this.setVCMap("AV20HasNextPage_Grid","vHASNEXTPAGE_GRID",0,"boolean",4,0);this.setVCMap("AV22RowsPerPage_Grid","vROWSPERPAGE_GRID",0,"int",4,0);this.setVCMap("AV19I_LoadCount_Grid","vI_LOADCOUNT_GRID",0,"int",4,0);this.setVCMap("AV38Id","vID",0,"int",12,0);this.setVCMap("AV41Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV16CurrentPage_Grid","vCURRENTPAGE_GRID",0,"int",4,0);this.setVCMap("AV20HasNextPage_Grid","vHASNEXTPAGE_GRID",0,"boolean",4,0);this.setVCMap("AV15GridConfiguration","vGRIDCONFIGURATION",0,"K2BGridConfiguration",0,0);this.setVCMap("AV18ClassCollection_Grid","vCLASSCOLLECTION_GRID",0,"Collchar",0,0);this.setVCMap("AV22RowsPerPage_Grid","vROWSPERPAGE_GRID",0,"int",4,0);this.setVCMap("AV19I_LoadCount_Grid","vI_LOADCOUNT_GRID",0,"int",4,0);this.setVCMap("AV38Id","vID",0,"int",12,0);this.setVCMap("AV22RowsPerPage_Grid","vROWSPERPAGE_GRID",0,"int",4,0);this.setVCMap("AV16CurrentPage_Grid","vCURRENTPAGE_GRID",0,"int",4,0);this.setVCMap("AV20HasNextPage_Grid","vHASNEXTPAGE_GRID",0,"boolean",4,0);this.setVCMap("AV41Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV16CurrentPage_Grid","vCURRENTPAGE_GRID",0,"int",4,0);this.setVCMap("AV20HasNextPage_Grid","vHASNEXTPAGE_GRID",0,"boolean",4,0);this.setVCMap("AV15GridConfiguration","vGRIDCONFIGURATION",0,"K2BGridConfiguration",0,0);this.setVCMap("AV18ClassCollection_Grid","vCLASSCOLLECTION_GRID",0,"Collchar",0,0);this.setVCMap("AV22RowsPerPage_Grid","vROWSPERPAGE_GRID",0,"int",4,0);this.setVCMap("AV19I_LoadCount_Grid","vI_LOADCOUNT_GRID",0,"int",4,0);this.setVCMap("AV38Id","vID",0,"int",12,0);i.addRefreshingVar({rfrVar:"AV41Pgmname"});i.addRefreshingVar({rfrVar:"AV16CurrentPage_Grid"});i.addRefreshingVar({rfrVar:"AV20HasNextPage_Grid"});i.addRefreshingVar({rfrVar:"AV15GridConfiguration"});i.addRefreshingVar({rfrVar:"AV18ClassCollection_Grid"});i.addRefreshingVar({rfrVar:"AV22RowsPerPage_Grid"});i.addRefreshingVar({rfrVar:"AV19I_LoadCount_Grid"});i.addRefreshingVar({rfrVar:"AV38Id"});i.addRefreshingParm({rfrVar:"AV41Pgmname"});i.addRefreshingParm({rfrVar:"AV16CurrentPage_Grid"});i.addRefreshingParm({rfrVar:"AV20HasNextPage_Grid"});i.addRefreshingParm({rfrVar:"AV15GridConfiguration"});i.addRefreshingParm({rfrVar:"AV18ClassCollection_Grid"});i.addRefreshingParm({rfrVar:"AV22RowsPerPage_Grid"});i.addRefreshingParm({rfrVar:"AV19I_LoadCount_Grid"});i.addRefreshingParm({rfrVar:"AV38Id"});i.addRefreshingParm(this.GXValidFnc[56]);this.Initialize()})