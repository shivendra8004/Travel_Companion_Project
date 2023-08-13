import React, { useState, useEffect, createRef } from "react";
import { Grid, Typography, InputLabel, MenuItem, FormControl, Select, CircularProgress } from "@material-ui/core";
import useStyles from "./styles";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({ places, childClick, isLoading, type, setType, rating, setRating }) => {
    const classes = useStyles();

    // Array of refs to store references to the grid items
    const [elementRefs, setElementRefs] = useState([]);

    // UseEffect to update elementRefs when places changes
    useEffect(() => {
        const refs = Array(places?.length)
            .fill()
            .map((_, i) => elementRefs[i] || createRef());
        setElementRefs(refs);
    }, [places]);

    return (
        <div className={classes.container}>
            {/* Title for the list */}
            <Typography variant="h5">Restaurants, Hotels & Attractions around you</Typography>

            {/* Conditional rendering based on isLoading */}
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size="5rem" />
                </div>
            ) : (
                <>
                    {/* Form Control for selecting place type */}
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
                    {/* Form Control for selecting ratings */}
                    <FormControl className={classes.formControl}>
                        <InputLabel>Rating</InputLabel>
                        <Select
                            value={rating}
                            onChange={(e) => {
                                setRating(e.target.value);
                            }}
                        >
                            <MenuItem value="0">All</MenuItem>
                            <MenuItem value="2">Above 2.0</MenuItem>
                            <MenuItem value="3">Above 3.0</MenuItem>
                            <MenuItem value="4">Above 4.0</MenuItem>
                        </Select>
                    </FormControl>
                    {/* Grid container for displaying places */}
                    <Grid container spacing={3} className={classes.list}>
                        {places?.map((place, i) => (
                            <Grid ref={elementRefs[i]} item key={i} xs={12}>
                                {/* Display PlaceDetails if place has a name */}
                                {place.name ? <PlaceDetails selected={Number(childClick) === i} refProp={elementRefs[i]} place={place} /> : ""}
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </div>
    );
};

export default List;
