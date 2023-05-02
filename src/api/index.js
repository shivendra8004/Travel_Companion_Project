import axios from "axios";
const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesDetails = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        // bl_latitude: "24.414821757913927",
        // tr_latitude: "24.457721793241078",
        // bl_longitude: "77.13674878342283",
        // tr_longitude: " 77.18326901657713",
        // bl_latitude: "24.457721793241078",
        // tr_latitude: "24.414821757913927",
        // bl_longitude: "77.18326901657713",
        // tr_longitude: "  77.13674878342283",
      },
      headers: {
        "X-RapidAPI-Key": "6f6bd3f42cmsh8e4658f89a4755cp150426jsn80fceb2cfaf3",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
