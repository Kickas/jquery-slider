
var slideInt=1;
var slidenext=2;
$(document).ready(function(){
	
  
	$("#slider img#1").fadeIn(300);
	startslide();
});

function startslide(){
	var count=$("#slider>img").length;
	var loop=setInterval(function(){
		if(slidenext>5){
			slideInt=1;
			slidenext=1;
		}
		$("#slider>img").fadeOut(300);
		$("#slider>img#"+slidenext).fadeIn(300);
		slidenext=slidenext+1;
		slideInt=slidenext;

	

	},3000)
}


function prev(){
	
	var first= slideInt-1;
	showslide(first);


}


function next(){
	
	var first= slideInt+1;
	showslide(first);


}

function showslide(id){
	stoploop();
	
	if(id>count){
		id=1;

	}
	else if(id<1){
		id=count;
	}
	$("#slider>img").fadeOut(300);
		$("#slider>img#"+id).fadeIn(300);
slideInt=id;
slidenext=id+1;

startslide();


}

function stoploop(){
	window.clearInterval(loop);
}
$("#slider>img").hover(function(){stoploop();},function(){startslide();});






