import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesDetails, getWeatherData } from "./api";

const App = () => {
    // State variables
    const [coordinates, setCoordinates] = useState({ lat: 26.2124, lng: 78.1772 });
    const [bounds, setBounds] = useState({});

    const [places, setPlaces] = useState([]);
    const [weatherData, setWeatherData] = useState([]);

    const [childClick, setChildClick] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [type, setType] = useState("restaurants");
    const [rating, setRating] = useState("");
    const [filteredPlaces, setFilteredPlaces] = useState([]);

    const [autocomplete, setAutocomplete] = useState(null);
    const onLoad = (autoComp) => setAutocomplete(autoComp);

    // Function to handle place changed event
    const onPlaceChanged = () => {
        const latitude = autocomplete.getPlace().geometry.location.lat();
        const longitude = autocomplete.getPlace().geometry.location.lng();
        setCoordinates({ lat: latitude, lng: longitude });
    };

    // UseEffect to get user's current location
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        });
    }, []);

    // UseEffect to fetch weather data and places based on type and bounds
    useEffect(() => {
        if (bounds) {
            setIsLoading(true);

            // Fetch weather data
            getWeatherData(coordinates.lat, coordinates.lng).then((data) => {
                setWeatherData(data);
            });

            // Fetch places data
            getPlacesDetails(type, bounds.sw, bounds.ne).then((data) => {
                setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
                setFilteredPlaces([]);
                setRating("");
                setIsLoading(false);
            });
        }
    }, [bounds, type]);

    // UseEffect to filter places based on rating
    useEffect(() => {
        const filteredPlaces = places.filter((place) => place.rating > rating);
        setFilteredPlaces(filteredPlaces);
    }, [rating]);

    return (
        <>
            <CssBaseline />
            {/* Header component for searching places */}
            <Header onLoad={onLoad} onPlaceChanged={onPlaceChanged} />

            {/* Main content grid */}
            <Grid container spacing={3} style={{ width: "100%" }}>
                {/* List of places */}
                <Grid item xs={12} md={4}>
                    <List
                        places={filteredPlaces.length ? filteredPlaces : places}
                        childClick={childClick}
                        isLoading={isLoading}
                        setType={setType}
                        type={type}
                        setRating={setRating}
                        rating={rating}
                    />
                </Grid>

                {/* Map to display places and weather */}
                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={filteredPlaces.length ? filteredPlaces : places}
                        setChildClick={setChildClick}
                        weatherData={weatherData}
                    />
                </Grid>
            </Grid>
        </>
    );
};

// Exporting the main App component
export default App;
