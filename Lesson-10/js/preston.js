function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('hide');
}

window.addEventListener('load', (event) =>{
    const lu = document.querySelector('#lastupdated');
    lu.textContent = document.lastModified;

    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();

    const b = document.querySelector("#banner");
    today = new Date().getDay();
    if(today==5){
        b.style.display = "block";
    }
})

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=7f6f27a86d1289c474119fde35750a11';

fetch(apiURL) 
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        //This is going to be for the weather page
        let currentCondition = jsObject.weather[0].main;

        document.getElementById("current").innerHTML = currentCondition;
        document.getElementById("high").textContent = jsObject.main.temp_max;
        document.getElementById("hum").textContent = jsObject.main.humidity;
        document.getElementById("speed").textContent = jsObject.wind.speed;
        document.getElementById("chill").innerHTML = getWindChill();
    });

    function getWindChill() {
        let tempF = parseInt(document.getElementById('high').innerHTML);
        let speed = parseInt(document.getElementById('speed').innerHTML);
        result = windChill(tempF, speed);
        return result;
    }
    
    function windChill(tempF, speed) {
        let windChillFactor = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
        let soCold = windChillFactor.toFixed(0);
    
        return soCold;
    }