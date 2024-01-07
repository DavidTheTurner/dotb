import React from "react";
import { Bar } from "./SubComponents";
import { useStyles } from "../../Styles/UseStyles";

interface AppContainerType {
  children: React.ReactNode;
}

export const AppContainer: React.FC<AppContainerType> = (
  props: AppContainerType,
) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Bar />
      <div className={classes.appContentContainer}>{children}</div>
    </div>
  );
};

AppContainer.displayName = "AppContainer";
