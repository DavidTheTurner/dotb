import React from "react";
import { AvailableModes, Mode } from "../../../../Constants";
import { ModeCard } from "../ModeCard";
import styled from "styled-components";
import { Card } from "@fluentui/react-components";

interface ModeSelectProps {
  handleModeSelect: (modeToSelect: JSX.Element) => void;
}

export const ModeSelect: React.FC<ModeSelectProps> = (
  props: ModeSelectProps,
) => {
  const { handleModeSelect } = props;

  const onClick = (mode: Mode) => {
    handleModeSelect(<mode.component />);
  };

  return (
    <SelectContainer>
      <h3>Select Mode</h3>
      <OptionsGrid>
        {AvailableModes.map((mode) => (
          <ModeCard
            key={mode.displayName}
            mode={mode}
            onClick={() => onClick(mode)}
          />
        ))}
        <Card size="small" appearance="subtle">
          <h3>Coming Soon</h3>
        </Card>
      </OptionsGrid>
    </SelectContainer>
  );
};

ModeSelect.displayName = "ModeSelect";

const SelectContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OptionsGrid = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
