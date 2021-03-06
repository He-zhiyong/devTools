function Panel(args) {
    var self;
	if(!args.repeatFlag){
	    args.id = args.name;
    }
	
	if(!args.style){
		args.style = "";
	}
	if(args.dataIndex){
		args.selectedValue = thisComp.records.get(args.dataIndex);
		var tmpImageSrc = Ext.ux.getBookCover(args.selectedValue);
		if(tmpImageSrc){
			args.imageSrc = tmpImageSrc;
		}
	}
    if(args.imageSrc){
    	args.style = args.style+"background:url('"+args.imageSrc+"') center no-repeat;";
    }
    if(args.bgSize){
    	args.style = args.style+"background-size:"+args.bgSize+";";
    }
	
    args = Ext.ux.layoutArgs(args);
    
    if(!args.listeners){
    	args.listeners = {};
    }
    if(args.renderFn){
	    args.listeners.afterrender = args.renderFn;
    }
    
    self = new Ext.Panel(args);


    self["addObject"] = function(obj, args) {
        Ext.ux.layoutScript(obj, args);
    };

    
    return self;
};