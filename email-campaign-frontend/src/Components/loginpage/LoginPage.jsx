import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormSelect,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import "../../Styles/login.scss"; // Import your SCSS file

const Login = () => {
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [loginError, setLoginError] = useState("");
  const [forgotPasswordError, setForgotPasswordError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = () => {
    if (!company || !password) {
      setLoginError("Please fill in all required fields.");
      return;
    }
    setLoginError(""); // Clear previous errors

    // Handle login logic here (e.g., API call to authenticate the user)
    console.log("Company:", company);
    console.log("Password:", password);

    // Navigate to dashboard on successful login
    navigate("/dashboard"); // Adjust the route to your dashboard
  };

  const handleForgotPassword = () => {
    if (!email) {
      setForgotPasswordError("Please enter your email address.");
      return;
    }
    setForgotPasswordError(""); // Clear previous errors

    // Handle forgot password logic here (e.g., API call to send reset link)
    console.log("Email:", email);

    // Show a message or redirect as needed
    // navigate("/some-other-page");
  };

  return (
    <div className="login-page bg-soft-gray min-vh-100 d-flex flex-row align-items-center">
      <CContainer className="login-container">
        <CRow className="login-row justify-content-center">
          <CCol className="login-col">
            <CCardGroup className="login-card-group">
              <CCard className="login-box shadow-lg border-0 rounded-lg">
                <CCardBody className="login-card-body">
                  {!isForgotPassword ? (
                    <>
                      <div className="login-header text-center mb-4">
                        <h2 className="login-title">Login</h2>
                        <p className="login-subtitle text-gray">
                          Sign in to your company's account
                        </p>
                      </div>
                      <CForm className="login-form">
                        {loginError && (
                          <div className="error-message text-center mb-3 text-danger">
                            {loginError}
                          </div>
                        )}
                        <CInputGroup className="login-form-group form-group mb-3">
                          <CInputGroupText className="login-input-icon">
                            <CIcon icon={cilUser} />
                          </CInputGroupText>
                          <CFormSelect
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="login-select form-control border-teal"
                            aria-label="Select Company"
                          >
                            <option value="">Select Company</option>
                            <option value="company1">Company 1</option>
                            <option value="company2">Company 2</option>
                            {/* Add more companies as needed */}
                          </CFormSelect>
                        </CInputGroup>
                        <CInputGroup className="login-form-group form-group mb-4">
                          <CInputGroupText className="login-input-icon">
                            <CIcon icon={cilLockLocked} />
                          </CInputGroupText>
                          <CFormInput
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="login-input form-control border-teal"
                            autoComplete="current-password"
                          />
                        </CInputGroup>
                        <CRow className="login-button-row">
                          <CCol
                            xs={12}
                            className="login-button-col d-flex justify-content-center"
                          >
                            <CButton
                              className="login-button"
                              onClick={handleLogin}
                            >
                              Login
                            </CButton>
                          </CCol>
                        </CRow>
                        <div className="forgot-password text-center mt-3">
                          <Link
                            to="#"
                            onClick={() => setIsForgotPassword(true)}
                            className="forgot-password-link text-teal"
                          >
                            Forgot password?
                          </Link>
                        </div>
                        <div className="register-link text-center mt-3">
                          <p className="register-text">
                            Don't have an account?{" "}
                            <Link
                              to="/register"
                              className="register-link-text text-teal"
                            >
                              Register
                            </Link>
                          </p>
                        </div>
                      </CForm>
                    </>
                  ) : (
                    <>
                      <div className="forgot-password-header text-center mb-4">
                        <h2 className="forgot-password-title">
                          Forgot Password
                        </h2>
                        <p className="forgot-password-subtitle text-gray">
                          Enter your email address to receive a password reset
                          link.
                        </p>
                      </div>
                      <CForm className="forgot-password-form">
                        {forgotPasswordError && (
                          <div className="error-message text-center mb-3 text-danger">
                            {forgotPasswordError}
                          </div>
                        )}
                        <CInputGroup className="forgot-password-form-group form-group mb-4">
                          <CInputGroupText className="forgot-password-input-icon">
                            <CIcon icon={cilUser} />
                          </CInputGroupText>
                          <CFormInput
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="forgot-password-input form-control border-teal"
                            autoComplete="email"
                          />
                        </CInputGroup>
                        <CRow className="forgot-password-button-row">
                          <CCol
                            xs={12}
                            className="forgot-password-button-col d-flex justify-content-center"
                          >
                            <CButton
                              className="forgot-password-button"
                              onClick={handleForgotPassword}
                            >
                              Send Reset Link
                            </CButton>
                          </CCol>
                        </CRow>
                        <div className="back-to-login text-center mt-3">
                          <Link
                            to="#"
                            onClick={() => setIsForgotPassword(false)}
                            className="back-to-login-link text-teal"
                          >
                            Back to Login
                          </Link>
                        </div>
                      </CForm>
                    </>
                  )}
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
