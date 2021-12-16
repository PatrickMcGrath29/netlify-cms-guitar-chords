import React from "react";
import PropTypes from "prop-types";
import { getLyricsHTML } from "./utils/songFormatter.js";

function GuitarChordPreview({ value }) {
  return <div>{getLyricsHTML(value)}</div>;
}

GuitarChordPreview.propTypes = {
  value: PropTypes.node,
};

export default GuitarChordPreview;
