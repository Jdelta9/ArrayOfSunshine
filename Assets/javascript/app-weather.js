$(function () {
  /* onread execute js */

  /* card data js */
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=los%20angeles,us&units=imperial&appid=55d191735a90c1b21b0b3f38b25624b5',
    method: 'GET',
  }).then(function (response) {
    processData(response);
  });

  function processData(response){
    console.log(response);
    var city = $('#weather-city');
    var temperature = $('#weather-temperature');

    city.html(response.name);
    temperature.html(response.main.temp + "℃");
  }

});