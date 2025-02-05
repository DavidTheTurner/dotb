import React from "react";
import { mergeClasses } from "@fluentui/react-components";
import { Dismiss16Filled } from "@fluentui/react-icons";
import { useStyles } from "../UseStyles";

interface TabProps {
  id: string;
  name: string;
  isSelected: boolean;
  isDragOver: boolean;
  handleSelect: () => void;
  handleClose: () => void;
  handleDragStart: () => void;
  handleDragEnter: () => void;
  handleDragEnd: () => void;
  handleDrop: () => void;
}

export const Tab: React.FC<TabProps> = (props: TabProps) => {
  const styles = useStyles();
  const {
    id,
    name,
    isSelected,
    isDragOver,
    handleSelect,
    handleClose,
    handleDragStart,
    handleDragEnter,
    handleDragEnd,
    handleDrop,
    ...rest
  } = props;

  const className = mergeClasses(
    styles.tabDiv,
    isSelected && styles.activeTab,
    (isSelected || isDragOver) && styles.focusedTab
  );

  return (
    <div
      {...rest}
      className={className}
      draggable="true"
      onMouseDown={(event: any) => {
        if (event.target === event.currentTarget) {
          handleSelect();
        }
      }}
      onDragStart={(event: any) => {
        event.dataTransfer.dropEffect = "move";
        handleDragStart();
      }}
      onDragEnter={(event: any) => {
        if (event.target === event.currentTarget) {
          handleDragEnter();
        }
      }}
      onDragOver={(event: any) => {
        event.preventDefault();
      }}
      onDragEnd={() => {
        handleDragEnd();
      }}
      onDrop={() => {
        handleDrop();
      }}
    >
      {name}
      <button
        className={styles.closeButton}
        onClick={(event: any) => {
          event.stopPropagation();
          handleClose();
        }}
      >
        <Dismiss16Filled />
      </button>
    </div>
  );
};

Tab.displayName = "Tab";
