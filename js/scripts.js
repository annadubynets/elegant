$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
});

$(function() {
    $('.go-to-bottom').click (function() {
        $('html, body').animate({scrollTop: $('footer').offset().top }, 'slow');
        return false;
    });
});