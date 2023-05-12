import axios from 'axios';

const API_KEY = 'fe68a482e954b682bc3ac9605588cebc';

const getWeatherData = async (query) => {
  try {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`;


    const response = await axios.get(url);

    // Handle the response data
      // console.log(response.data.weather.icon);
    console.log(response.data);

    // Return the data or perform additional operations
    return response.data;
  } catch (error) {
    // Handle any errors
    console.error(error);
    throw error;
  }
};


export default getWeatherData;
