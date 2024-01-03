import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Tab } from "./SubComponents";

interface Tab {
  name: string;
  order: number;
}

export const TabBar: React.FC = () => {
  const [tabs, setTabs] = useState<Map<string, Tab>>(new Map<string, Tab>());
  const [selectedTab, setSelectedTab] = useState<string>("");
  const [draggingTab, setDraggingTab] = useState<string>("");
  const [hoveringTab, setHoveringTab] = useState<string>("");

  const createTab = () => {
    setTabs((currentTabs) => {
      const newTabs = new Map(currentTabs);
      const id = crypto.randomUUID();
      newTabs.set(id, {
        name: "New Tab",
        order: currentTabs.size,
      });
      setSelectedTab(id);
      return newTabs;
    });
  };

  const closeTab = (id: string) => {
    return () => {
      setTabs((currentTabs) => {
        if (id === selectedTab) {
          const keys = Array.from(currentTabs.keys());

          // Contextually select a new tab on close
          if (keys.length > 1) {
            const index = keys.indexOf(id);
            setSelectedTab(
              index === keys.length - 1 ? keys[index - 1] : keys[index + 1]
            );
          } else setSelectedTab("");
        }

        const newTabs = new Map(currentTabs);
        newTabs.delete(id);
        return newTabs;
      });
    };
  };

  const selectTab = (id: string) => {
    return () => {
      setSelectedTab(id);
    };
  };

  const dragTab = (id: string) => {
    return () => {
      setDraggingTab(id);
    };
  };

  const releaseTab = () => {
    setDraggingTab("");
    setHoveringTab("");
  };

  const dropTab = (id: string) => {
    return () => {
      if (draggingTab === id) return;
      const sourceTab = tabs.get(draggingTab);
      const targetTab = tabs.get(id);
      if (!sourceTab || !targetTab) return;

      // Contextually order tab behind/ahead of target
      sourceTab.order =
        sourceTab.order > targetTab.order
          ? targetTab.order - 0.5
          : targetTab.order + 0.5;

      // Sort array by order then convert back to map
      // Order is replaced by index order before rendering
      setTabs((currentTabs) => {
        const tabArray = Array.from(currentTabs);
        tabArray.sort((a, b) => a[1].order - b[1].order);
        return new Map(tabArray);
      });
    };
  };

  return (
    <BarDiv>
      {Array.from(tabs).map(([id, tab], index) => {
        tab.order = index;
        return (
          <Tab
            key={id}
            id={id}
            name={tab.name}
            order={index}
            $isSelected={id === selectedTab}
            $isDragOver={id === hoveringTab}
            handleSelect={selectTab(id)}
            handleClose={closeTab(id)}
            handleDragStart={dragTab(id)}
            handleDragEnd={releaseTab}
            handleDrop={dropTab(id)}
          />
        );
      })}
      <NewTabButton onClick={createTab}>+</NewTabButton>
    </BarDiv>
  );
};

TabBar.displayName = "TabBar";

const BarDiv = styled.div`
  width: 100%;
  height: 2.5rem;
  overflow-x: auto;
  overflow-y: hidden;
  box-sizing: border-box;
  white-space: nowrap;
  background-color: #171717;
  border: 1px solid #2a2a2a;
  &::-webkit-scrollbar {
    height: 0.15rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #3d3d3d;
  }
`;

const NewTabButton = styled.button`
  height: inherit;
  aspect-ratio: 1 / 1;
  user-select: none;
  vertical-align: top;
  background-color: transparent;
  border: none;
  font-family: monospace;
  color: white;
  border-right: 1px solid #2a2a2a;
  cursor: pointer;
  &:hover {
    background-color: #2a2a2a;
    color: white;
  }
`;
