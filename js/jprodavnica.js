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
         $('#cartlist').append('<li title = "Ukloni iz korpe" id ='+title+'><a href="#"><img src ='+title+'></a></li>');
      //  $('#tabela').append('<tr><td><a href='+title+'><img width=40% src ='+title+' ></a></li></td></tr>');
        //$('#tabela').append('<tr></tr>');
        // $('.cart').fadeIn(500);
        /*for (i = 0; i <  $('#cartlist li').length; i++) { 
            if()
         }
        $('#cartlist li').css("display", "block")*/
      }
   });
   //$('#cartlist li').click(function(event){
      //$('#'+event.target.id).css("visibility", "hidden");
     // $('#'+this.id).remove();
     //$(this).remove();
     // $(el).parentNode.removeChild(el);
   //});
});