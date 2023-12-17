import React from "react";
import AppContainerStyles from "./AppContainer.module.css";

interface AppContainer {
  children: React.ReactNode;
}

export const AppContainer: React.FC<AppContainer> = (props: AppContainer) => {
  const { children } = props;

  return <div className={AppContainerStyles.appContainer}>{children}</div>;
};

AppContainer.displayName = "AppContainer";
