//current position
var pos;
//number of slides
var totalSlides;
//get the slide width
var sliderWidth;

$(window).resize(function() {
    slide();
})

$(document).ready(function(){
    slide(true);
});//DOCUMENT READY

function slide(createli=false) {
    pos = 0;
    totalSlides = $('#slider li').length;
    sliderWidth = $('#slider-wrap').width();
	/*****************
	 BUILD THE SLIDER
	*****************/
    //set width to be 'x' times the number of slides
    $('#wrapper').height(sliderWidth / 4 * 3);
    $('#slider li img').width(sliderWidth);
    $('#slider-wrap ul#slider').width(sliderWidth*totalSlides);
    $('#pagination-wrap').css('margin-top', sliderWidth / 4 * 3 - 40 + 'px');
    console.log(totalSlides);
    //next slide 	
	$('#next').click(function(){
		slideRight();
	});
	
	//previous slide
	$('#previous').click(function(){
		slideLeft();
	});
	/*************************
	 //*> OPTIONAL SETTINGS
	************************/
	//automatic slider
	var autoSlider = setInterval(slideRight, 5000);
	
    //for each slide 
    if (createli && totalSlides > 1) {
	    $.each($('#slider-wrap ul li'), function() { 
	       //set its color
	       var c = $(this).attr("data-color");
	       $(this).css("background",c);
        
	       //create a pagination
	       var li = document.createElement('li');
	       $('#pagination-wrap ul').append(li);	   
	    });
    }
	
	//counter
	countSlides();
	
	//pagination
	pagination();
	
	//hide/show controls/btns when hover
	//pause automatic slide when hover
	$('#slider-wrap').hover(
	  function(){ $(this).addClass('active'); clearInterval(autoSlider); }, 
	  function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); }
	);
}
	
/***********
 SLIDE LEFT
************/
function slideLeft(){
    pos--;
    if(pos==-1){ pos = totalSlides-1; }
    $('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 	
    
    //*> optional
    countSlides();
    pagination();
}


/************
 SLIDE RIGHT
*************/
function slideRight(){
    pos++;
    if(pos==totalSlides){ pos = 0; }
    $('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 
    
    //*> optional 
    countSlides();
    pagination();
}

    
/************************
 //*> OPTIONAL SETTINGS
************************/
function countSlides(){
	if (totalSlides == 1) {
		return;
	}
	$('#counter').html(pos+1 + ' / ' + totalSlides);
}

function pagination(){
	if (totalSlides == 1) {
		return;
	}
    $('#pagination-wrap ul li').removeClass('active');
	$('#pagination-wrap ul li:eq('+pos+')').addClass('active');
	for (var i = 0; i < totalSlides; i++) {
		if (pos == i) {
			$('#number-'+(i+1)).show();
		} else {
			$('#number-'+(i+1)).hide();
		}
	}
}

	