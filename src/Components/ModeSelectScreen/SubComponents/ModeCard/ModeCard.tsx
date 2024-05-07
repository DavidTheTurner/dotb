import React from "react";
import { Mode } from "../../../../Constants";
import { useStyles } from "../../../../Styles/UseStyles";
import { Card } from "@fluentui/react-components";

interface ModeCardProps {
  mode: Mode;
  onClick: () => void;
}

export const ModeCard: React.FC<ModeCardProps> = (props: ModeCardProps) => {
  const { mode, onClick } = props;
  const { displayName, icon, iconAlt } = mode;
  const styles = useStyles();
  return (
    <div className={styles.cardContainer}>
      <Card
        className={styles.card}
        size="small"
        appearance="filled"
        onClick={onClick}
      >
        <div>{displayName}</div>
        <div className={styles.cardIconContainer}>
          <img className={styles.cardIcon} src={icon} alt={iconAlt} />
        </div>
      </Card>
    </div>
  );
};

ModeCard.displayName = "ModeCard";
