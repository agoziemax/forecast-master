import axios from 'axios';

const API_KEY = 'fe68a482e954b682bc3ac9605588cebc';

const getWeatherData = async (city) => {
  try {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await axios.get(url);

    // Handle the response data

    console.log(response.data);

    // Return the data or perform additional operations
    return response.data;
    
  } catch (error) {
    // Handle any errors
    console.error(error);
    throw 'City not found';
  }
};

export default getWeatherData;
