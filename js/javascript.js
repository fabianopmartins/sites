$(document).ready(function(){

$("#subirTopo").hide();

$('a#subirTopo').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
   });

$(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
        $('#subirTopo').fadeIn();
        } else {
            $('#subirTopo').fadeOut();
        }
    });
});