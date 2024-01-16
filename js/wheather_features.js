document.getElementById('input_city').addEventListener('keypress', async function getWeather(event) {
    // Déclaration de la variable joursSemaine
    const joursSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    if (event.key === 'Enter') {
        event.preventDefault();

        const inputCity = document.getElementById('input_city').value;

        let APIKey = '62e06e216d252c066ca0c7c7a9ef6314';
        if (inputCity !== '') {
            try {
                // Utilisez l'endpoint forecast pour obtenir les prévisions pour les 5 prochains jours
                const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputCity}&appid=${APIKey}&units=metric`);

                // await response of the data API and response in json
                const data = await response.json();
                console.log(data);

                if (!response.ok) {
                    throw new Error('Erreur lors de la requête à l\'API');
                }

                // Supprimez les cartes existantes avant d'ajouter de nouvelles
                const sectionCard = document.querySelector('.main_section_card_city_weather');
                sectionCard.innerHTML = '';

                // Affichez les prévisions pour les 5 prochains jours
                for (let i = 0; i < 5; i++) {
                    const forecastData = data.list[i * 8]; // Les données pour chaque jour sont généralement toutes les 8 heures

                    // Créez une nouvelle carte pour chaque jour
                    const articleCard = document.createElement('article');
                    articleCard.classList.add('main_section_card_city_weather_article');
                    sectionCard.appendChild(articleCard);

                    // Utilisez le bloc de code suivant pour afficher les informations de chaque jour
                    // Assurez-vous d'ajuster le format selon vos besoins
                    const datePara = document.createElement('p');
                    datePara.className = 'div_date';
                    let date = new Date(forecastData.dt * 1000);
                    datePara.textContent = joursSemaine[date.getDay()] + " " + forecastData.dt_txt.split(' ')[0];
                    articleCard.appendChild(datePara);

                    const image = document.createElement('img');
                    image.classList.add('main_section_card_city_weather_article_image');
                    articleCard.appendChild(image);

                    if (forecastData.weather[0].main == "Clouds") {
                        image.src = "asset/clouds.png";
                    } else if (forecastData.weather[0].main == "Clear") {
                        image.src = "asset/clear.png";
                    } else if (forecastData.weather[0].main == "Rain") {
                        image.src = "asset/rain.png";
                    } else if (forecastData.weather[0].main == "Drizzle") {
                        image.src = "asset/drizzle.png";
                    } else if (forecastData.weather[0].main == "Mist") {
                        image.src = "asset/mist.png";
                    } else if (forecastData.weather[0].main == "Snow") {
                        image.src = "asset/snow.png";
                    }

                    // Ajoutez d'autres informations que vous souhaitez afficher (température, etc.)
                }

            } catch (error) {
                console.error('Erreur: ', error);
                alert('Veuillez saisir une ville valide !');
            }
        } else {
            alert('Veuillez saisir une ville !');
        }
    }
});
