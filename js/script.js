$(document).ready(function(){

    // JS for burger
    $(".header__burger").click(function(event){
        $(".header__burger,.wrapper").toggleClass('active')
    });

    // Smooth movement to a
    $(".menu__box").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
    });
    
});