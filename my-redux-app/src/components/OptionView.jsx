import React from "react";
import PropTypes from "prop-types";

const OptionView = ({ image, name, handleVote }) => (
  <div onClick={handleVote} onKeyDown={handleVote} style={{ height: 96 }}>
    <img src={image} style={{ height: 96 }} alt={name} />
  </div>
);

OptionView.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleVote: PropTypes.func.isRequired
};

export default OptionView;
