import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@material-ui/core";
import { LocationOn, Phone } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";

import useStyles from "./styles";

const PlaceDetails = ({ place }) => {
    const name = place.name;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};
export default PlaceDetails;
