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
  var currentGraph = $(this).find('img').attr('src');
  $('.js-modal-body').append('<img src="' + currentGraph + ' " width="100%">');
});  
