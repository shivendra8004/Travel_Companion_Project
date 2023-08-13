import { alpha, makeStyles } from "@material-ui/core/styles";

// Creating and exporting the makeStyles function
export default makeStyles((theme) => ({
    // Styling for the title
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    // Styling for the search bar
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: { marginLeft: theme.spacing(3), width: "auto" },
    },
    // Styling for the search icon in the search bar
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    // Styling for the root of the input field
    inputRoot: {
        color: "inherit",
    },
    // Styling for the input field itself
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: { width: "20ch" },
    },
    // Styling for the toolbar containing the header elements
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
}));
