import React, { useState } from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

// action creators
import { registerUser } from "../../actions/userActions";

const RegisterForm = props => {
  const { registerUser, history } = props;

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: ""
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [createAccountClicked, setCreateAccountClicked] = useState(false);

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const checkFields = () => {
    const { firstName, lastName, email, username, password } = user;

    if (
      firstName.trim() &&
      lastName.trim() &&
      email.trim() &&
      username.trim() &&
      password.trim()
    ) {
      return true;
    }
    return false;
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrorMessage("");
    const isValid = checkFields();

    if (!isValid) {
      setErrorMessage("All fields are required. Please try again.");
    } else {
      setCreateAccountClicked(true);
      // call action creator, pass sanitized values
      registerUser(
        {
          firstName: user.firstName.trim(),
          lastName: user.lastName.trim(),
          email: user.email.trim(),
          username: user.username.trim(),
          password: user.password.trim()
        },
        history
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="reg-form-wrapper">
          <div className="form-inner-content-wrapper">
            <h2 className="create-account-heading">Create Account</h2>
            {errorMessage ? (
              <p className="error-message">{errorMessage}</p>
            ) : null}
            <div className="firstName-lastName-container">
              <div>
                <label htmlFor="firstName">
                  <div className="input-field-label">First Name</div>
                  <input
                    className="first-name-input"
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="lastName">
                  <div className="input-field-label">Last Name</div>
                  <input
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="email">
                <div className="input-field-label">Email</div>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="username">
                <div className="input-field-label">Username</div>
                <input
                  type="text"
                  name="username"
                  value={user.username}
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
                  value={user.password}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="btns">
              <div className="register-btn-container">
                {!createAccountClicked ? (
                  <button className="btn register-btn" type="submit">
                    Create My Account
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
  { registerUser }
)(RegisterForm);
