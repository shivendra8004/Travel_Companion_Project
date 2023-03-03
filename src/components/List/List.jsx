import React, { useState } from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import useStyles from "./l_styles";
const List = () => {
  const classes = useStyles();
  const [type, setType] = useState("attaractions");

  return (
    <div className={classes.container}>
      <Typography varient="h4">Restaurants, Hotels & Attractions around you</Typography>
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
          <MenuItem value="attaractions">Attractions</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export default List;
