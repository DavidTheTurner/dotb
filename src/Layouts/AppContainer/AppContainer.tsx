import React from "react";
import AppContainerStyles from "./AppContainer.module.css";
import { Bar, TabBar } from "./SubComponents";

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
      <TabBar />
      <ChildrenContainer>{children}</ChildrenContainer>
    </div>
  );
};

AppContainer.displayName = "AppContainer";

const ChildrenContainer = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 30px);
`;
