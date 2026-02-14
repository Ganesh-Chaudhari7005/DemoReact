import React from "react";

const Child = React.memo(function ({ name }) {
  console.log("Child rendered");
  return <h2>{name}</h2>;
});

export default Child;