// All import statements will be added here
import React from "react";
import GoogleMapReact from "google-map-react";
// import { Paper, Typography, useMediaQuery } from "@material-ui/core";
// import { LocationOnOutlinedIcon } from "@material-ui/icons/LocationOnOutlined";
// import Rating from "@material-ui/lab";
import useStyles from "./styles";

// All Functions will be declared here
const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles();
  // const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.se });
        }}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};
export default Map;
