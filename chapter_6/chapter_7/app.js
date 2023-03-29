$(function(){
  $('.box1').on('click', function(){
    $(this).addClass('box1-ext')
  });

  $('.box1').mouseout(function(){
    $(this).removeClass('box1-ext')
  })
})