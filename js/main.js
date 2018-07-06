$(function(){
    $('#scrollArrow').click(function(){
        $('html,body').animate({
            scrollTop: $('main').offset().top
        }, 500)
    });

    $('.image-select button').click(function() {
        if (!$(this).hasClass('selected')) {
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');

            // Handle screenshot switching
            var newImg = screenshots[$(this).val()];
            var img = $(this).closest('.project-external').find('.project-images img');

            img.attr({
                'src': newImg.url,
                'alt': newImg.text,
                'title': newImg.text
            });
        }
    });
});

var screenshots = {
    reddyreader1: {
        url: './images/reddyreader1.png',
        text: 'ReddyReader Home Page'
    },
    reddyreader2: {
        url: './images/reddyreader2.png',
        text: 'ReddyReader Other Book Speeds'
    }
}
