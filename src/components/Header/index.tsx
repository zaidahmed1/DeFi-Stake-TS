import React from 'react';
import styled from 'styled-components';
import ActionButton from '../ActionButton'; 

// Styled components for the Header layout
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between; /* This will space out the content */
  align-items: center; /* Vertically center the content */
  padding: 16px; /* You can adjust this based on your needs */
  background-color: #fff; /* Set the background color for the header */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Optional, adds shadow to the header */
`;

const Logo = styled.img`
  height: 40px; /* Adjust logo size as needed */
`;

const Header = () => {

  const HandleOnClick = () => {
    console.log("Button Clicked")
  }

  return (
    <HeaderContainer>
      <Logo src="/favicon.ico" alt="Logo" />
      
      <ActionButton onClick={HandleOnClick}>Connect Wallet
      </ActionButton>
    </HeaderContainer>
  );
}

export default Header;
