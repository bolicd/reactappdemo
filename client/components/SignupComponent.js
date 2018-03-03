import React from "react";
import SignupForm from "./SignupForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import sendMockForm from "../actions/sendMockForm";

class SignupComponent extends React.Component {
  render() {
    debugger;
    const { sendMockForm } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm sendMockForm={sendMockForm} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

SignupComponent.propTypes = {
  sendMockForm: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { sendMockForm })(SignupComponent);
