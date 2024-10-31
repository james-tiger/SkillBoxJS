const apiKey = '76fcf825bb39e55a4802f753c270c0ff';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('cityInput');
    const searchButton = document.getElementById('searchButton');
    const weatherInfo = document.getElementById('weatherInfo');
    const weatherTemp = document.getElementById('temperature');
    const weatherDesc = document.getElementById('description');

    searchButton.addEventListener('click', () => {
        const city = searchInput.value;
        if (city) {
            fetchWeather(city);
        }
    });

    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const city = searchInput.value;
            if (city) {
                fetchWeather(city);
            }
        }
    });

    function fetchWeather(city) {
        const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('City not found or connection issue');
                }
                return response.json();
            })
            .then(data => {
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                weatherTemp.innerText = `${temperature}°С`;
                weatherDesc.innerText = description.charAt(0).toUpperCase() + description.slice(1);
                weatherInfo.style.display = 'flex';
                updateHourlyWeather(data);
            })
            .catch(error => {
                alert(error.message);
            });
    }

    function updateHourlyWeather(data) {
        const hourlyWeather = [

            { time: '11:00', temp: data.main.temp + 1 },
            { time: '12:00', temp: data.main.temp + 2 },
            { time: '13:00', temp: data.main.temp + 3 },
            { time: '14:00', temp: data.main.temp + 4 },
            { time: '15:00', temp: data.main.temp + 5 },
            { time: '16:00', temp: data.main.temp + 6 },
        ];

        const currentTemperature = document.getElementById('currentTemperature');
        currentTemperature.innerText = `${data.main.temp}°С`;
    
        const hourlyContainers = document.querySelectorAll('.frame-5');
        hourlyWeather.forEach((weather, index) => {
            if (hourlyContainers[index]) {
                const hourContainer = hourlyContainers[index];
                hourContainer.querySelector('.text-wrapper-5').innerText = weather.time;
                hourContainer.querySelector('.text-wrapper').innerText = `${weather.temp}°С`;
            }
        });
    }
    
});
