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
});


const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];

        ///////////////////////Preston/////////////////////////////
        let preston = document.createElement('section');
        let pTitle = document.createElement('h2');
        let pMoto = document.createElement('p');
        let pYear = document.createElement('p');
        let pPop = document.createElement('p');
        let pRain = document.createElement('p');
        let pImg = document.createElement('img');

        preston.setAttribute('class', 'preston');
        pTitle.setAttribute('class', 'pTile');
        pMoto.setAttribute('class', 'pMoto');
        pYear.setAttribute('class', 'pYear');
        pPop.setAttribute('class', 'pPop');
        pRain.setAttribute('class', 'pRain');
        pImg.setAttribute('src', 'images/' + towns[5].photo);
        pImg.setAttribute('class', 'pImg');

        pTitle.textContent = towns[5].name;
        pMoto.textContent = towns[5].motto;
        pYear.textContent = 'Year Founded: ' + towns[5].yearFounded;
        pPop.textContent = 'Population: ' + towns[5].currentPopulation;
        pRain.textContent = 'Annual Rain Fall: ' + towns[5].averageRainfall;

        preston.appendChild(pTitle);
        preston.appendChild(pMoto);
        preston.appendChild(pYear);
        preston.appendChild(pPop);
        preston.appendChild(pRain);
        preston.appendChild(pImg);

        document.querySelector('div.cards').appendChild(preston);

        ///////////////////Fish Heaven//////////////////////////
        let fish = document.createElement('section');
        let fTile = document.createElement('h2');
        let fMoto = document.createElement('p');
        let fYear = document.createElement('p');
        let fPop = document.createElement('p');
        let fRain = document.createElement('p');
        let fImg = document.createElement('img');

        fish.setAttribute('class', 'fish');
        fTile.setAttribute('class', 'fTile');
        fMoto.setAttribute('class', 'fMoto');
        fYear.setAttribute('class', 'fYear');
        fPop.setAttribute('class', 'fPop');
        fRain.setAttribute('class', 'fRain');
        fImg.setAttribute('src', 'images/' + towns[1].photo);
        fImg.setAttribute('class', 'fImg');

        fTile.textContent = towns[1].name;
        fMoto.textContent = towns[1].motto;
        fYear.textContent = 'Year Founded: ' + towns[1].yearFounded;
        fPop.textContent = 'Population' + towns[1].currentPopulation;
        fRain.textContent = 'Annual Rain Fall: ' + towns[1].averageRainfall;

        fish.appendChild(fTile);
        fish.appendChild(fMoto);
        fish.appendChild(fYear);
        fish.appendChild(fPop);
        fish.appendChild(fRain);
        fish.appendChild(fImg);

        document.querySelector('div.cards').appendChild(fish);

        ////////////////////Soda Springs///////////////////////////
        let soda = document.createElement('section');
        let sTile = document.createElement('h2');
        let sMoto = document.createElement('p');
        let sYear = document.createElement('p');
        let sPop = document.createElement('p');
        let sRain = document.createElement('p');
        let sImg = document.createElement('img');

        soda.setAttribute('class', 'soda');
        sTile.setAttribute('class', 'sTile');
        sMoto.setAttribute('class', 'sMoto');
        sYear.setAttribute('class', 'sYear');
        sPop.setAttribute('class', 'sPop');
        sRain.setAttribute('class', 'sRain');
        sImg.setAttribute('src', 'images/' + towns[6].photo);
        sImg.setAttribute('class', 'sImg');

        sTile.textContent = towns[6].name;
        sMoto.textContent = towns[6].motto;
        sYear.textContent = 'Year Founded: ' + towns[6].yearFounded;
        sPop.textContent = 'Population' + towns[6].currentPopulation;
        sRain.textContent = 'Annual Rain Fall: ' + towns[6].averageRainfall;

        soda.appendChild(sTile);
        soda.appendChild(sMoto);
        soda.appendChild(sYear);
        soda.appendChild(sPop);
        soda.appendChild(sRain);
        soda.appendChild(sImg);

        document.querySelector('div.cards').appendChild(soda);


        /* for (let i = 0; i < towns.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let bday = document.createElement('p');
            let place = document.createElement('p');
            let img = document.createElement('img');

            h2.textContent= towns[i].name;
            bday.textContent = 'Date of Birth: ' + towns[i].;
            place.textContent = 'Place of Birth: ' + towns[i].birthplace;
            img.setAttribute('src', towns[i].imageurl);

            card.appendChild(h2);
            card.appendChild(bday);
            card.appendChild(place);
            card.appendChild(img);

            document.querySelector('div.cards').appendChild(card);
        } */
    });