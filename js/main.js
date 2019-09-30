$(document).ready(function(){
    $(".btn-banners-block a").on("click", function () {
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

function calculateSum (){
    var sum = 0;
    var count = 0;
    $("input[data-price]").each(function(){
        var c=parseInt($(this).val());
        count+=c;
        sum+=parseInt($(this).data("price"))*c;
    });

    $(".js-count-total").text(count);
    $(".js-sum-total").text(sum);
    $(".js-sum-total-value").val(sum);
}

$('.minus').on("click",function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    calculateSum();
    $(this).parent().parent().siblings('.card-title-sum').text($input.val()*parseInt($input.data('price')));
    return false;
});
$('.plus').click(function (event) {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    calculateSum();
    $(this).parent().parent().siblings('.card-title-sum').text($input.val()*parseInt($input.data('price')));

    return false;
});

$(document).ready(function () {
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });
});