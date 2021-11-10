import lozad from 'lozad'
lozad().observe()

$(function() {
  $('.inview').on('inview', function(event, isInView) {
    if (isInView) {
      $(this)
        .stop()
        .addClass('is-show')
    }
  })
})

const lHeader = $('.l-header')
const hamburgerMenu = $('.js-hamburger-menu')
const spNavigation = $('.l-header__global-navigation')

// ハンバーガーメニュー
hamburgerMenu.on('click', function(e) {
  if (!spNavigation.hasClass('open')) {
    spNavigation.addClass('open')
    hamburgerMenu.addClass('open')
    lHeader.addClass('open')
    // spNavigation.fadeIn(300)
  } else {
    spNavigation.removeClass('open')
    hamburgerMenu.removeClass('open')
    lHeader.removeClass('open')
    // spNavigation.fadeOut(300)
  }
})

// pageTopへ
const pagetop = $('.js-pagetop')
$(window).on('scroll', function() {
  if ($(this).scrollTop() > 100) {
    pagetop.fadeIn()
  } else {
    pagetop.fadeOut()
  }
})
pagetop.find('a').on('click', function(e) {
  var speed = 400
  var href = $(this).attr('href')
  var target = $(href == '#' || href == '' ? 'html' : href)
  var position = target.offset().top - 50
  $('html, body').animate({ scrollTop: position }, speed, 'swing')
  e.preventDefault()
})

// SPメニュー押下時
$('.js-scroll-link').on('click', function(e) {
  var speed = 400
  var href = $(this).attr('href')
  var target = $(href == '#' || href == '' ? 'html' : href)
  var position = target.offset().top - 50
  spNavigation.removeClass('open')
  hamburgerMenu.removeClass('open')
  lHeader.removeClass('open')
  // spNavigation.fadeOut(300)
  $('html, body').animate({ scrollTop: position }, speed, 'swing')
  e.preventDefault()
})
