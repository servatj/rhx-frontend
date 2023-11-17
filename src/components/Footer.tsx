import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: black;
  color: #CBD5E0; /* This is blueGray-600 */
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const FooterContent = styled.div`
  container: max-width;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 0 1rem;
`;

const Brand = styled.p`
  font-size: 1.125rem; /* This is for text-lg */
  font-weight: bold;
`;

const CopyRightText = styled.p`
  font-size: 0.875rem; /* This is for text-sm */
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem; /* This replaces the space-x-4 utility */
`;

const NavLink = styled.a`
  color: #CBD5E0; /* This is blueGray-600 */
  text-decoration: none;
  font-size: 0.875rem; /* This is for text-sm */
  &:hover {
    color: #9CA3AF; /* This is gray-400 */
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <Brand>Levely</Brand>
          <CopyRightText>© 2023 All rights reserved.</CopyRightText>
        </div>
        <Nav>
          <NavLink href="#">Privacy Policy</NavLink>
          <NavLink href="#">Terms of Service</NavLink>
          <NavLink href="#">Contact Us</NavLink>
        </Nav>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
