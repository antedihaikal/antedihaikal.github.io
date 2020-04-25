// event pada saat link di klik
$('.page-scroll').on('click', function(e) {

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen
    var elemenTujuan = $(tujuan);

    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();
})

// paralax
//about
$(window).on('load', function() {
    $('.pkiri').addClass('pmuncul');
    $('.pkanan').addClass('pmuncul');
});

$(window).scroll(function() {
    var wscroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wscroll / 4 + '%)'
    });
    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wscroll / 2 + '%)'
    });
    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wscroll / 1.5 + '%)'
    });

    // portofolio
    if (wscroll > $('.portofolio').offset().top - 250) {
        $('.portofolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portofolio .thumbnail').eq(i).addClass('muncul');
            }, 500 * (i + 1));
        });
    }

});