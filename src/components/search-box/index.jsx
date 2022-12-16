import React, { Component } from "react";
import "./search-box.styles.css";

const SerachBox = (props) => {
  const { className, placeholden, onSeachChange } = props;
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholden={placeholden}
      onChange={onSeachChange}
    />
  );
};
export default SerachBox;
