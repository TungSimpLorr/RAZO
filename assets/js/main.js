$(document).ready(function() {
   
   // open sidebar menu 
    $(".menu-bar").hide();
    $(".bar-icon").click(function(e) {   
        e.preventDefault();
        $(".menu-bar").slideToggle(300);
    });
 
    //  open catalogue menu
   $(".menu-product-bar").hide();
    $(".catalogue-icon").click(function(e) {
        e.preventDefault();
        $(".menu-product-bar").slideToggle();
    });
   
});
