// All Import Statements
import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesDetails } from "./api";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

// All Functions
const App = () => {
  // All useStates and constants
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState(null);

  // This state is to update the boundaries of map when we drag using mouse in map
  const [bounds, setBounds] = useState({});

  // All useEffect functions
  useEffect(() => {
    getPlacesDetails().then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, []);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

// Exporting functions
export default App;
