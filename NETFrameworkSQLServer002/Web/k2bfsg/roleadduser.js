gx.evt.autoSkip=!1;gx.define("k2bfsg.roleadduser",!1,function(){var n,t,i,r;this.ServerClass="k2bfsg.roleadduser";this.PackageName="GeneXus.Programs";this.ServerFullClass="k2bfsg.roleadduser.aspx";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.DSO="AriesCustom";this.SetStandaloneVars=function(){this.AV16CurrentPage_Grid=gx.fn.getIntegerValue("vCURRENTPAGE_GRID",gx.thousandSeparator);this.AV24GenericFilter_PreviousValue_Grid=gx.fn.getControlValue("vGENERICFILTER_PREVIOUSVALUE_GRID");this.AV13ClassCollection_Grid=gx.fn.getControlValue("vCLASSCOLLECTION_GRID");this.AV14CountSelectedItems_Grid=gx.fn.getIntegerValue("vCOUNTSELECTEDITEMS_GRID",gx.thousandSeparator);this.AV46RoleId=gx.fn.getIntegerValue("vROLEID",gx.thousandSeparator);this.AV11AllSelectedItems_Grid=gx.fn.getControlValue("vALLSELECTEDITEMS_GRID");this.AV59Pgmname=gx.fn.getControlValue("vPGMNAME");this.AV25Grid_SelectedRows=gx.fn.getIntegerValue("vGRID_SELECTEDROWS",gx.thousandSeparator);this.AV35I_LoadCount_Grid=gx.fn.getIntegerValue("vI_LOADCOUNT_GRID",gx.thousandSeparator);this.AV15CurrentAvailableUser=gx.fn.getIntegerValue("vCURRENTAVAILABLEUSER",gx.thousandSeparator);this.AV40MultiRowHasNext_Grid=gx.fn.getControlValue("vMULTIROWHASNEXT_GRID");this.AV42MultiRowIterator_Grid=gx.fn.getIntegerValue("vMULTIROWITERATOR_GRID",gx.thousandSeparator);this.AV50SelectedItems_Grid=gx.fn.getControlValue("vSELECTEDITEMS_GRID");this.AV47S_Guid=gx.fn.getControlValue("vS_GUID");this.AV20FieldValues_Grid=gx.fn.getControlValue("vFIELDVALUES_GRID");this.subGrid_Recordcount=gx.fn.getIntegerValue("subGrid_Recordcount",gx.thousandSeparator)};this.s112_client=function(){};this.s132_client=function(){};this.s142_client=function(){this.s222_client();this.AV14CountSelectedItems_Grid>0?this.s232_client():this.s242_client()};this.s222_client=function(){for(this.AV14CountSelectedItems_Grid=gx.num.trunc(0,0),this.AV63GXV4=gx.num.trunc(1,0);this.AV63GXV4<=this.AV11AllSelectedItems_Grid.length;)this.AV49SelectedItem_Grid=this.AV11AllSelectedItems_Grid[this.AV63GXV4-1],this.AV49SelectedItem_Grid.IsSelected&&(this.AV14CountSelectedItems_Grid=gx.num.trunc(this.AV14CountSelectedItems_Grid+1,0)),this.AV63GXV4=gx.num.trunc(this.AV63GXV4+1,0)};this.s232_client=function(){gx.fn.setCtrlProperty("ADDSELECTED","Visible",!0)};this.s242_client=function(){gx.fn.setCtrlProperty("ADDSELECTED","Visible",!1)};this.s192_client=function(){};this.s212_client=function(){for(this.AV36Index_Grid=gx.num.trunc(1,0);this.AV36Index_Grid<=this.AV11AllSelectedItems_Grid.length;)gx.text.compare(this.AV11AllSelectedItems_Grid[this.AV36Index_Grid-1].SKCharacter1,this.AV30Guid)==0?this.AV11AllSelectedItems_Grid.splice(this.AV36Index_Grid-1,1):this.AV36Index_Grid=gx.num.trunc(this.AV36Index_Grid+1,0);this.AV41MultiRowItemSelected_Grid&&(this.AV49SelectedItem_Grid={SKNumeric1:0,SKNumeric2:0,SKNumeric3:0,SKNumeric4:0,SKNumeric5:0,SKNumeric6:0,SKCharacter1:"",SKCharacter2:"",SKCharacter3:"",SKCharacter4:"",SKCharacter5:"",SKCharacter6:"",SKGUID1:"00000000-0000-0000-0000-000000000000",SKGUID2:"00000000-0000-0000-0000-000000000000",SKDateTime1:gx.date.nullDate(),SKDateTime2:gx.date.nullDate(),IsSelected:!1,FieldValues:[]},this.AV49SelectedItem_Grid.IsSelected=this.AV41MultiRowItemSelected_Grid,this.AV49SelectedItem_Grid.SKCharacter1=this.AV30Guid,this.AV19FieldValue_Grid={Name:"",Value:"",ImageValue:"",ImageValue_GXI:""},this.AV19FieldValue_Grid.Name="Name",this.AV19FieldValue_Grid.Value=this.AV43Name,this.AV49SelectedItem_Grid.FieldValues.push(this.AV19FieldValue_Grid),this.AV19FieldValue_Grid={Name:"",Value:"",ImageValue:"",ImageValue_GXI:""},this.AV19FieldValue_Grid.Name="Guid",this.AV19FieldValue_Grid.Value=this.AV30Guid,this.AV49SelectedItem_Grid.FieldValues.push(this.AV19FieldValue_Grid),this.AV11AllSelectedItems_Grid.push(this.AV49SelectedItem_Grid));this.AV41MultiRowItemSelected_Grid||(this.AV12CheckAll_Grid=!1)};this.s252_client=function(){};this.s262_client=function(){this.AV42MultiRowIterator_Grid=gx.num.trunc(1,0)};this.s272_client=function(){for(this.AV48S_Name="",this.AV47S_Guid="";this.AV42MultiRowIterator_Grid<=this.AV50SelectedItems_Grid.length&&!this.AV50SelectedItems_Grid[this.AV42MultiRowIterator_Grid-1].IsSelected;)this.AV42MultiRowIterator_Grid=gx.num.trunc(this.AV42MultiRowIterator_Grid+1,0);this.AV42MultiRowIterator_Grid>this.AV50SelectedItems_Grid.length?this.AV40MultiRowHasNext_Grid=!1:(this.AV40MultiRowHasNext_Grid=!0,this.AV20FieldValues_Grid=this.AV50SelectedItems_Grid[this.AV42MultiRowIterator_Grid-1].FieldValues,this.s302_client());this.AV42MultiRowIterator_Grid=gx.num.trunc(this.AV42MultiRowIterator_Grid+1,0)};this.s302_client=function(){for(this.AV64GXV5=gx.num.trunc(1,0);this.AV64GXV5<=this.AV20FieldValues_Grid.length;)this.AV19FieldValue_Grid=this.AV20FieldValues_Grid[this.AV64GXV5-1],gx.text.compare(this.AV19FieldValue_Grid.Name,"Name")==0?this.AV48S_Name=this.AV19FieldValue_Grid.Value:gx.text.compare(this.AV19FieldValue_Grid.Name,"Guid")==0&&(this.AV47S_Guid=this.AV19FieldValue_Grid.Value),this.AV64GXV5=gx.num.trunc(this.AV64GXV5+1,0)};this.e174q2_client=function(){return this.executeServerEvent("VMULTIROWITEMSELECTED_GRID.CLICK",!0,arguments[0],!1,!1)};this.e114q2_client=function(){return this.executeServerEvent("VCHECKALL_GRID.CLICK",!0,null,!1,!0)};this.e124q2_client=function(){return this.executeServerEvent("'E_ADDSELECTED'",!1,null,!1,!1)};this.e184q2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e194q2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,7,8,9,10,11,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,65,66,67,68,69,70,73,74,75,76];this.GXLastCtrlId=76;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",64,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"k2bfsg.roleadduser",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px",gx.getMessage("GXM_newrow"),!1,!1,!0,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);t=this.GridContainer;t.addCheckBox("Multirowitemselected_grid",65,"vMULTIROWITEMSELECTED_GRID","","","MultiRowItemSelected_Grid","boolean","true","false","e174q2_client",!0,!1,20,"px","K2BToolsCheckBoxColumn");t.addSingleLineEdit("Name",66,"vNAME",gx.getMessage("K2BT_GAM_Name"),"","Name","char",0,"px",120,80,"start",null,[],"Name","Name",!0,0,!1,!1,"Attribute_Grid",0,"K2BToolsGridColumn");t.addSingleLineEdit("Guid",67,"vGUID",gx.getMessage("K2BT_GUID"),"","Guid","char",0,"px",40,40,"start",null,[],"Guid","Guid",!1,0,!1,!1,"Attribute_Grid",0,"K2BToolsGridColumn InvisibleInExtraSmallColumn");this.GridContainer.emptyText=gx.getMessage("");this.setGrid(t);this.ATTRIBUTESContainer=gx.uc.getNew(this,12,0,"K2BT_Component","ATTRIBUTESContainer","Attributes","ATTRIBUTES");i=this.ATTRIBUTESContainer;i.setProp("Class","Class","","char");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Icon","Icon","","str");i.setProp("Title","Title","","str");i.setProp("TitleClass","Titleclass","TextBlock_Subtitle","str");i.setProp("Collapsible","Collapsible",!1,"bool");i.setProp("Open","Open",!0,"bool");i.setProp("ShowBorders","Showborders",!0,"bool");i.setProp("ContainsEditableForm","Containseditableform",!1,"bool");i.setProp("Visible","Visible",!0,"bool");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);this.K2BCONTROLBEAUTIFY1Container=gx.uc.getNew(this,77,23,"K2BControlBeautify","K2BCONTROLBEAUTIFY1Container","K2bcontrolbeautify1","K2BCONTROLBEAUTIFY1");r=this.K2BCONTROLBEAUTIFY1Container;r.setProp("Class","Class","","char");r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("UpdateCheckboxes","Updatecheckboxes",!0,"bool");r.setProp("Visible","Visible",!0,"bool");r.setProp("Gx Control Type","Gxcontroltype","","int");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"CONTENTTABLE",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[14]={id:14,fld:"ATTRIBUTES_CONTENT",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"ATTRIBUTESCONTAINERTABLE_ATTRIBUTES",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"TABLE_CONTAINER_ROLENAME",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[23]={id:23,lvl:0,type:"char",len:254,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vROLENAME",fmt:0,gxz:"ZV8RoleName",gxold:"OV8RoleName",gxvar:"AV8RoleName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV8RoleName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV8RoleName=n)},v2c:function(){gx.fn.setControlValue("vROLENAME",gx.O.AV8RoleName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV8RoleName=this.val())},val:function(){return gx.fn.getControlValue("vROLENAME")},nac:gx.falseFn};this.declareDomainHdlr(23,function(){});n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"GRIDCOMPONENTCONTENT_GRID",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"LAYOUTDEFINED_GRID_INNER_GRID",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"LAYOUTDEFINED_TABLE10_GRID",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"LAYOUTDEFINED_FILTERCONTAINERSECTION_GRID",grid:0};n[35]={id:35,fld:"LAYOUTDEFINED_FILTERGLOBALCONTAINER_GRID",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"LAYOUTDEFINED_ONLYGENERICFILTERLAYOUT_GRID",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"LAYOUTDEFINED_TABLE9_GRID",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"LAYOUTDEFINED_TABLE8_GRID",grid:0};n[43]={id:43,fld:"",grid:0};n[44]={id:44,fld:"",grid:0};n[45]={id:45,lvl:0,type:"char",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGENERICFILTER_GRID",fmt:0,gxz:"ZV23GenericFilter_Grid",gxold:"OV23GenericFilter_Grid",gxvar:"AV23GenericFilter_Grid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV23GenericFilter_Grid=n)},v2z:function(n){n!==undefined&&(gx.O.ZV23GenericFilter_Grid=n)},v2c:function(){gx.fn.setControlValue("vGENERICFILTER_GRID",gx.O.AV23GenericFilter_Grid,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV23GenericFilter_Grid=this.val())},val:function(){return gx.fn.getControlValue("vGENERICFILTER_GRID")},nac:gx.falseFn};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"LAYOUTDEFINED_TABLE7_GRID",grid:0};n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"ACTIONS_GRID_TOPRIGHT",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"ADDSELECTED",grid:0,evt:"e124q2_client"};n[53]={id:53,fld:"",grid:0};n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"LAYOUTDEFINED_TABLE3_GRID",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,fld:"MAINGRID_RESPONSIVETABLE_GRID",grid:0};n[59]={id:59,fld:"",grid:0};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"TABLEGRIDCONTAINER_GRID",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,lvl:0,type:"boolean",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCHECKALL_GRID",fmt:0,gxz:"ZV12CheckAll_Grid",gxold:"OV12CheckAll_Grid",gxvar:"AV12CheckAll_Grid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){n!==undefined&&(gx.O.AV12CheckAll_Grid=gx.lang.booleanValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV12CheckAll_Grid=gx.lang.booleanValue(n))},v2c:function(){gx.fn.setCheckBoxValue("vCHECKALL_GRID",gx.O.AV12CheckAll_Grid,!0)},c2v:function(){this.val()!==undefined&&(gx.O.AV12CheckAll_Grid=gx.lang.booleanValue(this.val()))},val:function(){return gx.fn.getControlValue("vCHECKALL_GRID")},nac:gx.falseFn,evt:"e114q2_client",values:["true","false"]};n[65]={id:65,lvl:2,type:"boolean",len:4,dec:0,sign:!1,ro:0,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMULTIROWITEMSELECTED_GRID",fmt:0,gxz:"ZV41MultiRowItemSelected_Grid",gxold:"OV41MultiRowItemSelected_Grid",gxvar:"AV41MultiRowItemSelected_Grid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV41MultiRowItemSelected_Grid=gx.lang.booleanValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV41MultiRowItemSelected_Grid=gx.lang.booleanValue(n))},v2c:function(n){gx.fn.setGridCheckBoxValue("vMULTIROWITEMSELECTED_GRID",n||gx.fn.currentGridRowImpl(64),gx.O.AV41MultiRowItemSelected_Grid,!0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV41MultiRowItemSelected_Grid=gx.lang.booleanValue(this.val(n)))},val:function(n){return gx.fn.getGridControlValue("vMULTIROWITEMSELECTED_GRID",n||gx.fn.currentGridRowImpl(64))},nac:gx.falseFn,evt:"e174q2_client",values:["true","false"]};n[66]={id:66,lvl:2,type:"char",len:120,dec:0,sign:!1,ro:0,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",fmt:0,gxz:"ZV43Name",gxold:"OV43Name",gxvar:"AV43Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV43Name=n)},v2z:function(n){n!==undefined&&(gx.O.ZV43Name=n)},v2c:function(n){gx.fn.setGridControlValue("vNAME",n||gx.fn.currentGridRowImpl(64),gx.O.AV43Name,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV43Name=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vNAME",n||gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};n[67]={id:67,lvl:2,type:"char",len:40,dec:0,sign:!1,ro:0,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGUID",fmt:0,gxz:"ZV30Guid",gxold:"OV30Guid",gxvar:"AV30Guid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV30Guid=n)},v2z:function(n){n!==undefined&&(gx.O.ZV30Guid=n)},v2c:function(n){gx.fn.setGridControlValue("vGUID",n||gx.fn.currentGridRowImpl(64),gx.O.AV30Guid,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV30Guid=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vGUID",n||gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};n[68]={id:68,fld:"",grid:0};n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"I_NORESULTSFOUNDTABLENAME_GRID",grid:0};n[73]={id:73,fld:"I_NORESULTSFOUNDTEXTBLOCK_GRID",format:0,grid:0,ctrltype:"textblock"};n[74]={id:74,fld:"",grid:0};n[75]={id:75,fld:"",grid:0};n[76]={id:76,fld:"",grid:0};this.AV8RoleName="";this.ZV8RoleName="";this.OV8RoleName="";this.AV23GenericFilter_Grid="";this.ZV23GenericFilter_Grid="";this.OV23GenericFilter_Grid="";this.AV12CheckAll_Grid=!1;this.ZV12CheckAll_Grid=!1;this.OV12CheckAll_Grid=!1;this.ZV41MultiRowItemSelected_Grid=!1;this.OV41MultiRowItemSelected_Grid=!1;this.ZV43Name="";this.OV43Name="";this.ZV30Guid="";this.OV30Guid="";this.AV8RoleName="";this.AV23GenericFilter_Grid="";this.AV12CheckAll_Grid=!1;this.AV46RoleId=0;this.AV41MultiRowItemSelected_Grid=!1;this.AV43Name="";this.AV30Guid="";this.AV16CurrentPage_Grid=0;this.AV24GenericFilter_PreviousValue_Grid="";this.AV13ClassCollection_Grid=[];this.AV14CountSelectedItems_Grid=0;this.AV11AllSelectedItems_Grid=[];this.AV59Pgmname="";this.AV25Grid_SelectedRows=0;this.AV35I_LoadCount_Grid=0;this.AV15CurrentAvailableUser=0;this.AV40MultiRowHasNext_Grid=!1;this.AV42MultiRowIterator_Grid=0;this.AV50SelectedItems_Grid=[];this.AV47S_Guid="";this.AV20FieldValues_Grid=[];this.AV63GXV4=0;this.AV49SelectedItem_Grid={SKNumeric1:0,SKNumeric2:0,SKNumeric3:0,SKNumeric4:0,SKNumeric5:0,SKNumeric6:0,SKCharacter1:"",SKCharacter2:"",SKCharacter3:"",SKCharacter4:"",SKCharacter5:"",SKCharacter6:"",SKGUID1:"00000000-0000-0000-0000-000000000000",SKGUID2:"00000000-0000-0000-0000-000000000000",SKDateTime1:gx.date.nullDate(),SKDateTime2:gx.date.nullDate(),IsSelected:!1,FieldValues:[]};this.AV19FieldValue_Grid={Name:"",Value:"",ImageValue:"",ImageValue_GXI:""};this.AV36Index_Grid=0;this.AV64GXV5=0;this.AV48S_Name="";this.Events={e174q2_client:["VMULTIROWITEMSELECTED_GRID.CLICK",!0],e114q2_client:["VCHECKALL_GRID.CLICK",!0],e124q2_client:["'E_ADDSELECTED'",!0],e184q2_client:["ENTER",!0],e194q2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV30Guid",fld:"vGUID",pic:"",hsh:!0},{av:"AV25Grid_SelectedRows",fld:"vGRID_SELECTEDROWS",pic:"ZZZ9"},{av:"AV23GenericFilter_Grid",fld:"vGENERICFILTER_GRID",pic:""},{av:"AV13ClassCollection_Grid",fld:"vCLASSCOLLECTION_GRID",pic:""},{av:"AV14CountSelectedItems_Grid",fld:"vCOUNTSELECTEDITEMS_GRID",pic:"ZZZ9"},{av:"AV11AllSelectedItems_Grid",fld:"vALLSELECTEDITEMS_GRID",pic:""},{av:"AV12CheckAll_Grid",fld:"vCHECKALL_GRID",pic:""},{av:"AV16CurrentPage_Grid",fld:"vCURRENTPAGE_GRID",pic:"ZZZ9",hsh:!0},{av:"AV24GenericFilter_PreviousValue_Grid",fld:"vGENERICFILTER_PREVIOUSVALUE_GRID",pic:"",hsh:!0},{av:"AV46RoleId",fld:"vROLEID",pic:"ZZZZZZZZZZZ9",hsh:!0},{av:"AV59Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV35I_LoadCount_Grid",fld:"vI_LOADCOUNT_GRID",pic:"ZZZ9",hsh:!0},{av:"AV15CurrentAvailableUser",fld:"vCURRENTAVAILABLEUSER",pic:"ZZZ9",hsh:!0}],[{av:"AV16CurrentPage_Grid",fld:"vCURRENTPAGE_GRID",pic:"ZZZ9",hsh:!0},{av:"AV24GenericFilter_PreviousValue_Grid",fld:"vGENERICFILTER_PREVIOUSVALUE_GRID",pic:"",hsh:!0},{av:"AV25Grid_SelectedRows",fld:"vGRID_SELECTEDROWS",pic:"ZZZ9"},{av:"AV13ClassCollection_Grid",fld:"vCLASSCOLLECTION_GRID",pic:""},{av:'gx.fn.getCtrlProperty("MAINGRID_RESPONSIVETABLE_GRID","Class")',ctrl:"MAINGRID_RESPONSIVETABLE_GRID",prop:"Class"},{av:"AV8RoleName",fld:"vROLENAME",pic:""},{av:"AV14CountSelectedItems_Grid",fld:"vCOUNTSELECTEDITEMS_GRID",pic:"ZZZ9"},{ctrl:"ADDSELECTED",prop:"Visible"}]];this.EvtParms["GRID.REFRESH"]=[[{av:"AV11AllSelectedItems_Grid",fld:"vALLSELECTEDITEMS_GRID",pic:""},{av:"AV13ClassCollection_Grid",fld:"vCLASSCOLLECTION_GRID",pic:""},{av:"AV59Pgmname",fld:"vPGMNAME",pic:"",hsh:!0},{av:"AV23GenericFilter_Grid",fld:"vGENERICFILTER_GRID",pic:""},{av:"AV14CountSelectedItems_Grid",fld:"vCOUNTSELECTEDITEMS_GRID",pic:"ZZZ9"}],[{ctrl:"GRID",prop:"Backcolorstyle"},{av:"AV25Grid_SelectedRows",fld:"vGRID_SELECTEDROWS",pic:"ZZZ9"},{av:"AV13ClassCollection_Grid",fld:"vCLASSCOLLECTION_GRID",pic:""},{av:'gx.fn.getCtrlProperty("MAINGRID_RESPONSIVETABLE_GRID","Class")',ctrl:"MAINGRID_RESPONSIVETABLE_GRID",prop:"Class"},{av:"AV12CheckAll_Grid",fld:"vCHECKALL_GRID",pic:""},{av:"AV14CountSelectedItems_Grid",fld:"vCOUNTSELECTEDITEMS_GRID",pic:"ZZZ9"},{ctrl:"ADDSELECTED",prop:"Visible"}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV11AllSelectedItems_Grid",fld:"vALLSELECTEDITEMS_GRID",pic:""},{av:"AV30Guid",fld:"vGUID",pic:"",hsh:!0},{av:"AV25Grid_SelectedRows",fld:"vGRID_SELECTEDROWS",pic:"ZZZ9"},{av:"AV35I_LoadCount_Grid",fld:"vI_LOADCOUNT_GRID",pic:"ZZZ9",hsh:!0},{av:"AV23GenericFilter_Grid",fld:"vGENERICFILTER_GRID",pic:""},{av:"AV46RoleId",fld:"vROLEID",pic:"ZZZZZZZZZZZ9",hsh:!0},{av:"AV15CurrentAvailableUser",fld:"vCURRENTAVAILABLEUSER",pic:"ZZZ9",hsh:!0},{av:"AV59Pgmname",fld:"vPGMNAME",pic:"",hsh:!0}],[{av:'gx.fn.getCtrlProperty("I_NORESULTSFOUNDTABLENAME_GRID","Visible")',ctrl:"I_NORESULTSFOUNDTABLENAME_GRID",prop:"Visible"},{av:"AV35I_LoadCount_Grid",fld:"vI_LOADCOUNT_GRID",pic:"ZZZ9",hsh:!0},{av:"AV41MultiRowItemSelected_Grid",fld:"vMULTIROWITEMSELECTED_GRID",pic:""},{av:"AV25Grid_SelectedRows",fld:"vGRID_SELECTEDROWS",pic:"ZZZ9"},{av:"AV12CheckAll_Grid",fld:"vCHECKALL_GRID",pic:""},{av:"AV15CurrentAvailableUser",fld:"vCURRENTAVAILABLEUSER",pic:"ZZZ9",hsh:!0},{av:"AV43Name",fld:"vNAME",pic:"",hsh:!0},{av:"AV30Guid",fld:"vGUID",pic:"",hsh:!0}]];this.EvtParms["VMULTIROWITEMSELECTED_GRID.CLICK"]=[[{av:"AV11AllSelectedItems_Grid",fld:"vALLSELECTEDITEMS_GRID",pic:""},{av:"AV13ClassCollection_Grid",fld:"vCLASSCOLLECTION_GRID",pic:""},{av:"AV30Guid",fld:"vGUID",grid:64,pic:"",hsh:!0},{av:"GRID_nFirstRecordOnPage"},{av:"nRC_GXsfl_64",ctrl:"GRID",grid:64,prop:"GridRC",grid:64},{av:"AV41MultiRowItemSelected_Grid",fld:"vMULTIROWITEMSELECTED_GRID",grid:64,pic:""},{av:"AV43Name",fld:"vNAME",grid:64,pic:"",hsh:!0},{av:"AV14CountSelectedItems_Grid",fld:"vCOUNTSELECTEDITEMS_GRID",pic:"ZZZ9"}],[{av:"AV12CheckAll_Grid",fld:"vCHECKALL_GRID",pic:""},{av:"AV13ClassCollection_Grid",fld:"vCLASSCOLLECTION_GRID",pic:""},{av:'gx.fn.getCtrlProperty("MAINGRID_RESPONSIVETABLE_GRID","Class")',ctrl:"MAINGRID_RESPONSIVETABLE_GRID",prop:"Class"},{av:"AV11AllSelectedItems_Grid",fld:"vALLSELECTEDITEMS_GRID",pic:""},{av:"AV14CountSelectedItems_Grid",fld:"vCOUNTSELECTEDITEMS_GRID",pic:"ZZZ9"},{ctrl:"ADDSELECTED",prop:"Visible"}]];this.EvtParms["VCHECKALL_GRID.CLICK"]=[[{av:"AV41MultiRowItemSelected_Grid",fld:"vMULTIROWITEMSELECTED_GRID",grid:64,pic:""},{av:"GRID_nFirstRecordOnPage"},{av:"nRC_GXsfl_64",ctrl:"GRID",grid:64,prop:"GridRC",grid:64},{av:"AV12CheckAll_Grid",fld:"vCHECKALL_GRID",pic:""},{av:"AV14CountSelectedItems_Grid",fld:"vCOUNTSELECTEDITEMS_GRID",pic:"ZZZ9"},{av:"AV11AllSelectedItems_Grid",fld:"vALLSELECTEDITEMS_GRID",pic:""},{av:"AV13ClassCollection_Grid",fld:"vCLASSCOLLECTION_GRID",pic:""},{av:"AV30Guid",fld:"vGUID",grid:64,pic:"",hsh:!0},{av:"AV43Name",fld:"vNAME",grid:64,pic:"",hsh:!0}],[{av:"AV41MultiRowItemSelected_Grid",fld:"vMULTIROWITEMSELECTED_GRID",pic:""},{av:"AV13ClassCollection_Grid",fld:"vCLASSCOLLECTION_GRID",pic:""},{av:'gx.fn.getCtrlProperty("MAINGRID_RESPONSIVETABLE_GRID","Class")',ctrl:"MAINGRID_RESPONSIVETABLE_GRID",prop:"Class"},{av:"AV11AllSelectedItems_Grid",fld:"vALLSELECTEDITEMS_GRID",pic:""},{av:"AV12CheckAll_Grid",fld:"vCHECKALL_GRID",pic:""},{av:"AV14CountSelectedItems_Grid",fld:"vCOUNTSELECTEDITEMS_GRID",pic:"ZZZ9"},{ctrl:"ADDSELECTED",prop:"Visible"}]];this.EvtParms["'E_ADDSELECTED'"]=[[{av:"AV11AllSelectedItems_Grid",fld:"vALLSELECTEDITEMS_GRID",pic:""},{av:"AV40MultiRowHasNext_Grid",fld:"vMULTIROWHASNEXT_GRID",pic:""},{av:"AV42MultiRowIterator_Grid",fld:"vMULTIROWITERATOR_GRID",pic:"ZZZ9"},{av:"AV50SelectedItems_Grid",fld:"vSELECTEDITEMS_GRID",pic:""},{av:"AV46RoleId",fld:"vROLEID",pic:"ZZZZZZZZZZZ9",hsh:!0},{av:"AV47S_Guid",fld:"vS_GUID",pic:""},{av:"AV20FieldValues_Grid",fld:"vFIELDVALUES_GRID",pic:""}],[{av:"AV50SelectedItems_Grid",fld:"vSELECTEDITEMS_GRID",pic:""},{av:"AV42MultiRowIterator_Grid",fld:"vMULTIROWITERATOR_GRID",pic:"ZZZ9"},{av:"AV47S_Guid",fld:"vS_GUID",pic:""},{av:"AV20FieldValues_Grid",fld:"vFIELDVALUES_GRID",pic:""},{av:"AV40MultiRowHasNext_Grid",fld:"vMULTIROWHASNEXT_GRID",pic:""}]];this.EvtParms.ENTER=[[],[]];this.setVCMap("AV16CurrentPage_Grid","vCURRENTPAGE_GRID",0,"int",4,0);this.setVCMap("AV24GenericFilter_PreviousValue_Grid","vGENERICFILTER_PREVIOUSVALUE_GRID",0,"char",100,0);this.setVCMap("AV13ClassCollection_Grid","vCLASSCOLLECTION_GRID",0,"Collchar",0,0);this.setVCMap("AV14CountSelectedItems_Grid","vCOUNTSELECTEDITEMS_GRID",0,"int",4,0);this.setVCMap("AV46RoleId","vROLEID",0,"int",12,0);this.setVCMap("AV11AllSelectedItems_Grid","vALLSELECTEDITEMS_GRID",0,"CollK2BSelectionItem",0,0);this.setVCMap("AV59Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV25Grid_SelectedRows","vGRID_SELECTEDROWS",0,"int",4,0);this.setVCMap("AV35I_LoadCount_Grid","vI_LOADCOUNT_GRID",0,"int",4,0);this.setVCMap("AV15CurrentAvailableUser","vCURRENTAVAILABLEUSER",0,"int",4,0);this.setVCMap("AV40MultiRowHasNext_Grid","vMULTIROWHASNEXT_GRID",0,"boolean",4,0);this.setVCMap("AV42MultiRowIterator_Grid","vMULTIROWITERATOR_GRID",0,"int",4,0);this.setVCMap("AV50SelectedItems_Grid","vSELECTEDITEMS_GRID",0,"CollK2BSelectionItem",0,0);this.setVCMap("AV47S_Guid","vS_GUID",0,"char",40,0);this.setVCMap("AV20FieldValues_Grid","vFIELDVALUES_GRID",0,"CollK2BSelectionItem.FieldValuesItem",0,0);this.setVCMap("AV16CurrentPage_Grid","vCURRENTPAGE_GRID",0,"int",4,0);this.setVCMap("AV24GenericFilter_PreviousValue_Grid","vGENERICFILTER_PREVIOUSVALUE_GRID",0,"char",100,0);this.setVCMap("AV46RoleId","vROLEID",0,"int",12,0);this.setVCMap("AV11AllSelectedItems_Grid","vALLSELECTEDITEMS_GRID",0,"CollK2BSelectionItem",0,0);this.setVCMap("AV13ClassCollection_Grid","vCLASSCOLLECTION_GRID",0,"Collchar",0,0);this.setVCMap("AV59Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV14CountSelectedItems_Grid","vCOUNTSELECTEDITEMS_GRID",0,"int",4,0);this.setVCMap("AV25Grid_SelectedRows","vGRID_SELECTEDROWS",0,"int",4,0);this.setVCMap("AV35I_LoadCount_Grid","vI_LOADCOUNT_GRID",0,"int",4,0);this.setVCMap("AV15CurrentAvailableUser","vCURRENTAVAILABLEUSER",0,"int",4,0);this.setVCMap("AV16CurrentPage_Grid","vCURRENTPAGE_GRID",0,"int",4,0);this.setVCMap("AV24GenericFilter_PreviousValue_Grid","vGENERICFILTER_PREVIOUSVALUE_GRID",0,"char",100,0);this.setVCMap("AV46RoleId","vROLEID",0,"int",12,0);this.setVCMap("AV11AllSelectedItems_Grid","vALLSELECTEDITEMS_GRID",0,"CollK2BSelectionItem",0,0);this.setVCMap("AV13ClassCollection_Grid","vCLASSCOLLECTION_GRID",0,"Collchar",0,0);this.setVCMap("AV59Pgmname","vPGMNAME",0,"char",129,0);this.setVCMap("AV14CountSelectedItems_Grid","vCOUNTSELECTEDITEMS_GRID",0,"int",4,0);this.setVCMap("AV25Grid_SelectedRows","vGRID_SELECTEDROWS",0,"int",4,0);this.setVCMap("AV35I_LoadCount_Grid","vI_LOADCOUNT_GRID",0,"int",4,0);this.setVCMap("AV15CurrentAvailableUser","vCURRENTAVAILABLEUSER",0,"int",4,0);t.addRefreshingVar({rfrVar:"AV16CurrentPage_Grid"});t.addRefreshingVar({rfrVar:"AV24GenericFilter_PreviousValue_Grid"});t.addRefreshingVar({rfrVar:"AV46RoleId"});t.addRefreshingVar({rfrVar:"AV11AllSelectedItems_Grid"});t.addRefreshingVar({rfrVar:"AV13ClassCollection_Grid"});t.addRefreshingVar({rfrVar:"AV59Pgmname"});t.addRefreshingVar(this.GXValidFnc[45]);t.addRefreshingVar({rfrVar:"AV14CountSelectedItems_Grid"});t.addRefreshingVar({rfrVar:"AV30Guid",rfrProp:"Value",gxAttId:"Guid"});t.addRefreshingVar({rfrVar:"AV25Grid_SelectedRows"});t.addRefreshingVar({rfrVar:"AV35I_LoadCount_Grid"});t.addRefreshingVar({rfrVar:"AV15CurrentAvailableUser"});t.addRefreshingParm({rfrVar:"AV16CurrentPage_Grid"});t.addRefreshingParm({rfrVar:"AV24GenericFilter_PreviousValue_Grid"});t.addRefreshingParm({rfrVar:"AV46RoleId"});t.addRefreshingParm({rfrVar:"AV11AllSelectedItems_Grid"});t.addRefreshingParm({rfrVar:"AV13ClassCollection_Grid"});t.addRefreshingParm({rfrVar:"AV59Pgmname"});t.addRefreshingParm(this.GXValidFnc[45]);t.addRefreshingParm({rfrVar:"AV14CountSelectedItems_Grid"});t.addRefreshingParm({rfrVar:"AV30Guid",rfrProp:"Value",gxAttId:"Guid"});t.addRefreshingParm({rfrVar:"AV25Grid_SelectedRows"});t.addRefreshingParm({rfrVar:"AV35I_LoadCount_Grid"});t.addRefreshingParm({rfrVar:"AV15CurrentAvailableUser"});t.addRefreshingParm(this.GXValidFnc[63]);this.Initialize();this.setSDTMapping("K2BGridState",{FilterValues:{sdt:"K2BGridState.FilterValue"}});this.setSDTMapping("GeneXusSecurity\\GAMRole",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMUser",{Attributes:{sdt:"GeneXusSecurity\\GAMUserAttribute"}});this.setSDTMapping("K2BActivityList.K2BActivityListItem",{Activity:{sdt:"K2BActivity"}});this.setSDTMapping("K2BTrnContext",{TransactionName:{extr:"Transaction"},CallerUrl:{extr:"CallerUrl"},EntityManagerName:{extr:"EMName"},EntityManagerNextTaskCode:{extr:"NextTaskCode"},EntityManagerNextTaskMode:{extr:"NextTaskMode"},EntityManagerEncryptUrlParameters:{extr:"EncryptUrlParms"},ReturnMode:{extr:"ReturnMode"},SavePK:{extr:"SavePK"},Attributes:{extr:"Attributes"}});this.setSDTMapping("GeneXusSecurity\\GAMApplication",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMRepository",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"},Email:{sdt:"GeneXusSecurity\\GAMRepositoryEmail"}});this.setSDTMapping("GeneXusSecurity\\GAMApplicationFilter",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("K2BSelectionItem",{FieldValues:{sdt:"K2BSelectionItem.FieldValuesItem"}});this.setSDTMapping("GeneXusSecurity\\GAMPermission",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMApplicationPermission",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMSession",{User:{sdt:"GeneXusSecurity\\GAMUser"},InitialProperties:{sdt:"GeneXusSecurity\\GAMProperty"},SecurityPolicy:{sdt:"GeneXusSecurity\\GAMSecurityPolicy"}});this.setSDTMapping("GeneXusSecurity\\GAMLoginAdditionalParameters",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMRoleFilter",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMSecurityPolicyFilter",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMSecurityPolicy",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMApplicationMenu",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}});this.setSDTMapping("GeneXusSecurity\\GAMApplicationMenuOption",{Properties:{sdt:"GeneXusSecurity\\GAMProperty"}})});gx.wi(function(){gx.createParentObj(this.k2bfsg.roleadduser)})