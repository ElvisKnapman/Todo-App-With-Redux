import React from "react";

import { connect } from "react-redux";

const Test = props => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    title: state.title
  };
};

export default connect(
  mapStateToProps,
  {}
)(Test);
