$(document).ready(function(){

   $('ul#gallery li').on('mouseenter', function(){
   		var title = $(this).children().data('title');
   		if(title == null){
   			title = ' ';
   		}
   		$(this).append('<div class="overlay"></div>');
   		var overlay = $(this).children('.overlay');
   		overlay.html('<h3>'+title+'</h3>');
   		overlay.fadeIn(800);
   });
   $('ul#gallery li').on('mouseleave', function(){
   		$(this).append('<div class="overlay"></div>');
   		var overlay = $(this).children('.overlay');
   		overlay.fadeOut(200);
   });
});