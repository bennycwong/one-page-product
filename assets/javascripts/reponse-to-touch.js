$(document).ready(function() {
  $('.touch-button').bind('touchstart', function(){
      $(this).addClass('hover');
  });
  $('.touch-button').bind('touchend', function(){
      $(this).removeClass('hover');
  });
});
