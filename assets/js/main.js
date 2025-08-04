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
 
    // trainsition for title 
   let index = 0;
   let titles = [
       "Sản phẩm nổi bật",
         "Sản phẩm mới"];
    $(".title-prev").click(function() {
        index++;
        if(index >= titles.length) {
            index = 0;
            }
            
            $("#product-title").text(titles[index]);
            
        });
    $(".title-next").click(function() {
        index++;
        if(index >= titles.length) {
            index = 0;
            }
            
            $("#product-title").text(titles[index]);
            
        });
});
