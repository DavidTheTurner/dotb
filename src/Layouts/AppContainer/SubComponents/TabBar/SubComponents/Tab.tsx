import React from "react";
import styled from "styled-components";

interface TabProps {
  id: string;
  name: string;
  order: number;
  $isSelected: boolean;
  $isDragOver: boolean;
  handleSelect: () => void;
  handleClose: () => void;
  handleDragStart: () => void;
  handleDragEnd: () => void;
  handleDrop: () => void;
}

export const Tab: React.FC<TabProps> = (props: TabProps) => {
  const {
    id,
    name,
    handleSelect,
    handleClose,
    handleDragStart,
    handleDragEnd,
    handleDrop,
    ...rest
  } = props;

  return (
    <TabDiv
      {...rest}
      draggable="true"
      onMouseDown={handleSelect}
      onDragStart={(event) => {
        event.dataTransfer.dropEffect = "move";
        handleDragStart();
      }}
      onDragEnd={(event) => {
        event.stopPropagation();
        event.preventDefault();
        handleDragEnd();
      }}
      onDragOver={(event) => {
        event.stopPropagation();
        event.preventDefault();
      }}
      onDrop={(event) => {
        event.stopPropagation();
        event.preventDefault();
        handleDrop();
      }}
    >
      {name}
      <CloseButton
        onClick={(event) => {
          event.stopPropagation();
          handleClose();
        }}
      >
        x
      </CloseButton>
    </TabDiv>
  );
};

Tab.displayName = "Tab";

const CloseButton = styled.button`
  height: 1.5rem;
  aspect-ratio: 1 / 1;
  visibility: hidden;
  user-select: none;
  background-color: transparent;
  border: none;
  border-radius: 20%;
  font-family: monospace;
  color: #aaaaaa;
  cursor: pointer;
  &:hover {
    background-color: #3d3d3d;
    color: white;
  }
`;

const TabDiv = styled.div<{
  order: number;
  $isSelected: boolean;
  $isDragOver: boolean;
}>`
  height: inherit;
  max-width: 8rem;
  order: ${(props) => props.order};
  overflow: hidden;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  column-gap: 0.5rem;
  padding: 0 1rem 0 1rem;
  user-select: none;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
  color: #aaaaaa;
  background-color: ${(props) => {
    if (props.$isSelected) return "#202020";
    else if (props.$isDragOver) return "#202020";
    else return "transparent";
  }};
  border-top: ${(props) => (props.$isSelected ? "1px solid #1e90ff" : "none")};
  border-right: 1px solid #2a2a2a;
  cursor: pointer;
  &:hover {
    background-color: #2a2a2a;
  }
  &:hover ${CloseButton} {
    visibility: visible;
  }
`;
