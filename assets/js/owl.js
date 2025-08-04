$(document).ready(function() {

   
    // owl carousel banner slider
   
     $(".img-banner").owlCarousel({
      items: 1, 
      loop: true, 
      margin: 0 ,
      dots: true, 
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      nav: true, 
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right' ></i>"
      ],
    });
	
});