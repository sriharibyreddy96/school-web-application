// Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { SiGooglechrome } from 'react-icons/si';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TopSection = styled.div`
  background-color: #003057;
  color: white;
  text-align: center;
  padding: 20px 0;

  h2 {
    margin: 0;
    font-size: 24px;
  }

  button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #ffcb00;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #003057;
      border: 1px solid white;
      color: white;
    }
  }
`;

const BottomSection = styled.div`
  background-color: Wheat;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  padding: 30px 10px;

  .icons {
    display: flex;
    gap: 15px;

    svg {
      color: white;
      font-size: 24px;
      cursor: pointer;
      background-color: #003057;
      border-radius: 50px;
      padding: 10px;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .copyright {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    .icons {
      margin-bottom: 10px;
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <TopSection>
        <h2>Speak to our Admission Counsellors to know more</h2>
        <button>Enquire Now</button>
      </TopSection>
      <BottomSection>
        <div className="icons">
          <SiGooglechrome />
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
          <FaYoutube />
        </div>
        <div className="copyright">
         &copy; Copyright {currentYear} Myschool. All rights reserved.
        </div>
      </BottomSection>
    </FooterContainer>
  );
};

export default Footer;
