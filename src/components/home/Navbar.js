import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaCaretDown, FaCaretUp, FaBars, FaTimes } from "react-icons/fa";

// Import Google Font
import { createGlobalStyle } from "styled-components";

const Navbar = () => {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileOpen(!isMobileOpen);
  };

  const handleClick = (path) => {
    toggleMobileMenu(); // Call the function to toggle the mobile menu
    navigate(path); // Navigate to the specified path
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <GlobalStyle />
      <NavbarContainer scrolled={scrolled}>
        <NavbarContent>
          <Logo>Logo</Logo>
          <NavLinks>
            <NavLink onClick={() => navigate("/")}>Home</NavLink>
            <NavLink onClick={() => navigate("/admissions")}>Admissions</NavLink>
            <NavLink onClick={() => navigate("/academics")}>Academics</NavLink>
            <NavLink onClick={toggleDropdown}>
              More {isDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
              <Dropdown style={{ display: isDropdownOpen ? "block" : "none" }}>
                <DropdownLink onClick={() => navigate("/more")}>
                  Alumni
                </DropdownLink>
                <DropdownLink onClick={() => navigate("/more")}>
                  Circulars
                </DropdownLink>
                <DropdownLink onClick={() => navigate("/more")}>
                  Events
                </DropdownLink>
              </Dropdown>
            </NavLink>
            <NavLink onClick={() => navigate("/contact")}>Contact</NavLink>
          </NavLinks>
          <SignupButton onClick={() => navigate("/signup")}>
            Sign Up
          </SignupButton>
          <MenuToggle onClick={toggleMobileMenu}>
            {isMobileOpen ? <FaTimes /> : <FaBars />}
          </MenuToggle>
        </NavbarContent>

        <MobileMenu ref={mobileMenuRef} isOpen={isMobileOpen}>
          <MobileNavLinks>
            <NavLink onClick={() => handleClick("/")}>Home</NavLink>
            <NavLink onClick={() => handleClick("/admissions")}>Admissions</NavLink>
            <NavLink onClick={() => handleClick("/academics")}>Academics</NavLink>
            <NavLink onClick={toggleDropdown}>
              More {isDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
              <Dropdown style={{ display: isDropdownOpen ? "block" : "none" }}>
                <DropdownLink onClick={() => handleClick("/more")}>
                  Alumni
                </DropdownLink>
                <DropdownLink onClick={() => handleClick("/more")}>
                  Circulars
                </DropdownLink>
                <DropdownLink onClick={() => handleClick("/more")}>
                  Events
                </DropdownLink>
              </Dropdown>
            </NavLink>
            <NavLink onClick={() => handleClick("/contact")}>Contact</NavLink>
            <SignupButton onClick={() => handleClick("/signup")}>
              Sign Up
            </SignupButton>
          </MobileNavLinks>
        </MobileMenu>
      </NavbarContainer>
    </div>
  );
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 10vh;
  background: ${({ scrolled }) => (scrolled ? "rgba(0, 0, 0, 0.7)" : "white")};
  color: ${({ scrolled }) => (scrolled ? "white" : "black")};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease, color 0.3s ease;
  z-index: 1000;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: center; /* Center items */
  align-items: center;
  height: 100%; /* Fill the navbar height */
  padding: 0px 50px;
`;

const Logo = styled.div`
  font-size: 2rem; /* Increased font size */
  font-weight: bold;
  margin-right: auto; /* Pushes the logo to the left */
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none; // Hide links in mobile
  }
`;

const NavLink = styled.li`
  position: relative;
  cursor: pointer;
  font-size: 1.1rem; /* Font size for links */

  &:hover .dropdown {
    display: block;
  }
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background: black; /* Set background color for dropdown */
  color: white;
  border: 1px solid #ccc;
  border-radius: 8px; /* Add border radius */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: none;
  list-style: none;
  padding: 10px;
  margin: 0;
`;

const DropdownLink = styled.li`
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background: #e0e0e0; /* Change background on hover */
  }
`;

const SignupButton = styled.button`
  padding: 0.5rem 1rem;
  background: #003057;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem; /* Font size for button */
  margin-left: 2rem; /* Added margin to separate from links */

  @media (max-width: 768px) {
    display: none; // Hide button in mobile
  }
`;

const MenuToggle = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block; // Show menu toggle in mobile
  }
`;

const MobileMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const MobileNavLinks = styled.ul`
  list-style: none;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem; // Added gap for mobile links
`;

export default Navbar;
