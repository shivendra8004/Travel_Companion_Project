import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@material-ui/core";
import { LocationOn, Phone } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";

import useStyles from "./styles";

// PlaceDetails component declaration
const PlaceDetails = ({ place, selected, refProp }) => {
    const classes = useStyles();

    // Scroll into view when the place is selected
    if (selected) {
        refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    return (
        <Card elevation={6}>
            {/* Display place's photo */}
            <CardMedia
                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : "https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"}
                title={place.name}
            />
            <CardContent>
                {/* Display place's name */}
                <Typography gutterBottom variant="h5">
                    {place.name}
                </Typography>

                {/* Display place's price level */}
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">
                        {place.price_level ? place.price_level : <span>NA</span>}
                    </Typography>
                </Box>

                {/* Display place's rating and number of reviews */}
                <Box display="flex" justifyContent="space-between">
                    {place.rating ? <Rating value={Number(place.rating)} readOnly /> : <span>NA</span>}
                    <Typography gutterBottom variant="subtitle1">
                        <Typography variant="subtitle1">out of {place.num_reviews}</Typography>
                    </Typography>
                </Box>

                {/* Display place's ranking */}
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">
                        <Typography gutterBottom variant="subtitle1">
                            {place.ranking ? place.ranking : "NA"}
                        </Typography>
                    </Typography>
                </Box>

                {/* Display place's awards */}
                {place?.awards?.map((award) => (
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <img src={award.images.small} alt={award.display_name} />
                        <Typography variant="subtitle2" color="textSecondary">
                            {award.display_name}
                        </Typography>
                    </Box>
                ))}

                {/* Display place's cuisines as chips */}
                {place?.cuisine?.map(({ name }) => (
                    <Chip key={name} size="small" label={name} className={classes.chip} />
                ))}

                {/* Display place's address */}
                {place?.address && (
                    <Typography gutterBottom variant="subtitle1" color="textSecondary" className={classes.spacing}>
                        <LocationOn />
                        {place.address}
                    </Typography>
                )}

                {/* Display place's phone number */}
                {place?.phone && (
                    <Typography gutterBottom variant="body2" color="textSecondary" className={classes.spacing}>
                        <Phone />
                        {place.phone}
                    </Typography>
                )}

                {/* Display buttons for more details and website */}
                <CardActions className={classes.spacing}>
                    <Button size="small" variant="contained" color="primary" onClick={() => window.open(place.web_url, "_blank")}>
                        More Details
                    </Button>
                    {place?.website && (
                        <Button size="small" variant="contained" color="primary" onClick={() => window.open(place.website, "_blank")}>
                            Website
                        </Button>
                    )}
                </CardActions>
            </CardContent>
        </Card>
    );
};

// Exporting the PlaceDetails component
export default PlaceDetails;
