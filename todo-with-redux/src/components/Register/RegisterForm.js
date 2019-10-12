import React, { useState } from "react";
import { connect } from "react-redux";

// action creators
import { registerUser } from "../../actionCreators/userActions";

const RegisterForm = ({ registerUser }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const checkFields = () => {
    const { firstName, lastName, email, username, password } = user;

    if (firstName && lastName && email && username && password) {
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
      // call action creator
      registerUser(user);
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
                <button class="btn register-btn" type="submit">
                  Create My Account
                </button>
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
