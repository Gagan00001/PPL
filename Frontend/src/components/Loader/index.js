import React from "react";

const Loader = (props) => {
  const {isLoading} = props;
  console.log("Loader",isLoading);
  return (
    <div className="pageloader">
      {isLoading? (
        <div className="loader"/>
      ) : (
        ""
      )}
    </div>
  );
};
export default Loader;
