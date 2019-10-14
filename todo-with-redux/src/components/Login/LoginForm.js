import React, { useState } from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

// actions creators
import { loginUser } from "../../actions/userActions";

const LoginForm = props => {
  const { loginUser, history, loginError } = props;

  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [loginClicked, setLoginClicked] = useState(false);

  const checkFields = () => {
    const { username, password } = credentials;

    if (username && password) {
      return true;
    }
    return false;
  };

  const handleChange = e => {
    setCredentials({
      ...credentials,
      // don't allow extra white space -- trim()
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrorMessage("");
    const isValid = checkFields();

    if (!isValid) {
      setErrorMessage("Please fill in both username and password.");
    } else {
      setLoginClicked(true);
      // call action creator
      loginUser(credentials, history);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="reg-form-wrapper">
          <div className="form-inner-content-wrapper">
            <h2 className="login-account-heading">Login</h2>
            {/* nested ternary to display appropriate error (client side or server side)*/}
            {errorMessage ? (
              <p className="error-message">{errorMessage}</p>
            ) : loginError ? (
              <p className="error-message">{loginError}</p>
            ) : null}
            <div className="username-password-container">
              <div>
                <label htmlFor="username">
                  <div className="input-field-label">Username</div>
                  <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="password">
                  <div className="input-field-label">Password</div>
                  <input
                    type="text"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <div className="btns">
              <div className="login-btn-container">
                {/* if login button was NOT clicked, login button will be visible
                -->> *OR* if there was an error (client or server side),
                the spinner will disappear and the login button will be visible again */}
                {!loginClicked || loginError ? (
                  <button className="btn login-btn" type="submit">
                    Login
                  </button>
                ) : (
                  <FontAwesomeIcon
                    className="dark-icon"
                    icon={faSpinner}
                    spin
                    size="2x"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loginError: state.userInfo.loginError
  };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginForm);
