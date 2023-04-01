const API_KEY = "11bfd3c29529936616cc76f37c671892"

$(function(){
  $('#btn').on('click', function(event){

    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $("#cityname").val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',
    }).done(function(data){
      $('#place').text(data.name);
      $('#max-temp').text(data.main.temp_max);
      $('#min-temp').text(data.main.temp_min);
      $('#humidity').text(data.main.humidity);
      $('#wind').text(data.wind.speed);
      $('#weather').text(data.weather[0].main);
      $('#img').attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('#img').attr("alt", data.weather[0].main)
    }).fail(function(data){
      alert('通信に失敗しました');
    })
  })
})