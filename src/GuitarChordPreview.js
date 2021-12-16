import React from "react";
import PropTypes from "prop-types";
import { WidgetPreviewContainer } from "netlify-cms-ui-default";
import { getLyricsHTML } from "utils/songFormatter.js";

function GuitarChordPreview({ value }) {
  return (
    <WidgetPreviewContainer>{getLyricsHTML(value)}</WidgetPreviewContainer>
  );
}

GuitarChordPreview.propTypes = {
  value: PropTypes.node,
};

export default GuitarChordPreview;
