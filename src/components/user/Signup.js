import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import FontAwesome eye icons
import authService from "../../services/authService";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import ScrollTop from "../home/ScrollTopButton";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // State to toggle confirmPassword visibility
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    // Client-side validation
    if (!formData.username) {
      validationErrors.username = "Username is required!";
    }

    if (!formData.email) {
      validationErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Invalid email address!";
    }

    if (!formData.mobile) {
      validationErrors.mobile = "Mobile number is required!";
    } else if (formData.mobile.length !== 10) {
      validationErrors.mobile = "Mobile number must be exactly 10 digits long!";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required!";
    } else if (formData.password.length < 8) {
      validationErrors.password =
        "Password must be at least 8 characters long!";
    } else if (
      !/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])/.test(
        formData.password
      )
    ) {
      validationErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character!";
    }

    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword =
        "Confirm Password must match Password!";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await authService.signup(formData);
      alert("Signup successful!");

      // Navigate to the login page after successful signup
      navigate("/login");
    } catch (error) {
      const errorMessages = error.response?.data.errors || [];
      const newErrors = { ...validationErrors };

      errorMessages.forEach((err) => {
        newErrors[err.field] = err.message; // Map backend errors to the respective fields
      });

      setErrors(newErrors); // Update the errors state with both client and backend errors
    }
  };

  return (
    <>
      <Navbar />
      <FormContainer>
        <Heading>Welcome to Signup</Heading>
        <Form onSubmit={handleSubmit}>
          <Input
            name="username"
            placeholder="Username"
            autoComplete="off"
            onChange={handleChange}
            required
          />
          {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}

          <Input
            name="email"
            type="email"
            autoComplete="off"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

          <Input
            name="mobile"
            placeholder="Mobile"
            autoComplete="off"
            onChange={handleChange}
            required
          />
          {errors.mobile && <ErrorMessage>{errors.mobile}</ErrorMessage>}

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
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}

          <InputContainer>
            <Input
              name="confirmPassword"
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={handleChange}
              required
            />
            <IconButton onClick={toggleConfirmPasswordVisibility}>
              {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </IconButton>
          </InputContainer>
          {errors.confirmPassword && (
            <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
          )}

          <Button type="submit">Sign Up</Button>
        </Form>
        <LinkText>
          Already have an account?{" "}
          <LoginLink onClick={() => navigate("/login")}>Login</LoginLink>
        </LinkText>
      </FormContainer>
      <Footer />
      <ScrollTop />
    </>
  );
};

export default Signup;

// =============================================================
// ======================== STYLES =============================
// =============================================================

// Styled components
const FormContainer = styled.div`
  max-width: 400px;
  margin: 30px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
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

const Button = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin: 5px 0 0;
`;

const LinkText = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  // font-family: san-serif;
`;

const LoginLink = styled.a`
  color: #007bff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
