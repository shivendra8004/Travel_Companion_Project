import React, { useState, useEffect, createRef } from "react";
import { Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import useStyles from "./styles";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
const List = ({ places, childClick }) => {
    const classes = useStyles();
    const [type, setType] = useState("attractions");
    const [rating, setRating] = useState("");
    const [elementRefs, setElementRefs] = useState([]);

    useEffect(() => {
        const refs = Array(places.length)
            .fill()
            .map((_, i) => elementRefs[i] || createRef());
        setElementRefs(refs);
    }, [places]);

    return (
        <div className={classes.container}>
            <Typography varient="h4">Restaurants, Hotels & Attractions around you</Typography>
            {/* Form Control for select places */}
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select
                    value={type}
                    onChange={(e) => {
                        setType(e.target.value);
                    }}
                >
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            {/* Form control for Ratings */}
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select
                    value={rating}
                    onChange={(e) => {
                        setRating(e.target.value);
                    }}
                >
                    <MenuItem value="0">All</MenuItem>
                    <MenuItem value="3">Above 3.0</MenuItem>
                    <MenuItem value="4">Above 4.0</MenuItem>
                    <MenuItem value="4.5">Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid refs={elementRefs[i]} item key={i} xs={12} md={12}>
                        {place.name ? <PlaceDetails selected={Number(childClick === i)} place={place} /> : ""}
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};
export default List;
