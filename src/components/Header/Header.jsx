import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles.js";

const Header = ({ onLoad, onPlaceChanged }) => {
    const classes = useStyles();

    return (
        // App bar component for the header
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                {/* Title of the application */}
                <Typography variant="h5" className={classes.title}>
                    Travel Companion
                </Typography>
                {/* Box containing search-related components */}
                <Box style={{ display: "flex" }}>
                    {/* Subtitle */}
                    <Typography variant="h6" className={classes.title}>
                        Explore new places
                    </Typography>
                    {/* Autocomplete component for place search */}
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className={classes.search}>
                            {/* Search icon */}
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            {/* Input field for search */}
                            <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
