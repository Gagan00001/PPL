import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Loader = (props) => {
  const isLoading = useSelector((state) => state.loadingReducer.user);
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
Loader.defaultProps={
  isLoading:false,
}
Loader.propTypes={
  isLoading:PropTypes.bool,
}

export default Loader;
