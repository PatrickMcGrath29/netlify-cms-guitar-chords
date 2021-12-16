import React from "react";
import PropTypes from "prop-types";
import Textarea from "react-textarea-autosize";

export default class GuitarChordControl extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
    setActiveStyle: PropTypes.func.isRequired,
    setInactiveStyle: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: "",
  };

  shouldComponentUpdate() {
    return true;
  }

  render() {
    const {
      forID,
      value,
      onChange,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle,
    } = this.props;

    return (
      <Textarea
        id={forID}
        value={value || ""}
        className={classNameWrapper}
        onFocus={setActiveStyle}
        onBlur={setInactiveStyle}
        minRows={5}
        css={{ fontFamily: "inherit" }}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
}
