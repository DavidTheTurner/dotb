import React from "react";
import { Mode } from "../../../../Constants";
import styled from "styled-components";

interface ModeCardProps {
  mode: Mode;
  onClick: () => void;
}

export const ModeCard: React.FC<ModeCardProps> = (props: ModeCardProps) => {
  const { mode, onClick } = props;
  const { displayName, icon, iconAlt } = mode;
  return (
    <CardContainer>
      <Card onClick={onClick}>
        <div>{displayName}</div>
        <CardIconContainer>
          <CardIcon src={icon} alt={iconAlt} />
        </CardIconContainer>
      </Card>
    </CardContainer>
  );
};

ModeCard.displayName = "ModeCard";

const Card = styled.div`
  height: 7rem;
  width: 6rem;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  border-radius: 10px;
  background: rgb(255, 0, 0, 0.09);
`;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardIconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardIcon = styled.img`
  width: 4rem;
  height: 4rem;
`;
