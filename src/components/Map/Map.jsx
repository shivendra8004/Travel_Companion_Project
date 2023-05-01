import React from "react";
import GoogleMapReact from "google-map-react";
// import { Paper, Typography, useMediaQuery } from "@material-ui/core";
// import { LocationOnOutlinedIcon } from "@material-ui/icons/LocationOnOutlined";
// import Rating from "@material-ui/lab";
import useStyles from "./m_styles";
const Map = () => {
  const classes = useStyles();
  // const isMobile = useMediaQuery("(min-width:600px)");
  // const coordinates = { lat: 24.4348, lng: 77.1609 };
  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627,
  //   },
  //   zoom: 11,
  // };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCt-0-oRejXV9axIJkmB_LKfbp2dNkCCzM" }}
        defaultCenter={{ lat: 24.4348, lng: 77.1609 }}
        defaultZoom={11}
      ></GoogleMapReact>
    </div>
  );
};
export default Map;
