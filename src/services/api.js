import axios from 'axios'; // Import axios for making HTTP requests

// Define the API key and URL for the OpenWeatherMap API
const API_KEY = '111f3eb39cab38833c001a6088542d2b';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data from the OpenWeatherMap API
export const getWeather = async (city, country) => {
    try {
        // Make a GET request to the API with city, country, API key, and units set to metric
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
        // Return the response data
        return response.data;
    } catch (error) {
        // Log an error message if the request fails
        console.log('Error while calling the API', error.message);
    }
}