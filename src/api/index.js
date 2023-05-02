import axios from "axios";

// Copied Code From Travel Advisor Rapid API Page
const options = {
  method: "GET",
  url: "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
    restaurant_tagcategory_standalone: "10591",
    restaurant_tagcategory: "10591",
    limit: "30",
    currency: "USD",
    open_now: "false",
    lunit: "km",
    lang: "en_US",
  },
  headers: {
    "X-RapidAPI-Key": "6f6bd3f42cmsh8e4658f89a4755cp150426jsn80fceb2cfaf3",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

const getPlacesDetails = async () => {
  try {
    const res = await axios.get();
  } catch (error) {}
};
