var button = document.querySelector('.button')
var cityName = document.querySelector('#cityname')
var wind = document.querySelector('.wind')
var temp = document.querySelector('.temperature')
var humidity = document.querySelector('.humidity')
var uvIndex = document.querySelector('.uv-index')
var input = document.querySelector('.inputValue')
var searchHistory = [];

button.addEventListener("click", function () {
    fetch('https://api.openweathermap.org/data/2.5/weather/?q=' + input.value + '&appid=b243070e3447aa64652c13f3fe0aba23')   
    .then((response) => response.json())
        .then((data) => {
            console.log(data)

            document.getElementById("mainforecast").innerHTML =
                `
                <div class="card">
                    <div class="card-body">
                        <h3 id="cityname">${data.name}:</h3>
                        <p id="temperature">Temperature: ${data.main.temp}</p>
                        <p id="humidity">Humidity: ${data.main.humidity}%</p>
                        <p id="wind">Wind Speed: ${data.wind.speed}MPH</p>
                        <p id="uv-index"></p>
                    </div>
                </div>
            `
            localStorage.setItem('cityname', searchHistory);
            console.log(searchHistory);
        })

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&appid=b243070e3447aa64652c13f3fe0aba23')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            document.getElementById("forecast1").innerHTML =
            ` <div class="card">
                <div class="card-body">
                    <p>Date:${data.list[1].dt_txt}</p>
                    <p id="temperature">Temp:${data.list[1].main.temp}</p>
                    <p id="humidity">Humidity:${data.list[1].main.humidity}</p>
                    <p id="wind">Wind Speed:${data.list[1].wind.speed}</p>
                    <p id="uv-index"></p>
                </div>
                </div>`
            document.getElementById("forecast2").innerHTML =
            `<div class="card">
                 <div class="card-body">
                    <p>Date:${data.list[2].dt_txt}</p>
                    <p id="temperature">Temp:${data.list[2].main.temp}</p>
                    <p id="humidity">Humidity:${data.list[2].main.humidity}</p>
                    <p id="wind">Wind Speed:${data.list[2].wind.speed}</p>
                    <p id="uv-index"></p>
                </div>
                </div>
        `
            document.getElementById("forecast3").innerHTML =
            `<div class="card">
                 <div class="card-body">
                    <p>Date:${data.list[3].dt_txt}</p>
                    <p id="temperature">Temp:${data.list[3].main.temp}</p>
                    <p id="humidity">Humidity:${data.list[3].main.humidity}</p>
                    <p id="wind">Wind Speed:${data.list[3].wind.speed}</p>
                    <p id="uv-index"></p>
                </div>
                </div>
        `
            document.getElementById("forecast4").innerHTML =
            `<div class="card">
                <div class="card-body">
                    <p>Date:${data.list[4].dt_txt}</p>
                    <p id="temperature">Temp:${data.list[4].main.temp}</p>
                    <p id="humidity">Humidity:${data.list[4].main.humidity}</p>
                    <p id="wind">Wind Speed:${data.list[4].wind.speed}</p>
                    <p id="uv-index"></p>
                </div>
                </div>
        `
            document.getElementById("forecast5").innerHTML =
            `<div class="card">
                <div class="card-body">
                    <p>Date:${data.list[5].dt_txt}</p>
                    <p id="temperature">Temp:${data.list[5].main.temp}</p>
                    <p id="humidity">Humidity:${data.list[5].main.humidity}</p>
                    <p id="wind">Wind Speed:${data.list[5].wind.speed}</p>
                    <p id="uv-index"></p>
                </div>
                </div>
        `
        })

});