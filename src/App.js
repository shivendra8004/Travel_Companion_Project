// All Import Statements
import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesDetails } from "./api";

// All Functions
const App = () => {
    // All useStates and constants
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({ lat: 26.2124, lng: 78.1772 });
    const [bounds, setBounds] = useState({});
    const [childClick, setChildClick] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [type, setType] = useState("restaurants");
    const [rating, setRating] = useState("");
    // useEffect to set the current position as default position of user
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        });
    }, []);

    // UseEffect for fetching places data from api
    useEffect(() => {
        setIsLoading(true);
        getPlacesDetails(type, bounds.sw, bounds.ne).then((data) => {
            setPlaces(data);
            setIsLoading(false);
        });
    }, [coordinates, bounds, type]);
    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: "100%" }}>
                <Grid item xs={12} md={4}>
                    <List places={places} childClick={childClick} isLoading={isLoading} setType={setType} type={type} setRating={setRating} rating={rating} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} places={places} setChildClick={setChildClick} />
                </Grid>
            </Grid>
        </>
    );
};

// Exporting functions
export default App;
