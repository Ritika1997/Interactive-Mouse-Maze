//in maze.js
//using jquery
var lost=0;
var flag;
$(document).ready(function(){
    $("#start").click(function(){
	    $(".boundary").css("background-color", "#eeeeee");
        lost=0;		
	});
	$("#start").click(function(){
		document.getElementById("status").innerHTML="New game started";
		flag=1;
	});
	$("#maze").on({ 
	mouseleave: function()
	{
            if(flag==1)
			{
			alert("Don't cheat!!");
			document.getElementById("status").innerHTML="Go start a new game!!";
			}
			flag=0;
	}
	});	
	$(".boundary").mouseover(function(){
		if (flag==1){
        $(".boundary").css("background-color", "#ff0000");
		lost=1;
		document.getElementById("status").innerHTML="SORRY YOU LOST!!";
		flag=0;
		}
    });
    $("#end").mouseover(function(){
	if(flag==1)
	{
	if(lost==0)	
        document.getElementById("status").innerHTML="YAYY YOU WIN!!";
	flag=0;
	}
	});
});
