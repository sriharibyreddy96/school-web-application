import React, { useState } from "react";
import authService from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import FontAwesome eye icons
import styled from "styled-components"; // Import styled-components
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import ScrollTop from "../home/ScrollTopButton";

const Login = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });
  
  const [error, setError] = useState(""); // To store error messages
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message on each submit attempt

    try {
      const response = await authService.login(formData);
      localStorage.setItem("token", response.data.token);

      if (response.data.role === "admin") {
        navigate("/admindetails");
      } else {
        navigate("/userdetails");
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("Invalid username, email, or password"); // Set error message for invalid credentials
      } else {
        setError("Something went wrong. Please try again later"); // Handle other errors
      }
    }
  };

  return (
    <>
    <Navbar/>
      <LoginContainer>
      <Form onSubmit={handleSubmit}>
        <Heading>Welcome back to Login</Heading>
        <Input
          name="usernameOrEmail"
          placeholder="Username or Email"
          onChange={handleChange}
          autoComplete="off"
          required
          value={formData.usernameOrEmail}
        />
        <InputContainer>
        <Input
          name="password"
          type={passwordVisible ? "text" : "password"}
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <IconButton onClick={togglePasswordVisibility}>
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </IconButton>
          </InputContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <SubmitButton type="submit">Login</SubmitButton>
        <LinkText>
          Don't have an account?{" "}
          <SignupLink onClick={() => navigate("/signup")}>Signup</SignupLink>
        </LinkText>
      </Form>
    </LoginContainer>
    <Footer />
    <ScrollTop />
    </>
  );
};

// =============================================================
// ======================== STYLES =============================
// =============================================================

// Styled components
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f7f6;
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
`;

const Form = styled.form`
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

const InputContainer = styled.div`
  position: relative;
`;

const IconButton = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 20px;
  color: #007bff;
`;

const LinkText = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  // font-family: san-serif;
`;

const SignupLink = styled.a`
  color: #007bff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default Login;
