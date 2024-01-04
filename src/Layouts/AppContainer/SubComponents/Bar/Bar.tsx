import React from "react";
import styled from "styled-components";
import dotBLogo from "../../../../Assets/Images/B_Logo.png";
import {
  BorderOutsideThick20Filled,
  ArrowMinimize20Filled,
  Dismiss20Filled,
} from "@fluentui/react-icons";

const BarIcon = styled.div`
  cursor: pointer;
  background: ${(props) => props.color};
  border-radius: 10%;
  width: 20px;
  height: 20px;
  text-align: center;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-app-region: no-drag;
`;

const BarContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  background: rgb(255, 0, 0, 0.11);
  -webkit-app-region: drag;
  -webkit-user-select: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0 0.1rem;
  margin-right: 0.5rem;
`;

const Logo = styled.img`
  width: 20px;
  height: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 0.5rem;
  margin-left: 0.25rem;
`;

export const Bar: React.FC = () => {
  const handleXClick = () => {
    window.AppControls.close();
  };
  const handleMaximizeClick = () => {
    window.AppControls.maximize();
  };
  const handleMinimizeClick = () => {
    window.AppControls.minimize();
  };

  return (
    <BarContainer>
      <TitleContainer>
        <Logo src={dotBLogo} />
        Dot-B
      </TitleContainer>
      <ButtonContainer>
        <BarIcon color="green" onClick={handleMinimizeClick} id="minimize">
          <ArrowMinimize20Filled />
        </BarIcon>
        <BarIcon color="yellow" onClick={handleMaximizeClick} id="maximize">
          <BorderOutsideThick20Filled />
        </BarIcon>
        <BarIcon color="red" onClick={handleXClick} id="close">
          <Dismiss20Filled />
        </BarIcon>
      </ButtonContainer>
    </BarContainer>
  );
};
