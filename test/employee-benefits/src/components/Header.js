// src/components/Header.js
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  padding: 20px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.div`
  margin-left: 10px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <UserInfo>
        <img src="path-to-user-image.jpg" alt="User" width="50" height="50" />
        <UserName>
          <h3>Aaron Smith</h3>
          <p>Finance Manager</p>
        </UserName>
      </UserInfo>
    </HeaderContainer>
  );
};

export default Header;
