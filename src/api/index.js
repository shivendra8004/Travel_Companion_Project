import axios from "axios";
export const getPlacesDetails = async (type, sw, ne) => {
    try {
        const {
            data: { data },
        } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                "X-RapidAPI-Key": process.env.REACT_APP_TRAVEL_ADVISOR_API_KEY,
                "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};
export const getWeatherData = async (lat, lon) => {
    try {
        const { data } = await axios.get(`https://open-weather13.p.rapidapi.com/city/latlon/${lat}/${lon}`, {
            headers: {
                "X-RapidAPI-Key": process.env.REACT_APP_TRAVEL_ADVISOR_API_KEY,
                "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};
