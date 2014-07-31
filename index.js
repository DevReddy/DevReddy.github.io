$(document).ready(function(){


$('.slider').hover(
        function(){
            $(this).children('.hider').slideDown(200);
        },
        function(){
            $(this).children('.hider').slideUp(200);
        }
    );



});