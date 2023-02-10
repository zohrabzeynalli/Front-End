$(document).ready(function() {
    $("#submitBtn").click(function(e) {
      e.preventDefault();
      let city = $("#city").val();
      $.ajax({
        url:
          "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=eb3d50b9b9bb7621099dab9a5a563f4d",
        type: "GET",
        dataType: "jsonp",
        success: function(data) {
          let weatherData = "";
          weatherData += "<h2>" + data.name + "</h2>";
          weatherData += "<p>" + data.main.temp + "&#8451;</p>";
          weatherData += "<p>" + data.weather[0].description + "</p>";
          $("#weatherData").html(weatherData);
          $("#weatherData").show();
        }
      });
    });
  });