import React from "react";
import { Bar } from "./SubComponents";
import styled, { createGlobalStyle } from "styled-components";

interface AppContainerType {
  children: React.ReactNode;
}

export const AppContainer: React.FC<AppContainerType> = (
  props: AppContainerType,
) => {
  const { children } = props;

  return (
    <StyledAppContainer>
      <Bar />
      <ChildrenContainer>{children}</ChildrenContainer>
      <GlobalStyle />
    </StyledAppContainer>
  );
};

AppContainer.displayName = "AppContainer";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Josefin Sans';
    src: url('../../Assets/Fonts/Josefin_Sans/JosefinSans-VariableFont_wght.ttf');
  }
`;

const StyledAppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(255, 0, 0, 0.07);
  position: absolute;

  color: rgb(163, 182, 212);
  font-family: "Josefin Sans";
`;

const ChildrenContainer = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 30px);
`;
