import { makeStyles } from "@material-ui/core/styles";

// Creating and exporting the makeStyles function
export default makeStyles(() => ({
    // Styling for chips that display cuisines
    chip: {
        margin: "5px 5px 5px 0",
    },
    // Styling for subtitle section in PlaceDetails
    subtitle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "10px",
    },
    // Styling for spacing in various sections
    spacing: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
}));
