import React, { useState } from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

// actions creators
import { loginUser } from "../../actionCreators/userActions";

const LoginForm = props => {
  const { loginUser, history } = props;

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
      [e.target.name]: e.target.value
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
            {errorMessage ? (
              <p className="error-message">{errorMessage}</p>
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
                {!loginClicked ? (
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

export default connect(
  null,
  { loginUser }
)(LoginForm);
