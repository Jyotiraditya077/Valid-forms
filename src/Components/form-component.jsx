import React from "react";
import "./form.css";

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const phoneValidator = /^[0-9]{10}$/; // 10 digit phone number
const panValidator = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; // PAN format
const aadharValidator = /^[0-9]{12}$/;

class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      emailAddress: "",
      password: "",
      passwordConfirmation: "",
      phoneNo: "",
      country: "",
      city: "",
      panNo: "",
      aadharNo: "",
      firstNameError: "",
      lastNameError: "",
      usernameError: "",
      emailAddressError: "",
      passwordError: "",
      passwordConfirmationError: "",
      phoneNoError: "",
      countryError: "",
      cityError: "",
      panNoError: "",
      aadharNoError: "",
      isFormSubmitted: false,
      showPassword: false, 
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateField = this.validateField.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleBlur(event) {
    const { name } = event.target;
    this.validateField(name);
  }

  handleSubmit(event) {
    event.preventDefault();
    const fields = [
      "firstName",
      "lastName",
      "username",
      "emailAddress",
      "password",
      "phoneNo",
      "country",
      "city",
      "panNo",
      "aadharNo"
    ];
    let isValid = true;
    fields.forEach(field => {
      isValid = this.validateField(field) && isValid;
    });

    this.setState({ isFormSubmitted: isValid });
    return isValid;
  }

  handleBack() {
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      emailAddress: "",
      password: "",
      passwordConfirmation: "",
      phoneNo: "",
      country: "",
      city: "",
      panNo: "",
      aadharNo: "",
      firstNameError: "",
      lastNameError: "",
      usernameError: "",
      emailAddressError: "",
      passwordError: "",
      passwordConfirmationError: "",
      phoneNoError: "",
      countryError: "",
      cityError: "",
      panNoError: "",
      aadharNoError: "",
      isFormSubmitted: false
    });
  }

  validateField(name) {
    switch (name) {
      case "firstName":
        return this.validateFirstName();
      case "lastName":
        return this.validateLastName();
      case "username":
        return this.validateUsername();
      case "emailAddress":
        return this.validateEmailAddress();
      case "password":
        return this.validatePassword();
      case "phoneNo":
        return this.validatePhoneNo();
      case "country":
        return this.validateCountry();
      case "city":
        return this.validateCity();
      case "panNo":
        return this.validatePanNo();
      case "aadharNo":
        return this.validateAadharNo();
      default:
        return false;
    }
  }

  validateFirstName() {
    const value = this.state.firstName.trim();
    const error = value === "" ? "First Name is required" : "";
    this.setState({ firstNameError: error });
    return error === "";
  }

  validateLastName() {
    const value = this.state.lastName.trim();
    const error = value === "" ? "Last Name is required" : "";
    this.setState({ lastNameError: error });
    return error === "";
  }

  validateUsername() {
    const value = this.state.username.trim();
    const error = value === "" ? "Username is required" : "";
    this.setState({ usernameError: error });
    return error === "";
  }

  validateEmailAddress() {
    const value = this.state.emailAddress.trim();
    let error = "";
    if (value === "") error = "Email Address is required";
    else if (!emailValidator.test(value)) error = "Email is not valid";
    this.setState({ emailAddressError: error });
    return error === "";
  }

  validatePassword() {
    const value = this.state.password.trim();
    let error = "";
    if (value === "") error = "Password is required";
    else if (!passwordValidator.test(value)) {
      error = "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";
    }
    this.setState({ passwordError: error });
    return error === "";
  }

  validatePhoneNo() {
    const value = this.state.phoneNo.trim();
    const error = !phoneValidator.test(value) ? "Phone Number must be 10 digits" : "";
    this.setState({ phoneNoError: error });
    return error === "";
  }

  validateCountry() {
    const value = this.state.country.trim();
    const error = value === "" ? "Country is required" : "";
    this.setState({ countryError: error });
    return error === "";
  }

  validateCity() {
    const value = this.state.city.trim();
    const error = value === "" ? "City is required" : "";
    this.setState({ cityError: error });
    return error === "";
  }

  validatePanNo() {
    const value = this.state.panNo.trim();
    const error = !panValidator.test(value) ? "Invalid PAN Number" : "";
    this.setState({ panNoError: error });
    return error === "";
  }

  validateAadharNo() {
    const value = this.state.aadharNo.trim();
    const error = !aadharValidator.test(value) ? "Invalid Aadhar Number" : "";
    this.setState({ aadharNoError: error });
    return error === "";
  }

  togglePasswordVisibility() {
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  }

  render() {
    return (
      <div className="form-wrapper">
      <div className="form-container">
      
        {this.state.isFormSubmitted ? (
          <div className="details">
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Hello Pal!</h2>
            <h3>Thanks for signing up, find your details below:</h3>
            <div>First Name: {this.state.firstName}</div>
            <div>Last Name: {this.state.lastName}</div>
            <div>Username: {this.state.username}</div>
            <div>Email Address: {this.state.emailAddress}</div>
            <div>Phone Number: {this.state.phoneNo}</div>
            <div>Country: {this.state.country}</div>
            <div>City: {this.state.city}</div>
            <div>PAN Number: {this.state.panNo}</div>
            <div>Aadhar Number: {this.state.aadharNo}</div>
            <button onClick={this.handleBack} style={{ marginTop: "20px" }}>Back to Signup</button>
          </div>
        ) : (
          <>
            <h2 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>SignUp Form</h2>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              {this.state.firstNameError && <div className="errorMsg">{this.state.firstNameError}</div>}
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              {this.state.lastNameError && <div className="errorMsg">{this.state.lastNameError}</div>}
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              {this.state.usernameError && <div className="errorMsg">{this.state.usernameError}</div>}
              <input
                type="email"
                placeholder="Email Address"
                name="emailAddress"
                value={this.state.emailAddress}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              {this.state.emailAddressError && <div className="errorMsg">{this.state.emailAddressError}</div>}
              <input
                type={this.state.showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <button type="button" onClick={this.togglePasswordVisibility}>
                {this.state.showPassword ? "Hide" : "Show"}
              </button>
              {this.state.passwordError && <div className="errorMsg">{this.state.passwordError}</div>}
              <input
                type="password"
                placeholder="Confirm Password"
                name="passwordConfirmation"
                value={this.state.passwordConfirmation}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              {this.state.passwordConfirmationError && (
                <div className="errorMsg">{this.state.passwordConfirmationError}</div>
              )}
              <input
                type="text"
                placeholder="Phone Number"
                name="phoneNo"
                value={this.state.phoneNo}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              {this.state.phoneNoError && <div className="errorMsg">{this.state.phoneNoError}</div>}
              <select
                name="country"
                value={this.state.country}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
              {this.state.countryError && <div className="errorMsg">{this.state.countryError}</div>}
              <select
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              >
                <option value="">Select City</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Bhubaneswar">Bhubaneswar</option>
              </select>
              {this.state.cityError && <div className="errorMsg">{this.state.cityError}</div>}
              <input
                type="text"
                placeholder="PAN Number"
                name="panNo"
                value={this.state.panNo}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              {this.state.panNoError && <div className="errorMsg">{this.state.panNoError}</div>}
              <input
                type="text"
                placeholder="Aadhar Number"
                name="aadharNo"
                value={this.state.aadharNo}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              {this.state.aadharNoError && <div className="errorMsg">{this.state.aadharNoError}</div>}
              <button type="submit">Signup</button>
            </form>
          </>
        )}
      </div>
      </div>
    );
  }
}

export default FormComponent;