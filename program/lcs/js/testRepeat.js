Ext.onReady(function(){this.fdesktopBackground = function fdesktopBackground(args,mysql,fatherId){ var self ,tempArgs; if(mysql){ args.mysql = mysql;}; function fuxMenu(args){ var self; args.id = args.name;args = Ext.ux.layoutArgs(args);self = new Ext.menu.Menu(args); self["addObject"] = function (obj,args){ Ext.ux.layoutScript(obj,args);}; return self; }; tempArgs = args.desktopMenu;; tempArgs["name"] = "desktopMenu"; var desktopMenu = fuxMenu(tempArgs); desktopMenu["args"] = tempArgs; tempArgs = {}; function fnormalText(args){ var self; args.id = args.name;args = Ext.ux.layoutArgs(args);self = new Ext.menu.Item(args); self["addObject"] = function (obj,args){ }; return self; }; tempArgs = args.reloadDesktop;; tempArgs["name"] = "reloadDesktop"; var reloadDesktop = fnormalText(tempArgs); reloadDesktop["args"] = tempArgs; tempArgs = {}; tempArgs["parent"] = Ext.getCmp("desktopMenu");Ext.getCmp("desktopMenu").addObject(reloadDesktop,tempArgs);function fnormalText(args){ var self; args.id = args.name;args = Ext.ux.layoutArgs(args);self = new Ext.menu.Item(args); self["addObject"] = function (obj,args){ }; return self; }; tempArgs = args.reloadPage;; tempArgs["name"] = "reloadPage"; var reloadPage = fnormalText(tempArgs); reloadPage["args"] = tempArgs; tempArgs = {}; tempArgs["parent"] = Ext.getCmp("desktopMenu");Ext.getCmp("desktopMenu").addObject(reloadPage,tempArgs);function fnormalDesktop(args){ var self; args.id = args.name;args.id = args.name ;args = Ext.ux.layoutArgs(args);self = new Ext.Viewport(args); self["addObject"] = function (obj,args){ Ext.ux.layoutScript(obj,args);}; return self; }; tempArgs = args.args;; tempArgs["name"] = "desktopBackground"; var desktopBackground = fnormalDesktop(tempArgs); desktopBackground["args"] = tempArgs; tempArgs = {}; Ext.ux.addContextMenu(desktopBackground);function fnormalPanel(args){ var self; args.id = args.name;args = Ext.ux.layoutArgs(args);self = new Ext.Panel(args); self["addObject"] = function (obj,args){ Ext.ux.layoutScript(obj,args);}; return self; }; tempArgs = args.iconsGroupPanel;; tempArgs["name"] = "iconsGroupPanel"; var iconsGroupPanel = fnormalPanel(tempArgs); iconsGroupPanel["args"] = tempArgs; tempArgs = {}; tempArgs["parent"] = Ext.getCmp("desktopBackground");Ext.getCmp("desktopBackground").addObject(iconsGroupPanel,tempArgs);function fuxIcon(args){ var self; args.id = args.name;args = Ext.ux.layoutArgs(args);args.clickFn = function(){var tmpParams ={operate:"get",type:"page",id:this.windowId};var tmpWindow = Ext.getCmp(this.windowId); if(tmpWindow){tmpWindow.show();Ext.getCmp(this.taskBarId).setActiveBtn(this.windowId);}else if (Ext.getBody().windowId == this.windowId&&(Ext.getBody().windowId =="newsWindow"||Ext.getBody().windowId =="bookEditerWindow")){}else{Ext.getBody().windowId = this.windowId;Ext.ux.getPageData(tmpParams);Ext.getCmp(this.taskBarId).addBtn(this.id);}};self = new Ext.Panel(args); self["addObject"] = function (obj,args){ Ext.ux.layoutScript(obj,args);}; return self; };function fnormalPanel(args){ var self; args.id = args.name;args = Ext.ux.layoutArgs(args);self = new Ext.Panel(args); self["addObject"] = function (obj,args){ Ext.ux.layoutScript(obj,args);}; return self; };function fnormalLabel(args){ var self; args.id = args.name;self = new Ext.form.Label(args); self["addObject"] = function (obj,args){ }; return self; };for (var z = 0; z < args.iconsPanel.length;z++){ tempArgs =  args.iconsPanel[z].args; tempArgs["name"] = args.iconsPanel[z].name; var compz = fuxIcon(tempArgs); compz["args"] = tempArgs; tempArgs = {}; tempArgs["parent"] = iconsGroupPanel; iconsGroupPanel.addObject(compz,tempArgs);Ext.ux.addClickFn(Ext.getCmp(args.iconsPanel[z].name));for (var z1 = 0; z1 < "a".length;z1++){ tempArgs =  args.iconsPanel[z].icon.args; tempArgs["name"] = args.iconsPanel[z].icon.name; var compz1 = fnormalPanel(tempArgs); compz1["args"] = tempArgs; tempArgs = {}; tempArgs["parent"] = compz; compz.addObject(compz1,tempArgs);}for (var z1 = 0; z1 < "a".length;z1++){ tempArgs =  args.iconsPanel[z].iconName.args; tempArgs["name"] = args.iconsPanel[z].iconName.name; var compz1 = fnormalLabel(tempArgs); compz1["args"] = tempArgs; tempArgs = {}; tempArgs["parent"] = compz; compz.addObject(compz1,tempArgs);}}function fnormalPanel(args){ var self; args.id = args.name;args = Ext.ux.layoutArgs(args);self = new Ext.Panel(args); self["addObject"] = function (obj,args){ Ext.ux.layoutScript(obj,args);}; return self; }; tempArgs = args.taskPanel;; tempArgs["name"] = "taskPanel"; var taskPanel = fnormalPanel(tempArgs); taskPanel["args"] = tempArgs; tempArgs = {}; tempArgs["parent"] = Ext.getCmp("desktopBackground");Ext.getCmp("desktopBackground").addObject(taskPanel,tempArgs);function fnormalPanel(args){ var self; args.id = args.name;args = Ext.ux.layoutArgs(args);self = new Ext.Panel(args); self["addObject"] = function (obj,args){ Ext.ux.layoutScript(obj,args);}; return self; }; tempArgs = args.taskLeftPanel;; tempArgs["name"] = "taskLeftPanel"; var taskLeftPanel = fnormalPanel(tempArgs); taskLeftPanel["args"] = tempArgs; tempArgs = {}; tempArgs["parent"] = Ext.getCmp("taskPanel");Ext.getCmp("taskPanel").addObject(taskLeftPanel,tempArgs);function fnormalPanel(args){ var self; args.id = args.name;args = Ext.ux.layoutArgs(args);self = new Ext.Panel(args); self["addObject"] = function (obj,args){ Ext.ux.layoutScript(obj,args);}; return self; }; tempArgs = args.taskBar;; tempArgs["name"] = "taskBar"; var taskBar = fnormalPanel(tempArgs); taskBar["args"] = tempArgs; tempArgs = {}; tempArgs["parent"] = Ext.getCmp("taskPanel");Ext.getCmp("taskPanel").addObject(taskBar,tempArgs);function fuxMenu(args){ var self; args.id = args.name;args = Ext.ux.layoutArgs(args);self = new Ext.menu.Menu(args); self["addObject"] = function (obj,args){ Ext.ux.layoutScript(obj,args);}; return self; }; tempArgs = args.startMenu;; tempArgs["name"] = "startMenu"; var startMenu = fuxMenu(tempArgs); startMenu["args"] = tempArgs; tempArgs = {}; Ext.getCmp("startMenu").showAt([-1000,-1000]);function fnormalPanel(args){ var self; args.id = args.name;args = Ext.ux.layoutArgs(args);self = new Ext.Panel(args); self["addObject"] = function (obj,args){ Ext.ux.layoutScript(obj,args);}; return self; }; tempArgs = args.leftPanel;; tempArgs["name"] = "leftPanel"; var leftPanel = fnormalPanel(tempArgs); leftPanel["args"] = tempArgs; tempArgs = {}; tempArgs["parent"] = Ext.getCmp("startMenu");Ext.getCmp("startMenu").addObject(leftPanel,tempArgs);function fnormalLabel(args){ var self; args.id = args.name;self = new Ext.form.Label(args); self["addObject"] = function (obj,args){ }; return self; };for (var z = 0; z < args.titles.length;z++){ tempArgs =  args.titles[z].args; tempArgs["name"] = args.titles[z].name; var compz = fnormalLabel(tempArgs); compz["args"] = tempArgs; tempArgs = {}; tempArgs["parent"] = leftPanel; leftPanel.addObject(compz,tempArgs);Ext.ux.addClickFn(Ext.getCmp(args.titles[z].name));}function fnormalPanel(args){ var self; args.id = args.name;args = Ext.ux.layoutArgs(args);self = new Ext.Panel(args); self["addObject"] = function (obj,args){ Ext.ux.layoutScript(obj,args);}; return self; }; tempArgs = args.startPanel;; tempArgs["name"] = "startPanel"; var startPanel = fnormalPanel(tempArgs); startPanel["args"] = tempArgs; tempArgs = {}; tempArgs["parent"] = Ext.getCmp("taskBar");Ext.getCmp("taskBar").addObject(startPanel,tempArgs);Ext.ux.addClickMenu(startPanel);function fnormalPanel(args){ var self; args.id = args.name;args = Ext.ux.layoutArgs(args);self = new Ext.Panel(args); self["addObject"] = function (obj,args){ Ext.ux.layoutScript(obj,args);}; return self; }; tempArgs = args.startBtnPanel;; tempArgs["name"] = "startBtnPanel"; var startBtnPanel = fnormalPanel(tempArgs); startBtnPanel["args"] = tempArgs; tempArgs = {}; tempArgs["parent"] = Ext.getCmp("startPanel");Ext.getCmp("startPanel").addObject(startBtnPanel,tempArgs);function fuxTaskBar(args){ var self; args.id = args.name;args = Ext.ux.layoutArgs(args);args.btnsArray =[];args.addBtn = function(iconId){var iconPanel = Ext.getCmp(iconId);var windowId = iconPanel.windowId;var newBtn = new Ext.Panel({id:windowId + "TaskBtnPanel",winId:windowId,cls:"taskBtnPanel",baseCls:"",width:46,shadow:false,height:46,items:[{width:30,height:30,xtype:"panel",baseCls:"",cls:windowId + "TaskBtn"}],clickFn:function(){Ext.getCmp(newBtn.winId).selected();}});this.add(newBtn);this.doLayout();Ext.ux.addClickFn(newBtn);this.activeBtn = newBtn.id;this.btnsArray.push(newBtn.id);this.setActiveBtn(newBtn.winId);};args.removeBtn = function(windowId){var btnId = windowId+"TaskBtnPanel";this.btnsArray = this.btnsArray.slice(btnId);this.remove(btnId);this.activeBtn = "";};args.setActiveBtn=function(windowId){if (this.activeBtn){Ext.get(this.activeBtn).removeClass("taskBtnPanelSelected");}this.activeBtn = windowId+"TaskBtnPanel";Ext.get(this.activeBtn).addClass("taskBtnPanelSelected");};self = new Ext.Panel(args); self["addObject"] = function (obj,args){ Ext.ux.layoutScript(obj,args);}; return self; }; tempArgs = args.taskBtns;; tempArgs["name"] = "taskBtns"; var taskBtns = fuxTaskBar(tempArgs); taskBtns["args"] = tempArgs; tempArgs = {}; tempArgs["parent"] = Ext.getCmp("taskBar");Ext.getCmp("taskBar").addObject(taskBtns,tempArgs);function fnormalPanel(args){ var self; args.id = args.name;args = Ext.ux.layoutArgs(args);self = new Ext.Panel(args); self["addObject"] = function (obj,args){ Ext.ux.layoutScript(obj,args);}; return self; }; tempArgs = args.specialBtnPanel;; tempArgs["name"] = "specialBtnPanel"; var specialBtnPanel = fnormalPanel(tempArgs); specialBtnPanel["args"] = tempArgs; tempArgs = {}; tempArgs["parent"] = Ext.getCmp("taskBar");Ext.getCmp("taskBar").addObject(specialBtnPanel,tempArgs);function fnormalPanel(args){ var self; args.id = args.name;args = Ext.ux.layoutArgs(args);self = new Ext.Panel(args); self["addObject"] = function (obj,args){ Ext.ux.layoutScript(obj,args);}; return self; }; tempArgs = args.wifiPanel;; tempArgs["name"] = "wifiPanel"; var wifiPanel = fnormalPanel(tempArgs); wifiPanel["args"] = tempArgs; tempArgs = {}; tempArgs["parent"] = Ext.getCmp("specialBtnPanel");Ext.getCmp("specialBtnPanel").addObject(wifiPanel,tempArgs);function fnormalPanel(args){ var self; args.id = args.name;args = Ext.ux.layoutArgs(args);self = new Ext.Panel(args); self["addObject"] = function (obj,args){ Ext.ux.layoutScript(obj,args);}; return self; }; tempArgs = args.voicePanel;; tempArgs["name"] = "voicePanel"; var voicePanel = fnormalPanel(tempArgs); voicePanel["args"] = tempArgs; tempArgs = {}; tempArgs["parent"] = Ext.getCmp("specialBtnPanel");Ext.getCmp("specialBtnPanel").addObject(voicePanel,tempArgs);function fnormalPanel(args){ var self; args.id = args.name;args = Ext.ux.layoutArgs(args);self = new Ext.Panel(args); self["addObject"] = function (obj,args){ Ext.ux.layoutScript(obj,args);}; return self; }; tempArgs = args.datePanel;; tempArgs["name"] = "datePanel"; var datePanel = fnormalPanel(tempArgs); datePanel["args"] = tempArgs; tempArgs = {}; tempArgs["parent"] = Ext.getCmp("specialBtnPanel");Ext.getCmp("specialBtnPanel").addObject(datePanel,tempArgs);function fnormalPanel(args){ var self; args.id = args.name;args = Ext.ux.layoutArgs(args);self = new Ext.Panel(args); self["addObject"] = function (obj,args){ Ext.ux.layoutScript(obj,args);}; return self; }; tempArgs = args.taskRightPanel;; tempArgs["name"] = "taskRightPanel"; var taskRightPanel = fnormalPanel(tempArgs); taskRightPanel["args"] = tempArgs; tempArgs = {}; tempArgs["parent"] = Ext.getCmp("taskPanel");Ext.getCmp("taskPanel").addObject(taskRightPanel,tempArgs);  }; var args = {
	args:{
		cls:"backgroundView",
		layout:"border",
		contextMenu:"desktopMenu",
	},
	desktopMenu:{
		cls:"contextMenu",
		shadow:false,
		baseCls:"",
	},
	reloadDesktop:{
		cls:"contextMenuLabel",
		text:"hello",
	},
	reloadPage:{
		cls:"contextMenuLabel",
		text:"刷新页面",
		handler:function(){
			location.reload();
		}
	},
	iconsGroupPanel:{
		baseCls:"",
		cls:"iconsGroup",
		region:"center"
	},
	iconsPanel:[{
		name:"newsIconPanel",
		args:{
			width:76,
			height:72,
			baseCls:"",
			cls:"appIconPanel",
			layout:"border",
			windowId:"newsWindow",
			taskBarId:"taskBtns",
		},
		icon:{
			name:"newsIcon",
			args:{
				baseCls:"",
				cls:"appIcon",
				region:"center",
				width:48,
				height:48,
				layout:"absolute"
			},
		},
		iconName:{
			name:"newsIconName",
			args:{
				cls:"appIconName",
				text:"新闻",
				baseCls:"",
				height:18,
				width:48,
				region:"south",
			}
		}
	},{
		name:"editIconPanel",
		args:{
			width:76,
			height:72,
			baseCls:"",
			cls:"appIconPanel",
			layout:"border",
			windowId:"bookEditerWindow",
			taskBarId:"taskBtns",
		},
		icon:{
			name:"editIcon",
			args:{
				baseCls:"",
				cls:"appIcon",
				region:"center",
				width:48,
				height:48,
				layout:"absolute"
			},
		},
		iconName:{
			name:"editIconName",
			args:{
				cls:"appIconName",
				text:"编辑",
				baseCls:"",
				height:18,
				width:48,
				region:"south",
			}
		}
	},{
		name:"circulateIconPanel",
		args:{
			width:76,
			height:72,
			baseCls:"",
			cls:"appIconPanel",
			layout:"border",
			windowId:"circulateWindow",
			taskBarId:"taskBtns",
		},
		icon:{
			name:"circulateIcon",
			args:{
				baseCls:"",
				cls:"appIcon",
				region:"center",
				width:48,
				height:48,
				layout:"absolute"
			},
		},
		iconName:{
			name:"circulateIconName",
			args:{
				cls:"appIconName",
				text:"流通",
				baseCls:"",
				height:18,
				width:48,
				region:"south",
			}
		}
	},{
		name:"collectionIconPanel",
		args:{
			width:76,
			height:72,
			baseCls:"",
			cls:"appIconPanel",
			layout:"border",
			windowId:"collectionWindow",
			taskBarId:"taskBtns",
		},
		icon:{
			name:"collectionIcon",
			args:{
				baseCls:"",
				cls:"appIcon",
				region:"center",
				width:48,
				height:48,
				layout:"absolute"
			},
		},
		iconName:{
			name:"collectionIconName",
			args:{
				cls:"appIconName",
				text:"典藏",
				baseCls:"",
				height:18,
				width:48,
				region:"south",
			}
		}
	},{
		name:"journalIconPanel",
		args:{
			width:76,
			height:72,
			baseCls:"",
			cls:"appIconPanel",
			layout:"border",
			windowId:"journalWindow",
			taskBarId:"taskBtns",
		},
		icon:{
			name:"journalIcon",
			args:{
				baseCls:"",
				cls:"appIcon",
				region:"center",
				width:48,
				height:48,
				layout:"absolute"
			},
		},
		iconName:{
			name:"journalIconName",
			args:{
				cls:"appIconName",
				text:"期刊",
				baseCls:"",
				height:18,
				width:48,
				region:"south",
			}
		}
	},{
		name:"libraryIconPanel",
		args:{
			width:76,
			height:72,
			baseCls:"",
			cls:"appIconPanel",
			layout:"border",
			windowId:"libraryWindow",
			taskBarId:"taskBtns",
		},
		icon:{
			name:"libraryIcon",
			args:{
				baseCls:"",
				cls:"appIcon",
				region:"center",
				width:48,
				height:48,
				layout:"absolute"
			},
		},
		iconName:{
			name:"libraryIconName",
			args:{
				cls:"appIconName",
				text:"我的图书馆",
				baseCls:"",
				height:18,
				width:80,
				style:"margin-left:-16px;",
				region:"south",
			}
		}
	}],
	taskPanel:{
		baseCls:"",
		height: 50,
		border:false,
		region: "south",
		layout: "column",
	},
	taskLeftPanel:{
		baseCls:"",
		height:50,
		columnWidth:.5,
	},
	taskBar:{
		baseCls:"",
		height:50,
		width:996,
		border:false,
		cls:"taskBar",
		layout:"border"
	},
	startPanel:{
		region:"west",
		width:46,
		height:46,
		baseCls:"",
		cls:"startPanel",
		clickMenu:"startMenu",
	},
	startMenu:{
		baseCls:"",
		shadow:false,
		height:300,
		width:200,
		layout:{
			type:"hbox",
		},
		cls:"startMenu",
	},
	leftPanel:{
		baseCls:"",
		flex:1,
		height:295,
		layout:{
			type:"vbox",
			align:"stretch",
		},
		defaults:{
			baseCls:"",
			margins:"0 0 0 0",
			cls:"menuIcon",
			height:25,
		},
		title:"桌面应用",
		cls:"leftPanel",
		shadow:false,
	},
	titles:[{
		name:"circulateMenuIcon",
		args:{
			text:"流通",
			clickFn:function(){
				Ext.getCmp("circulateIconPanel").el.dom.click();
				Ext.getCmp("startMenu").hide();
			}
		}
	},{
		name:"newsMenuIcon",
		args:{
			text:"新闻",
			clickFn:function(){
				Ext.getCmp("newsIconPanel").el.dom.click();
				Ext.getCmp("startMenu").hide();
			}
		}
	},{
		name:"editMenuIcon",
		args:{
			text:"采编",
			clickFn:function(){
				Ext.getCmp("editIconPanel").el.dom.click();
				Ext.getCmp("startMenu").hide();
			}
		}
	},{
		name:"collectionMenuIcon",
		args:{
			text:"典藏",
			clickFn:function(){
				Ext.getCmp("collectionIconPanel").el.dom.click();
				Ext.getCmp("startMenu").hide();
			}
		}
	},{
		name:"journalMenuIcon",
		args:{
			text:"期刊",
			clickFn:function(){
				Ext.getCmp("journalIconPanel").el.dom.click();
				Ext.getCmp("startMenu").hide();
			}
		}
	},{
		name:"libraryMenuIcon",
		args:{
			text:"我的图书馆",
			clickFn:function(){
				Ext.getCmp("libraryIconPanel").el.dom.click();
				Ext.getCmp("startMenu").hide();
			}
		}
	}],
	rightPanel:{
		xtype:"panel",
		baseCls:"",
		flex:2,
		height:295,
		shadow:false,
		title:"特殊使用",
		style:"border-left:1px solid grey",
	},
	specialLabel:{
		baseCls:"",
		xtype:"label",
		text:"作为比较",
		style:"font-size:18px;color:blue;"
	},
	startBtnPanel:{
		width: 46,
		height: 46,
		cls: "startBtnPanel",
		baseCls: "",
	},
	taskBtns:{
		region:"center",
		layout:"column",
		shadow:false,
		baseCls:"",
		autoScroll:true
	},
	specialBtnPanel:{
		width: 187,
		height:46,
		region:"east",
		baseCls:"",
		cls:"specialBtnPanel",
		layout:"column"
	},
	voicePanel:{
		width: 20,
		height:20,
		baseCls:"",
		cls:"specialBtn voicePanel"
	},
	wifiPanel : {
		width: 20,
		height:20,
		baseCls:"",
		cls:"specialBtn wifiPanel"
	},
	datePanel : {
		width: 56,
		height: 31,
		baseCls:"",
		cls:"specialBtn datePanel"
	},
	taskRightPanel:{
		baseCls:"",
		height:70,
		columnWidth:.5,
	}
}
; var mysql = {}; var container = new fdesktopBackground(args,mysql,"");});