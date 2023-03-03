import React from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import useStyles from "./l_styles";
const List = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography varient="h4">Restaurants, Hotels & Attractions around you</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attaractions">Attaractions</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export default List;
