$(function(){
	$('.carousel').carousel({
	    interval: 3000 
	});
	
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


$(function() {
	$(".list:gt(0)").css("display","none");
	$(".list1:gt(0)").css("display","none");
    $(".llist>li").each(function(index,ooo){
        $(this).on("click",function(){
            console.log(index);
            $(".list").css("display","none");
            $(".list")[index-1].style.display = "block";
            $(".list")[index-1].style.display = "block";
        })
    })
    $(".list2:gt(0)").css("display","none");
    $(".llist2>li").each(function(index,ooo){
        $(this).on("click",function(){
            console.log(index);
            $(".list2").css("display","none");
            $(".list2")[index-1].style.display = "block";
            $(".list2")[index-1].style.display = "block";
        })
    })
     $(".llist1>li").each(function(index,ooo){
        $(this).on("click",function(){
            console.log(index);
            $(".list1").css("display","none");
            $(".list1")[index-1].style.display = "block";
            $(".list1")[index-1].style.display = "block";
        })
    })

})

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