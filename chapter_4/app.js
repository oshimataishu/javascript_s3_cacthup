$(function(){
  $('.box1').slideDown(2000, function(){
    $('.box1').css({
      'width': '200px',
      'height': '100px',
      'background-color': '#00f'
    }).slideUp(2000);
  });
});