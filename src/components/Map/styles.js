import { makeStyles } from "@material-ui/core/styles";

// Creating and exporting the makeStyles function
export default makeStyles(() => ({
    // Styling for the paper container that displays place details
    paper: {
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100px",
        textAlign: "center",
    },
    // Styling for the container that holds the Google Map
    mapContainer: {
        height: "85vh",
        width: "100%",
    },
    // Styling for the container that holds the map marker
    markerContainer: {
        position: "absolute",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        // Adding higher zIndex on hover to bring the marker to the front
        "&:hover": { zIndex: 2 },
    },
    // Styling for cursor as pointer on interactive elements
    pointer: {
        cursor: "pointer",
    },
}));
