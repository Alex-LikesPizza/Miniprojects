$('.shop-dropdown').on('pointerenter', () => {
  $('.header__nav').addClass('header__menu');
  $('.header__blackout').css('display', 'block');
  $('#header__shop').css('display', 'block');
  $('#header__more').css('display', 'none');
})

$('.header__blackout').on('pointerenter', () => {
  $('.header__blackout').css('display', 'none');
  $('.header__nav').removeClass('header__menu');
  $('#header__shop').css('display', 'none');
  $('#header__more').css('display', 'none');
})
$('.more-dropdown').on('pointerenter', () => {
  $('.header__nav').addClass('header__menu');
  $('.header__blackout').css('display', 'block');
  $('#header__shop').css('display', 'none');
  $('#header__more').css('display', 'block');
})