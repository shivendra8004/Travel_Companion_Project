import axios from "axios";
const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
// Copied Code From Travel Advisor Rapid API Page
const options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "X-RapidAPI-Key": process.env.TRAVEL_ADVISOR_API_KEY,
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

export const getPlacesDetails = async () => {
  try {
    const { data } = await axios.get(URL, options);
    const { data: places } = data;
    return places;
  } catch (error) {
    console.log(error);
  }
};
