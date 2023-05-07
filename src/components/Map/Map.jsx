// All import statements will be added here
import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Rating } from "@material-ui/lab";
import useStyles from "./styles";

// All Functions will be declared here
const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClick, weatherData }) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery("(min-width:600px)");
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
                defaultCenter={coordinates}
                defaultZoom={15}
                margin={[50, 50, 50, 50]}
                options={""}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={(child) => {
                    setChildClick(child);
                }}
            >
                {places?.map((place, i) => (
                    <div className={classes.markerContainer} lat={Number(place.latitude)} lng={Number(place.longitude)} key={i}>
                        {!isDesktop ? (
                            <LocationOnOutlinedIcon fontSize="large" />
                        ) : (
                            <Paper elevation={5} className={classes.paper}>
                                <Typography className={classes.typography} variant="subtitle3 " gutterBottom>
                                    {place.name}
                                    <img
                                        src={
                                            place.photo
                                                ? place.photo.images.small.url
                                                : "https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"
                                        }
                                        style={{ width: "80px" }}
                                        alt={place.name}
                                        className={classes.pointer}
                                    />
                                </Typography>
                                <Rating size="small" value={Number(place.rating)} readOnly />
                            </Paper>
                        )}
                    </div>
                ))}
                {weatherData?.list?.map((data, i) => (
                    <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
                        <img style={{ height: "300px" }} src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="Weather Widget" />
                        {console.log(data.weather[0].icon)}
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
};
export default Map;
