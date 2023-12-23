import React from "react";
import AppContainerStyles from "./AppContainer.module.css";
import { Bar } from "./SubComponents";

interface AppContainerType {
  children: React.ReactNode;
}

export const AppContainer: React.FC<AppContainerType> = (
  props: AppContainerType
) => {
  const { children } = props;

  return (
    <div className={AppContainerStyles.appContainer}>
      <Bar />
      {children}
    </div>
  );
};

AppContainer.displayName = "AppContainer";
