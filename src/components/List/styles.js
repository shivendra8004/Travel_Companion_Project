import { makeStyles } from "@material-ui/core/styles";

// Creating and exporting the makeStyles function
export default makeStyles((theme) => ({
    // Styling for form control elements
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        marginBottom: "30px",
    },
    // Styling for select elements when they are empty
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    // Styling for loading spinner container
    loading: {
        height: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    // Styling for the main container of the List component
    container: {
        padding: "25px",
    },
    // Styling for elements with bottom margin
    marginBottom: {
        marginBottom: "30px",
    },
    // Styling for the list container
    list: {
        height: "75vh",
        overflow: "auto",
    },
}));
