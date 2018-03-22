var requestURL = 'https://api.wunderground.com/api/6c1a326cb1a9ec1a/conditions/forecast/q/MN/Franklin.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL, true);
request.send();

request.onload = function() {
    var franklinWeather = JSON.parse(request.responseText);
    console.log(franklinWeather);
    
    document.getElementById('curWeather').innerHTML = franklinWeather.current_observation.weather;
    document.getElementById('curTemp').innerHTML = franklinWeather.current_observation.temp_f;
    document.getElementById('curWindSpd').innerHTML = franklinWeather.current_observation.wind_mph;
    document.getElementById('w_icon').src = franklinWeather.current_observation.icon_url;
    document.getElementById('desc').innerHTML = franklinWeather.forecast.txt_forecast.forecastday["0"];
}