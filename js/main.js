$(function(){
    $('#scrollArrow').click(function(){
        $('body').animate({
            scrollTop: $('#content').offset().top
        }, 500)
    });
})
