function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('hide');
}

fetch('scripts/temples.json')
.then( result => {
        return result.json();

    })



.then(prophetsList =>{ 
    let prophet = prophetsList.prophets;

    prophet.forEach(
        prophet => {
            let article = document.createElement('article');

            let h1 = document.createElement('h1');
            h1.textContent = `${prophet.name} ${prophet.lastname}`;

            let dateOfBirth = document.createElement('p');
            dateOfBirth.textContent = `Date of dedication: ${prophet.birthdate}`;

            let placeOfBirth = document.createElement('p');
            placeOfBirth.textContent = `Place: ${prophet.birthplace}`;

            let address = document.createElement('p');
            address.textContent = `Address: ${prophet.address}`;

            let tel = document.createElement('p');
            tel.textContent = `Telephone: ${prophet.tel}`;

            let services = document.createElement('p');
            services.textContent = `Services: ${prophet.services}`;

            let image = document.createElement('img');
            image.setAttribute('src', prophet.imageurl);
            image.setAttribute('alt', `${prophet.name} ${prophet.lastname}`);


            article.appendChild(h1);
            article.appendChild(dateOfBirth);
            article.appendChild(placeOfBirth);
            article.appendChild(address);
            article.appendChild(tel);
            article.appendChild(services);
            article.appendChild(image);

            document.querySelector('#prophets').appendChild(article);
        }
    );

});
