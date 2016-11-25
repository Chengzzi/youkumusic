var timer = null;
var istop = null;
$(function(){
	
	$(".f3 a").each(function(index,tutu){
		$(this).css("background","url(img/1/r"+(index+1)+".png) no-repeat left -5px");
	});

	
	

	$('.totopimg').hover(function(){
	    $(this).attr("src","img/1/s3.png");
	},function(){
	    $(this).attr("src","img/1/s2.png");
	}
	);
	
	$('.totopimg1').on("click",function(){
	    timer = setInterval(totop,30);
	});

	window.onscroll = function(){
		if(!istop){
			clearInterval(timer);
		}
		istop = false;


		var ostop = document.body.scrollTop || document.documentElement.scrollTop ;
		if(ostop<300){
			$('.totopimg1').css("display","none");
			$('.top2').css("display","block");
		}else{
			$('.totopimg1').css("display","block");
			$('.top2').css("display","none");
		}
	};
})

$(function(){
	$('.carousel').carousel({
	    interval: 3000 
	});
	setulW("lb1");
	setulW("lb2");
	setulW("lb3");
	setulW("lb4");
})


$(function(){
	$('.l_btn').on("mouseover",function(){
		$(this).css("background","url(img/1/prev_hover_bg.png) no-repeat");
		}
	);
	$('.l_btn').on("mouseout",function(){
		$(this).css("background","url(img/1/prev_bg.png) no-repeat");
		}
	);
	$('.r_btn').on("mouseover",function(){
		$(this).css("background","url(img/1/next_hover_bg.png) no-repeat");
		}
	);
	$('.r_btn').on("mouseout",function(){
		$(this).css("background","url(img/1/next_bg.png) no-repeat");
		}
	);


	$('.r_btn').click(function(){
		var $index = $(this);
		slide($index);
		}
	);
	$('.l_btn').click(function(){
		var $index = $(this);
		slide($index,0);
		}
	);
});




function setulW(className){
	var $ul = $("."+className+" ul");
	var $li = $ul.find($("li"))
	var liw = $li.outerWidth();
	var ulw = liw*$li.length;
	console.log($li.length);
	$ul.css("width",ulw);
}

function slide($index,zero){
	var oUl= $index.parent().find("ul")[0];
	if(zero==0){
		Move(oUl,{"left":zero},function(){
			$index.parent().find(".r_btn").css("display","block");
			$index.css("display","none");
		});
	}else{
		var val= oUl.offsetWidth - $index.parent().width()-10;
		Move(oUl,{"left":-val},function(){
			$index.parent().find(".l_btn").css("display","block");
			$index.css("display","none");
		});
	}
}

function totop(){
	var ostop = document.body.scrollTop || document.documentElement.scrollTop ;
	var v = Math.ceil(ostop/8);
	document.body.scrollTop = document.documentElement.scrollTop = ostop-v;
	console.log(ostop);
	if(ostop==0) {
		clearInterval(timer);
	}
	istop=true;
}