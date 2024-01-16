document.getElementById('input_city').addEventListener('keypress', async function getWeather(event) {
    if (event.key === 'Enter') {
        event.preventDefault();  

        const inputCity = document.getElementById('input_city').value;

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
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=a21b8d784d86024e07869fbc550b7d65&units=metric`);
                
                // await response of the data API and response in json
                const data = await response.json(); 
                console.log(data);

                
                if (!response.ok) {
                    throw new Error('Erreur lors de la requête à l\'API');
                }

                // add value weather in the articleCard
                const minTempValue = Math.round(data.main.temp_min);
                minTemp.innerHTML = `min. ${minTempValue} °C`;
                const maxTempValue = Math.round(data.main.temp_max);
                maxTemp.innerHTML = `max. ${maxTempValue} °C`;
                const humidityValue = Math.round(data.main.humidity);
                humidity.innerHTML = `humidity ${humidityValue} %`;
                const windSpeedValue = Math.round(data.wind.speed) * 3.6;
                windSpeed.innerHTML = `wind ${windSpeedValue} km/h`;
                const tempValue = Math.round(data.main.temp);
                nameCity.innerHTML = `${inputCity} ${tempValue}°C`;

                if (data.weather[0].main == "Clouds") {
                    image.src = "asset/clouds.png";
                } else if (data.weather[0].main == "Clear") {
                    image.src = "asset/clear.png";
                } else if (data.weather[0].main == "Rain") {
                    image.src = "asset/rain.png";
                } else if (data.weather[0].main == "Drizzle") {
                    image.src = "asset/drizzle.png";
                } else if (data.weather[0].main == "Mist") {
                    image.src = "asset/mist.png";
                } else if (data.weather[0].main == "Snow") {
                    image.src = "asset/snow.png";
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
