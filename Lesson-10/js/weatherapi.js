const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=7f6f27a86d1289c474119fde35750a11';

fetch(apiURL) 
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        //This was to be able to get the Temp to show up. 
        document.getElementById('current-temp').textContent=jsObject.main.temp;

        //This is to be able to get the image 
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
        const desc = jsObject.weather[0].description;  // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);

    });