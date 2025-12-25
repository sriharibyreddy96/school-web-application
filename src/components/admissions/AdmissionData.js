import React from 'react';
import styled from 'styled-components';
import Faqs from './Faqs';

// Styled Components
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;

const Heading1 = styled.h1`
  font-size: 2.5rem;
`;

const Heading2 = styled.h2`
  font-size: 1.5rem;
  `;

const ApplyButton = styled.button`
  margin: 20px 0;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: #003057;
  color: white;
  border: none;
  border-radius: 3px;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #2b2b2b;
`;

const Heading3 = styled.h3`
  color: gray;
  font-weight: bold;
`;

const Heading4 = styled.h4`
  font-weight: normal;
`;

const List = styled.ul`
  list-style-type: circle;
  padding-left: 20px;
  text-align: left;
`;

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto; /* Enables horizontal scrolling */
  margin: 20px 0;

  @media (min-width: 990px) {
    overflow-x: visible; /* Remove scrolling above 990px */
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }
`;

// AdmissionData Component
const AdmissionData = () => {
  return (
    <>
    <Container>
      <Heading1>Admissions</Heading1>
      <ApplyButton>Apply Now</ApplyButton>
      <Paragraph>Admission to TIPS is open to students who can benefit from the educational services currently provided by our programs. Our purpose is to provide an outstanding educational program with Quality and Value-Based Education. Every child deserves a vibrant, stimulating learning environment that encourages and supports their full potential.</Paragraph>
      <Paragraph>TIPS offers admissions to Pre-Primary and Grades 1 to 12.</Paragraph>

      <Heading2>Admissions Applications:</Heading2>
      <Heading4>Admission to applicants is open only to grades where vacancies are available.</Heading4>
      <Paragraph>In making the admission decision, the Administration will consider the enrollment capacity of the school. An applicant pool may be utilized to fill openings which become available during the school year in accordance with admission priorities and class size guidelines.</Paragraph>
      <Paragraph>Admission is initially considered upon receipt of an online inquiry request submitted with Student and Parents information.</Paragraph>
      <Paragraph>On receiving the online inquiry form, a TIPS admissions manager will contact you shortly with details for a conveniently scheduled telephonic conversation with a dedicated admissions coordinator who will take you through our academic programmes and the exciting student life we offer here at TIPS.</Paragraph>
      <Paragraph>This will be followed up with a call from our admissions manager to find out your decision and guide you to the next step of admissions process to Pre-Register online. Pre-Registration requires online submission of student photo, previous two academic years transcripts (Grade 3 onwards) and Aadhar/Passport details.</Paragraph>
      <Paragraph>On successful completion of Pre-registration, candidates (from Grade 2 onwards) will be invited to attend an online/offline entrance examination followed by an interactive session with Principal/Head of Campus. Test results will be confirmed on the same day. This will be followed by an online/offline interactive session with our Principal/Head of Campus and that completes the selection process.</Paragraph>
      <Paragraph>Students applying from Pre-KG to Grade 1 will be invited to attend an online/offline interactive session, where they will be observed and assessed by a panel that includes one of our teachers, an educational consultant, and a member of directors for admissions.</Paragraph>
      <Paragraph>The Principal/ Head of Campus reserves the right to make the final decision regarding admission.</Paragraph>

      <Heading2>Application Documentation:</Heading2>
      <Paragraph>The admission process is followed by submission of application document in Admission Office.</Paragraph>

      <Heading3 style={{ color: 'gray', fontWeight: 'bold' }}>Students:</Heading3>
      <List>
        <li>3 recent color photos.</li>
        <li>Birth certificate of student or a copy of a foreign passport of the student and parent(s).</li>
        <li>Academic records for the past two years (submitted during Pre-registration)</li>
        <li>Transfer Certificate from the previous school. If for any reason the Transfer Certificate cannot be produced at the time of admission, it must be produced on or before the commencement of the academic session.</li>
        <li>Transport / Lunch and Boarding requisition forms</li>
        <li>Health Record</li>
        <li>Permission form</li>
      </List>

      <Heading3 style={{ color: 'gray', fontWeight: 'bold' }}>Family</Heading3>
      <List>
        <li>Residential address proof</li>
        <li>Permission to contact current/previous school.</li>
      </List>

      <Heading2>Prospectus</Heading2>
      <Paragraph>We are pleased to share with you our prospectus. Download Prospectus</Paragraph>

      <Heading2>Eligibility Criteria</Heading2>
      <Paragraph>A student seeking admission to any class in TIPS should satisfy the requirements of age limits (minimum and maximum) as determined by the local State/U.T Government.</Paragraph>

      <TableContainer>
        <Table>
          <tbody>
            <tr>
              <td>Age</td>
              <td>1 1/2+</td>
              <td>2 1/2+</td>
              <td>3 1/2+</td>
              <td>4 1/2+</td>
              <td>5+</td>
              <td>6+</td>
              <td>7+</td>
              <td>8+</td>
              <td>9+</td>
              <td>10+</td>
              <td>11+</td>
              <td>12+</td>
              <td>13+</td>
              <td>14+</td>
              <td>15+</td>
              <td>16+</td>
            </tr>
            <tr>
              <td>Grade</td>
              <td>PLAY GROUP</td>
              <td>PRE-KG</td>
              <td>KG-1</td>
              <td>KG-2</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
            </tr>
          </tbody>
        </Table>
      </TableContainer>
    </Container>
    <Faqs />
    </>
  );
};

export default AdmissionData;
