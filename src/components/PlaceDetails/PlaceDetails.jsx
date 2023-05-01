import React from "react";

const PlaceDetails = (props) => {
  const name = props.place.name;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};
export default PlaceDetails;
