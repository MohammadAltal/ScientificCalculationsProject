
$(function() {
    "use strict";
	window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {
         $('.p').countTo();
    } 
}
   
    
    new WOW().init();
	
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if 
  });
  
  
  $(window).load(function () {
    
    "use strict";
    
    // Loading Elements
    
    $(".loading-overlay .sk-folding-cube").fadeOut(2000, function () {
        
        // Show The Scroll

        $("body").css("overflow", "auto");
        
        $(this).parent().fadeOut(2000, function () {
            
            $(this).remove();
			
			
			 
			
			
			
        });
    });
		 $(".Typed1").typed({
                    strings: ["Scientific Calculations Project <br> Strings and Waves"],
                    typeSpeed:50,
					startDelay:3000
                });
});
  
});





