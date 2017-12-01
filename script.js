$('.left').hide();

$('#carouselExampleControls').on('slid.bs.carousel', function (ev) {
    if($('.first-item').hasClass('active')){
        $('.left').hide();
        $('.right').show();
    }else if ($('.last-item').hasClass('active')){
        $('.left').show();
        $('.right').hide();
    }else{
        $('.left').show();
        $('.right').show();
    }
    
});