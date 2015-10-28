$( document ).ready(function() {

/*slider reviews*/
  $('.reviews-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
/*slider reviews end*/

/*slider work*/
  $('.work-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
/*slider work end*/

/*scroll*/
  $(document).ready(function(){
    $('a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      e.preventDefault();
    });
    return false;
  });
/*scroll end*/

  $('.wonder--last').click(function(){
    $('.section-feedback').fadeToggle();
  });
});