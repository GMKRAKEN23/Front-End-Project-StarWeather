document.getElementById('input_city').addEventListener('keypress', async function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();  

        const inputCity = document.getElementById('input_city').value;
        const KeyApi = 'YBNbEVwFBvti2RX9VxAlkA==CeOrC5fOrTggFKhJ'; 

        // create and add articleCard in the sectionCard
        const sectionCard = document.querySelector('.main_section_card_city_weather');
        const articleCard = document.createElement('article');  
        articleCard.classList.add('main_section_card_city_weather_article');    
        sectionCard.appendChild(articleCard);

        // create and add headerCard in the articleCard
        const headerCard = document.createElement('header');
        headerCard.classList.add('main_section_card_city_weather_article_header');
        articleCard.appendChild(headerCard);

        // create minTemp and add in the headerCard
        const minTemp = document.createElement('p');
        minTemp.classList.add('main_section_card_city_weather_article_header_min_temp');
        headerCard.appendChild(minTemp);

        // create maxTemp and add in the headerCard
        const maxTemp = document.createElement('p');
        maxTemp.classList.add('main_section_card_city_weather_article_header_max_temp');
        headerCard.appendChild(maxTemp);

        // create nameCity and add in the articleCard
        const nameCity = document.createElement('h2');
        nameCity.classList.add('main_section_card_city_weather_article_title');
        articleCard.appendChild(nameCity);


        // create image and add in the articleCard
        const image = document.createElement('img');
        image.classList.add('main_section_card_city_weather_article_image');
        articleCard.appendChild(image);

        // create footer and add in the articleCard
        const footerCard = document.createElement('footer');
        footerCard.classList.add('main_section_card_city_weather_article_footer');
        articleCard.appendChild(footerCard);

        // create humidity and add in the footerCard
        const humidity = document.createElement('p');
        humidity.classList.add('main_section_card_city_weather_article_footer_humidity');
        footerCard.appendChild(humidity);

        // create windspeed and add in the footerCard
        const windSpeed = document.createElement('p');
        windSpeed.classList.add('main_section_card_city_weather_article_footer_wind_speed');
        footerCard.appendChild(windSpeed);
        
        if (inputCity !== '') {
            try {
                const response = await fetch(`https://api.api-ninjas.com/v1/weather?city=${inputCity}`, {
                    method: 'GET',
                    headers: {
                        'X-Api-Key': KeyApi,
                        'Content-Type': 'application/json',
                    },
                });
                
                if (!response.ok) {
                    throw new Error('Erreur lors de la requête à l\'API');
                }

                // await response of the data API and response in json
                const data = await response.json();

                const minTempValue = data.min_temp;
                minTemp.innerHTML = `min. ${minTempValue} °C`;
                const maxTempValue = data.max_temp;
                maxTemp.innerHTML = `max. ${maxTempValue} °C`;
                const humidityValue = data.humidity;
                humidity.innerHTML = `humidity ${humidityValue} %`;
                const windSpeedValue = data.wind_speed;
                windSpeed.innerHTML = `wind ${windSpeedValue} km/h`;
                const tempValue = data.temp;
                nameCity.innerHTML = `${inputCity} ${tempValue}°C`;
                
                if(tempValue > 20 && tempValue < 40){
                    image.setAttribute('src', 'asset/clear.png');  
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
