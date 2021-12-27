import React from "react";
import styled from "styled-components";

export const App: React.FC = () => {
  return (
    <>
      <NavBarContainer>Hello I am navbar</NavBarContainer>
    </>
  );
};

export default App;

const NavBarContainer = styled.div`
  height: 75px;
  background-color: red;
  width: 100%;
`;
