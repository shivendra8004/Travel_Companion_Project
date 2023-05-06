import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@material-ui/core";
import { LocationOn, Phone } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";

import useStyles from "./styles";

const PlaceDetails = ({ place }) => {
    const classes = useStyles();
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

                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">
                        {place.price_level ? place.price_level : <span>NA</span>}
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ratings</Typography>
                    <Typography gutterBottom variant="subtitle1">
                        {place.rating ? <Rating size="small" value={Number(place.rating)} /> : <span>NA</span>}
                    </Typography>
                </Box>

                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>

                    <Typography gutterBottom variant="subtitle1">
                        <Typography gutterBottom variant="subtitle1">
                            {place.ranking ? place.ranking : "NA"}
                        </Typography>
                    </Typography>
                </Box>
                {place?.awards?.map((award) => (
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <img src={award.images.small} alt={award.display_name} />
                        <Typography varient="subtitle2" color="textSecondary">
                            {award.display_name}
                        </Typography>
                    </Box>
                ))}
                {place?.cuisine?.map(({ name }) => (
                    <Chip key={name} size="small" label={name} className={classes.chip} />
                ))}
                {place?.address && (
                    <Typography gutterBottom varient="subtitle1" color="testSecondary" className={classes.spacing}>
                        <LocationOn />
                        {place.address}
                    </Typography>
                )}
                {place?.phone && (
                    <Typography gutterBottom varient="body2" color="testSecondary" className={classes.spacing}>
                        <Phone />
                        {place.phone}
                    </Typography>
                )}
                <CardActions className={classes.spacing}>
                    <Button size="small" variant="contained" color="primary" onClick={() => window.open(place.web_url, "_blanK")}>
                        More Details
                    </Button>
                    {place?.website && (
                        <Button size="small" variant="contained" color="primary" onClick={() => window.open(place.website, "_blanK")}>
                            Website
                        </Button>
                    )}
                </CardActions>
            </CardContent>
        </Card>
    );
};
export default PlaceDetails;
