import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const StyledContainer = styled.div`
  min-height: 100vh; // Sets the minimum height to be the full viewport height
  width: 100%; // Ensures the container takes full width
  display: flex; // Using flex to allow content expansion
  flex-direction: column; // Arranges children vertically
  align-items: center; // Aligns children in the center horizontally
  justify-content: center; // Aligns children in the center vertically
  background-color: #2D3748; /* bg-blueGray-700 */
  ${props => props.className && `.${props.className}`}; // Allows for additional class-based styling if needed
`;

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
