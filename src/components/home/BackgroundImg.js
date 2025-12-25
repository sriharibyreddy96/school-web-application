import React, { useState } from "react";
import styled from "styled-components";

const BackgroundContainer = styled.div`
  margin: 100px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60vh;
  color: white;
  padding: 0 10%;
  position: relative;
  background-color: #003057; /* Fallback if image doesn't load */

  /* Responsive design */
  @media (max-width: 770px) {
    flex-direction: column;
    margin: 50px 0px;
    height: auto;  /* Adjust height for smaller screens */
    padding: 0 5%; /* Adjust padding for smaller screens */
  }
`;

const TextContainer = styled.div`
  max-width: 50%;
  text-align: center;
  z-index: 2; /* Ensure text stays above the image */

  @media (max-width: 770px) {
    max-width: 100%;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;

  @media (max-width: 770px) {
    font-size: 2rem;
  }
`;

const SubHeading = styled.span`
  font-size: 1.25rem;
  color: lightgray;

  @media (max-width: 770px) {
    font-size: 1rem;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  padding: 20px 50px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  z-index: 2; /* Ensure form stays above the image */

  /* Responsive design */
  @media (max-width: 770px) {
    width: 100%;
    padding: 20px 50px;
    // height: 90vh;
    margin: 20px 0px;
  }
`;

const FormTitle = styled.h3`
  color: black;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 770px) {
    font-size: 1.5rem;
  }
`;

const InputField = styled.input`
  padding: 10px;
  margin: 2px 0;
  width: 95%;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 770px) {
    width: 100%;
  }
`;

const SelectField = styled.select`
  padding: 10px;
  margin: 2px 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 12px;
  margin-top: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 770px) {
    width: 100%;
  }
`;

const BackgroundImg = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    mobile: "",
    childName: "",
    date: "",
    month: "",
    year: "",
    standard: "",
    school: "",
    academicYear: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/userauth/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json(); // This is where the error occurs if the response is not JSON
      if (result.success) {
        alert("Enquiry submitted successfully!");
        setFormData({
          parentName: "",
          email: "",
          mobile: "",
          childName: "",
          date: "",
          month: "",
          year: "",
          standard: "",
          school: "",
          academicYear: "",
        });
      } else {
        alert("Failed to submit enquiry");
      }
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <BackgroundContainer>
        {/* Text section */}
        <TextContainer>
          <Heading>Welcome to Our School</Heading>
          <SubHeading>Enrol Your Child Today</SubHeading>
        </TextContainer>

        {/* Form Section */}
        <FormContainer>
          <FormTitle>Enquire Now</FormTitle>
          <form onSubmit={handleSubmit}>
            <InputField
              type="text"
              name="parentName"
              placeholder="Parent's Name"
              value={formData.parentName}
              onChange={handleChange}
              required
            />
            <InputField
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <InputField
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <InputField
              type="text"
              name="childName"
              placeholder="Child's Name"
              value={formData.childName}
              onChange={handleChange}
              required
            />

            <div style={{ display: "flex", gap: "10px" }}>
              <SelectField
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              >
                <option value="">Day</option>
                {[...Array(31)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </SelectField>

              <SelectField
                name="month"
                value={formData.month}
                onChange={handleChange}
                required
              >
                <option value="">Month</option>
                {[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ].map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </SelectField>

              <SelectField
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
              >
                <option value="">Year</option>
                {[...Array(35)].map((_, i) => (
                  <option key={i} value={1990 + i}>
                    {1990 + i}
                  </option>
                ))}
              </SelectField>
            </div>

            <SelectField
              name="standard"
              value={formData.standard}
              onChange={handleChange}
              required
            >
              <option value="">Standard</option>
              {[
                "Nursery",
                "LKG",
                "UKG",
                "1st",
                "2nd",
                "3rd",
                "4th",
                "5th",
                "6th",
                "7th",
                "8th",
                "9th",
                "10th",
              ].map((standard, index) => (
                <option key={index} value={standard}>
                  {standard}
                </option>
              ))}
            </SelectField>

            <InputField
              type="text"
              name="school"
              placeholder="Current School Name"
              value={formData.school}
              onChange={handleChange}
              required
            />

            <SelectField
              name="academicYear"
              value={formData.academicYear}
              onChange={handleChange}
              required
            >
              <option value="">Academic Year</option>
              {["Academic Year*", "2023-24"].map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </SelectField>

            <SubmitButton type="submit">Submit</SubmitButton>
          </form>
        </FormContainer>
      </BackgroundContainer>
    </div>
  );
};

export default BackgroundImg;
