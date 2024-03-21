const btn = document.querySelector("#btn");
btn.addEventListener("click", function(){
    let cityname = document.getElementById("textcity").value;
    let url_ = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=22ede456da2efb6451205814b4b2df74`
    console.log(cityname, url_)
    fetchData(url_);
});

async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();

      var div = document.getElementById('main');  
      var tr= ""

      tr+='<tr>'+'<td>' + data.main.temp+ '</td>' + '<td>' + data.weather.main + '</td>' + '<td>' + data.main.humidity + '</td>' +'<td>' + data.wind.speed + '</td>';

      div.innerHTML = tr;
    } 
    catch (error) {
      console.error(error)
    }
  }