import axios from 'axios';

const API_KEY = '111f3eb39cab38833c001a6088542d2b';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';


export const getWeather = async (city, country) => {
    try{
       let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
       return response.data;
    } catch (error){
        console.log('Error while calling the api', error.message);
    }
}

