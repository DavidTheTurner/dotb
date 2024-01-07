import React from "react";
import { AvailableModes, Mode } from "../../../../Constants";
import { ModeCard } from "../ModeCard";
import { useStyles } from "../../../../Styles/UseStyles";

interface ModeSelectProps {
  handleModeSelect: (modeToSelect: JSX.Element) => void;
}

export const ModeSelect: React.FC<ModeSelectProps> = (
  props: ModeSelectProps,
) => {
  const { handleModeSelect } = props;
  const styles = useStyles();

  const onClick = (mode: Mode) => {
    handleModeSelect(<mode.component />);
  };

  return (
    <div className={styles.selectModeContainer}>
      <div className={styles.selectModeContent}>
        <h3>Select Mode</h3>
        <div className={styles.selectModeOptionsGrid}>
          {AvailableModes.map((mode) => (
            <ModeCard
              key={mode.displayName}
              mode={mode}
              onClick={() => onClick(mode)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

ModeSelect.displayName = "ModeSelect";
