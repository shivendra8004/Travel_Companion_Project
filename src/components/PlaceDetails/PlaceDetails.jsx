import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@material-ui/core";
import { LocationOn, Phone } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";

import useStyles from "./styles";

const PlaceDetails = ({ place }) => {
    const classes = useStyles();
    const name = place.name;
    return (
        <Card elevation={6}>
            <CardMedia
                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : "https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2019/10/Blog-10-1030x538.jpg"}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom varient="h5">
                    {place.name}
                </Typography>
                {place.price_level ? (
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1">Price</Typography>

                        <Typography gutterBottom variant="subtitle1">
                            {place.price_level}
                        </Typography>
                    </Box>
                ) : (
                    ""
                )}
            </CardContent>
        </Card>
    );
};
export default PlaceDetails;
