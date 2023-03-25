var myhttp1 = new XMLHttpRequest
var cityname
function search() {
    myhttp1.open("get", `http://api.weatherapi.com/v1/search.json?key=da01304f4fb542fe9b5170845221910&q=${town.value}`)
    myhttp1.send()
    myhttp1.addEventListener("readystatechange", function () {
        if (myhttp1.readyState == 4 && myhttp1.status == 200) {
            forecast = JSON.parse(myhttp1.response)[0]
            var myhttp = new XMLHttpRequest
            cityname = forecast.name
            myhttp.open("get", `http://api.weatherapi.com/v1/current.json?key=da01304f4fb542fe9b5170845221910&q=${forecast.name}`)
            myhttp.send()
            myhttp.addEventListener("readystatechange", function () {
                if (myhttp.readyState == 4 && myhttp.status == 200) {
                    forecast = JSON.parse(myhttp.response).current
                    display()
                }
            })
        }
    })
}
function display() {
    let temp = `<div class="today col-md-4 px-0">
    <div class="forecast-header" id="today">
        <div class="float-start">Wednesday</div>
        <div class=" float-end">19October</div>
        <div class="clearfix"></div>
    </div>
    <div class="forecast-content" id="current">
        <div class="fw-bold">${cityname}</div>
        <div class="degree">
            <div class="num d-inline-block">${forecast.temp_c}<sup>o</sup>C</div>
            <div class="forecast-icon d-inline-block">
                <img src="https://cdn.weatherapi.com/weather/64x64/day/116.png" alt="" width="90">
            </div>

        </div>
        <div class="custom">Partly cloudy</div>
        <span><img src="images/icon-umberella.png" alt="">20%</span>
        <span><img src="images/icon-wind.png" alt="">18km/h</span>
        <span><img src="images/icon-compass.png" alt="">East</span>
    </div>
</div>
<div class="col-md-4 px-0">
    <div class="forecast-header">
        <div class="day">Thursday</div>
    </div>
    <div class="forecast-content text-center">
        <div class="forecast-icon">
            <img src="https://cdn.weatherapi.com/weather/64x64/day/113.png" alt="" width="48">
        </div>
        <div class="degree">32.3<sup>o</sup>C</div>
        <small>19.8<sup>o</sup></small>
        <div class="custom">Sunny</div>
    </div>
</div>
<div class="col-md-4 px-0">
    <div class="forecast-header">
        <div class="day">Friday</div>
    </div>
    <div class="forecast-content text-center">
        <div class="forecast-icon">
            <img src="https://cdn.weatherapi.com/weather/64x64/day/113.png" alt="" width="48">
        </div>
        <div class="degree">31.4<sup>o</sup>C</div>
        <small>19.8<sup>o</sup></small>
        <div class="custom">Sunny</div>
    </div>
</div>`
    document.getElementById("forecast").innerHTML = temp
}