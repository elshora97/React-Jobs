import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({ isLoading }) => {
  const override = {
    display: "block",
    margin: "100px auto",
  };
  return (
    <ClipLoader
      color="#4338ca"
      loading={isLoading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinner;
