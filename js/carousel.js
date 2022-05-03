$(function(){
  		// Блок который будем двигать
  var carouselMain = $('.carousel_main'),
      // Количество картинок
      carouselImgL = $('.carousel_main').children().length,
      // Выбор картинок
      carouselImg = $('.carousel_main a'),
      // Ширина блока вместе с margin
      carouselImgW = carouselImg.width() + parseInt(carouselImg.css('margin-right')) + 2,
      // Стрелки
      arrowsL = $('.arrows_l'),
      arrowsR = $('.arrows_r'),
      // Текущая картинка
      carouselImgCurrent = 0,
      carouselImgShow = 4;

  function showArrowsIfNeed (){
    if(carouselImgCurrent <= 0){
      arrowsL.addClass('hidden');
    } else {
      arrowsL.removeClass('hidden');
    }
    if(carouselImgCurrent >= (carouselImgL - carouselImgShow) ){
      arrowsR.addClass('hidden');
    } else {
      arrowsR.removeClass('hidden');
    }
  }
  showArrowsIfNeed();

  arrowsR.on('click', function (event) {
    event.preventDefault();
    var thisCarouselMain = $(this).parent().find('.carousel_main');
    var carouselImgL = thisCarouselMain.children().length;
    if (carouselImgCurrent < (carouselImgL - carouselImgShow) ) {
      carouselImgCurrent +=1;
      thisCarouselMain.css('left', -(carouselImgW * carouselImgCurrent) );
      thisCarouselMain.data('current', carouselImgCurrent);
    } else {
      return false;
    }
    showArrowsIfNeed();
  });

  arrowsL.on('click', function (event) {
    event.preventDefault();
    var thisCarouselMain = $(this).parent().find('.carousel_main');
    var carouselImgL = thisCarouselMain.children().length;
    if (carouselImgCurrent > 0 ) {
      carouselImgCurrent -=1;
      thisCarouselMain.css('left', -(carouselImgW * carouselImgCurrent) );
      thisCarouselMain.data('current', carouselImgCurrent);
    } else {
      return false;
    }
    showArrowsIfNeed();
  });
  
  var curentImageShow = $('.curent_image_show img');
  $('.carousel_main a').on('click', function (event) {
    event.preventDefault();
    var thisUrl = $(this).data('url');
    curentImageShow.attr('src', thisUrl);
    $('.carousel_main a').removeClass('active');
    $(this).addClass('active');
  });

});