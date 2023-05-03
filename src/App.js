// All Import Statements
import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesDetails } from "./api";
// import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

// All Functions
const App = () => {
  // All useStates and constants
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat: 24.4362736, lng: 77.1600089 });
  const [bounds, setBounds] = useState({});

  // All useEffect functions

  // useEffect to set the current position as default position of user
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);
  // UseEffect for fetching places data from api
  useEffect(() => {
    console.log(coordinates, bounds);
    getPlacesDetails(bounds.sw, bounds.ne).then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, [coordinates, bounds]);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} />
        </Grid>
      </Grid>
    </>
  );
};

// Exporting functions
export default App;
