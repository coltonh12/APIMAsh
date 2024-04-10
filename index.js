// Function to fetch weather data
async function fetchWeather() {
    const apiKey = '59ce3a80fe2c9388238366c9f3c48530';
    const city = 'New York'; // Example city
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        const weatherDescription = data.weather[0].description;
        document.getElementById('weather').innerHTML = `<h2>Weather</h2><p>${weatherDescription}</p>`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather').innerHTML = `<h2>Weather</h2><p>Error fetching data</p>`;
    }
}

// Function to fetch traffic data
async function fetchTraffic() {
    const apiKey = 'mEPpNOvGzpkjA830m1tpid6l8KpGbAZN';
    const lat = 40.7128; // Example latitude
    const lon = -74.0060; // Example longitude
    const url = `https://api.tomtom.com/traffic/services/4/incidentDetails/s3/${lat},${lon}/10/-1/json?key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const incidents = data.tm && data.tm.incident;
        let trafficInfo = '';
        if (incidents && incidents.length > 0) {
            trafficInfo = '<ul>';
            incidents.forEach(incident => {
                trafficInfo += `<li>${incident.shortdesc}</li>`;
            });
            trafficInfo += '</ul>';
        } else {
            trafficInfo = 'No traffic incidents.';
        }
        document.getElementById('traffic').innerHTML = `<h2>Traffic</h2>${trafficInfo}`;
    } catch (error) {
        console.error('Error fetching traffic data:', error);
        document.getElementById('traffic').innerHTML = `<h2>Traffic</h2><p>Error fetching data</p>`;
    }
}

// Call functions to fetch data
fetchWeather();
fetchTraffic();

