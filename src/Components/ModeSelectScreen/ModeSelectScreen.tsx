import React, { useState } from "react";
import { AppContainer } from "../../Layouts";
import { ModeSelect } from "./SubComponents";

export const ModeSelectScreen: React.FC = () => {
  const [selectedComponent, setSelectedComponent] =
    useState<JSX.Element | null>(null);

  const handleModeSelect = (modeToSelect: JSX.Element) => {
    setSelectedComponent(modeToSelect);
  };

  const ModeFunctionality: JSX.Element =
    selectedComponent === null ? (
      <ModeSelect handleModeSelect={handleModeSelect} />
    ) : (
      selectedComponent
    );

  return <AppContainer>{ModeFunctionality}</AppContainer>;
};

ModeSelectScreen.displayName = "ModeSelectScreen";
