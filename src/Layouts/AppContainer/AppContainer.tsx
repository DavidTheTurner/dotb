import React from "react";
import AppContainerStyles from "./AppContainer.module.css";

interface AppContainerType {
  children: React.ReactNode;
}

export const AppContainer: React.FC<AppContainerType> = (
  props: AppContainerType
) => {
  const { children } = props;

  return <div className={AppContainerStyles.appContainer}>{children}</div>;
};

AppContainer.displayName = "AppContainer";
