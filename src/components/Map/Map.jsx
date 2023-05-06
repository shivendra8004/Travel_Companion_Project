// All import statements will be added here
import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Rating } from "@material-ui/lab";
import useStyles from "./styles";

// All Functions will be declared here
const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery("(min-width:600px)");

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
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                    console.log(e.marginBounds.sw, e.marginBounds.ne, "Bounds");
                }}
                onChildClick={""}
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
                                                : "https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2019/10/Blog-10-1030x538.jpg"
                                        }
                                        style={{ width: "80px" }}
                                        alt={place.name}
                                        className={classes.pointer}
                                    />
                                    <Rating size="small" value={Number(place.rating)} />
                                </Typography>
                            </Paper>
                        )}
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
};
export default Map;
