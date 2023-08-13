import axios from "axios";

// Function to fetch places details based on type and geographical boundaries
export const getPlacesDetails = async (type, sw, ne) => {
    try {
        // Making a GET request to the travel advisor API
        const {
            data: { data },
        } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat, // Bottom-left latitude of the boundary
                tr_latitude: ne.lat, // Top-right latitude of the boundary
                bl_longitude: sw.lng, // Bottom-left longitude of the boundary
                tr_longitude: ne.lng, // Top-right longitude of the boundary
            },
            headers: {
                "X-RapidAPI-Key": process.env.REACT_APP_TRAVEL_ADVISOR_API_KEY,
                "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
            },
        });
        return data; // Return the fetched data
    } catch (error) {
        console.log(error, "From Places API"); // Log any errors that occur
    }
};

// Function to fetch weather data based on latitude and longitude
export const getWeatherData = async (lat, lon) => {
    try {
        // Making a GET request to the OpenWeather API
        const { data } = await axios.get(`https://open-weather13.p.rapidapi.com/city/latlon/${lat}/${lon}`, {
            headers: {
                "X-RapidAPI-Key": process.env.REACT_APP_TRAVEL_ADVISOR_API_KEY,
                "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
            },
        });
        return data; // Return the fetched weather data
    } catch (error) {
        console.log(error, "From Weather API"); // Log any errors that occur
    }
};
