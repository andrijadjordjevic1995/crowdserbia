//neuspeli pokusaj
$(document).ready(function(){

   $('ul#gallery li').on('mouseenter', function(){
   		var lager = $(this).children().data('lager');
         var str = "nema";
         var overlay;
   		if(lager == str){
   			$(this).append('<div class="overlay2"></div>');
            overlay = $(this).children('.overlay2');
   		}else{
            $(this).append('<div class="overlay"></div>');
            overlay = $(this).children('.overlay');
         }
   		
   		//overlay.html('<h3>'+title+'</h3>');
         //overlay.html('<img src="images/cart2.png">');
         overlay.fadeIn(100);
   		

   });
   $('ul#gallery li').on('mouseleave', function(){
         var lager = $(this).children().data('lager');
         var str = "nema";
         var overlay;
         if(lager == str){
            $(this).append('<div class="overlay2"></div>');
            overlay = $(this).children('.overlay2');
            overlay.fadeOut(100);
            overlay.remove();//spreci gomilanje overlay-ova
         }else{
            $(this).append('<div class="overlay"></div>');
            overlay = $(this).children('.overlay');
            overlay.fadeOut(100);
            overlay.remove();//spreci gomilanje overlay-ova
         }
   		
   });
   $('ul#gallery li').click(function(){
      var lager = $(this).children().data('lager');
      var title = $(this).children().data('title');
      var str = "nema";
      if(lager == str){

      }else{
         $('#cartlist').append('<li><a href='+title+'><img src ='+title+' ></a></li>');
         $('.cart').fadeIn(500);
      }
   });
});