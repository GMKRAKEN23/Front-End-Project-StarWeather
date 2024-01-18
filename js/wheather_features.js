document.getElementById('input_city').addEventListener('keypress', async function getWeather(event) {
    // Declare variable days of the week
    const daysWeek = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    if (event.key === 'Enter') {
        event.preventDefault(); // Prevents page from loading

        const inputCity = document.getElementById('input_city').value;

        const APIKey = '62e06e216d252c066ca0c7c7a9ef6314'; // Api Key openweather

        if (inputCity !== '') {
            try {
                // Use API openweather and add city and API key
                const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputCity}&appid=${APIKey}&units=metric`);

                // await response of the data API and response in json
                const data = await response.json();
                console.log(data);

                if (!response.ok) {
                    throw new Error('Erreur lors de la requête à l\'API');
                }

                // Remove existing cards before adding new ones
                const sectionCard = document.querySelector('.main_section_card_city_weather');
                sectionCard.innerHTML = '';

                // Loop for create and add element weather for five days (five cards)
                for (let i = 0; i < 5; i++) {
                    const forecastData = data.list[i * 8];

                    // Create and add WeatherCard in the Section Card
                    const articleCard = document.createElement('article');
                    articleCard.classList.add('main_section_card_city_weather_article');
                    sectionCard.appendChild(articleCard);

                    // Create and add HeaderCard in the WeatherCard 
                    const headerCard = document.createElement('header');
                    headerCard.classList.add('main_section_card_city_weather_article_header');
                    articleCard.appendChild(headerCard);

                    // Create and add Date in the HeaderCard
                    const datePara = document.createElement('p');
                    datePara.className = 'main_section_card_city_weather_article_date';
                    let date = new Date(forecastData.dt * 1000);
                    datePara.textContent = daysWeek[date.getDay()] + " " + forecastData.dt_txt.split(' ')[0];
                    headerCard.appendChild(datePara);

                    // Create and add Title City in the ArticleCard
                    const title = document.createElement('h2');
                    title.className = 'main_section_card_city_weather_article_title';
                    const tempValue = Math.round(forecastData.main.temp);
                    title.innerHTML = `${inputCity} ${tempValue} °C`;
                    articleCard.appendChild(title);

                    // Create and add Image weather in the ArticleCard
                    const image = document.createElement('img');
                    image.classList.add('main_section_card_city_weather_article_image');
                    articleCard.appendChild(image);

                    // Create and add FooterCard in the ArticleCard
                    const footerCard = document.createElement('footer');
                    footerCard.className = 'main_section_card_city_weather_article_footer';
                    articleCard.appendChild(footerCard);

                    // Create and add Wind Speed in the FooterCard
                    const windSpeed = document.createElement('p');
                    windSpeed.className = 'main_section_card_city_weather_article_footer_wind_speed';
                    const windSpeedValue = forecastData.wind.speed * 3.6;
                    windSpeed.innerHTML = `Wind: ${windSpeedValue.toFixed(1)} km/h`;
                    footerCard.appendChild(windSpeed);

                    // Create and add Humidity in the FooterCard
                    const humidity = document.createElement('p');
                    humidity.className = 'main_section_card_city_weather_article_footer_humidity';
                    const humidityValue = forecastData.main.humidity;
                    humidity.innerHTML = `hum.: ${humidityValue} %`;
                    footerCard.appendChild(humidity);

                    // Variables pour les éléments de design
                    const boxDesignOne = document.getElementById('box_design_one');
                    const boxDesignTwo = document.getElementById('box_design_two');
                    const boxDesignThree = document.getElementById('box_design_three');

                    // Tableau des éléments de design
                    const boxDesigns = [boxDesignOne, boxDesignTwo, boxDesignThree];

                    // Variables pour les catégories, les classes de design et les chemins des logos
                    const categories = ['main_section_card_city_weather_article', 'main_section_card_city_weather_article_date', 'main_section_card_city_weather_article_title', 'main_section_card_city_weather_article_footer_wind_speed', 'main_section_card_city_weather_article_footer_humidity'];

                    const designs = ['active_design_one', 'active_design_two', 'active_design_three'];
                    const defaultDesignIndex = 0; // Indice du design par défaut

                    // Variable pour suivre le design actuel
                    let currentDesignIndex = defaultDesignIndex;

                    // Ajoutez des écouteurs d'événements pour chaque box_design
                    boxDesigns.forEach((boxDesign, index) => {
                        boxDesign.addEventListener('click', function () {
                            // Appliquer le design uniquement si différent de l'actuel
                            if (index !== currentDesignIndex) {
                                applyDesign(index);
                                currentDesignIndex = index; // Mettre à jour le design actuel
                            } else {
                                // Si le design actuel est cliqué à nouveau, rétablir le design par défaut sans classes
                                applyDefaultDesign();
                                currentDesignIndex = defaultDesignIndex; // Réinitialiser au design par défaut
                            }
                        });
                    });

                    function applyDefaultDesign() {
                        categories.forEach(category => {
                            const elements = document.querySelectorAll(`.${category}`);
                            elements.forEach(element => {
                                element.classList.remove(...designs);
                            });
                        });
                    }

                    function applyDesign(designIndex) {
                        categories.forEach(category => {
                            const elements = document.querySelectorAll(`.${category}`);
                            elements.forEach(element => {
                                element.classList.remove(...designs);
                            });

                            elements.forEach(element => {
                                element.classList.add(designs[designIndex]);
                            });
                        });
                    }

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
                }

            } catch (error) {
                console.error('Error: ', error); // Show errors
                alert('Please enter a valid city!');
            }
        } else {
            alert('Please enter a city!');
        }
    }
});
