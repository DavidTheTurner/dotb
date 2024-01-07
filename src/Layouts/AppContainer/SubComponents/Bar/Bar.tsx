import React from "react";
import dotBLogo from "../../../../Assets/Images/B_Logo.png";
import {
  BorderOutsideThick20Filled,
  ArrowMinimize20Filled,
  Dismiss20Filled,
} from "@fluentui/react-icons";
import { useStyles } from "../../../../Styles/UseStyles";
import { mergeClasses } from "@fluentui/react-components";

export const Bar: React.FC = () => {
  const styles = useStyles();
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
    <div className={styles.barContainer}>
      <div className={styles.barTitle}>
        <img className={styles.barLogo} src={dotBLogo} />
        Dot-B
      </div>
      <div className={styles.barButtonContainer}>
        <div
          className={mergeClasses(
            styles.barButton,
            styles.confirmingBackground,
          )}
          onClick={handleMinimizeClick}
          id="minimize"
        >
          <ArrowMinimize20Filled />
        </div>
        <div
          className={mergeClasses(styles.barButton, styles.cautionBackground)}
          onClick={handleMaximizeClick}
          id="maximize"
        >
          <BorderOutsideThick20Filled />
        </div>
        <div
          className={mergeClasses(styles.barButton, styles.dangerBackground)}
          onClick={handleXClick}
          id="close"
        >
          <Dismiss20Filled />
        </div>
      </div>
    </div>
  );
};
