// $('.js-transition-page').on('click', function(){
//   $(this).removeClass('slide-in').addClass('slide-out');
// });


// Toggle read more or read less when stuff is shown or collapsed

// $('.story-collapse').on('shown.bs.collapse', function () {
//   $(this).next("a").html("<p><i>Read Less...</i></p>");
// });

// $('.story-collapse').on('hidden.bs.collapse', function () {
//   $(this).next("a").html("<p><i>Read More...</i></p>");
// });

// Turn on the accordian

$(function() {
	$('#st-accordion').accordion();
});


// Graph image modals
$('.js-modal-activator').on('click', function(){
  $('.js-modal-body').html('');
  $('.js-modal-caption').text('');
  var currentGraph = $(this).find('img').attr('src');
  var text = $(this).next('.js-caption').text();
  $('.js-modal-body').append('<img src="' + currentGraph + ' " width="100%">');
  $('.js-modal-caption').text(text);
});  


// Links to internal pages, make click events to open up dropdown
$('.js-primer').on('click', function(){
  $('.js-primer-section').click();
});
$('.js-reading').on('click', function(){
  $('.js-reading-section').click();
});
$('.js-math').on('click', function(){
  $('.js-math-section').click();
});
$('.js-science').on('click', function(){
  $('.js-science-section').click();
});
$('.js-hunger').on('click', function(){
  $('.js-hunger-section').click();
});

//$(function() {
$('a[href*="#"]:not([href="#"])').click(function(e) {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top,
      }, 250);
      return false;
    }
  }
});


// for demo

$("#bubble-meals").hide();
