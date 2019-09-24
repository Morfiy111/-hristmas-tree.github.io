$(document).ready(function(){
    $(".description-banner-block .main-button-catalog").on("click", function () {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function () {
    $(".shares-item").on("click", function () {
        $(".shares-item").removeClass("shares-item-active");
        $(this).addClass("shares-item-active");
    })
})