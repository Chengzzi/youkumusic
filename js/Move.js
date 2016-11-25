function Move(obj,json,fn){ 
		// json = {attr:value}
		var flag = true;
		clearInterval(obj.timer);
		obj.timer= setInterval(function(){
			for(var attr in json){
				if(attr=="opacity"){
					var xpos=parseFloat(getStyle(obj,attr))*100;
					var V = (json[attr] - xpos)/5;
				}else{
					var xpos=parseInt(getStyle(obj,attr));
					var V = (json[attr] - xpos)/10;
				}
				
				V = V>0?Math.ceil(V):Math.floor(V);			
	
				if(attr=="opacity"){
				obj.style[attr]=(xpos+V)/100
				}else if(attr=="background"){
				obj.style[attr]=json[attr];
				}
				 else{
				obj.style[attr]=xpos+V+"px";
				}
	
				if(xpos!=json[attr])
				{
					flag = false;
				}else{
					flag = true;
				}
			}
			if(flag){
				clearInterval(obj.timer);
					if(fn) fn();
			}
		},30);
}