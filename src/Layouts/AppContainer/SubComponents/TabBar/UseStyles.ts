import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useStyles = makeStyles({
  barDiv: {
    width: "100%",
    height: "2.5rem",
    overflowX: "auto",
    overflowY: "hidden",
    boxSizing: "border-box",
    whiteSpace: "nowrap",
    backgroundColor: "#171717",
    ...shorthands.border("1px", "solid", "#2a2a2a"),
    "&::-webkit-scrollbar": {
      height: "0.15rem"
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#3d3d3d"
    }
  },

  newTabButton: {
    height: "inherit",
    aspectRatio: "1 / 1",
    userSelect: "none",
    verticalAlign: "top",
    backgroundColor: "transparent",
    ...shorthands.border("none"),
    fontFamily: "monospace",
    color: "white",
    ...shorthands.borderRight("1px", "solid", "#2a2a2a"),
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#2a2a2a",
      color: "white"
    }
  },

  closeButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "1.5rem",
    aspectRatio: "1 / 1",
    visibility: "hidden",
    userSelect: "none",
    backgroundColor: "transparent",
    ...shorthands.border("none"),
    ...shorthands.borderRadius("20%"),
    color: "#aaaaaa",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#3d3d3d",
      color: "white"
    }
  },
  
  tabDiv: {
    height: "inherit",
    ...shorthands.overflow("hidden"),
    whiteSpace: "nowrap",
    display: "inline-flex",
    alignItems: "center",
    columnGap: "0.5rem",
    ...shorthands.padding("0", "0.5rem", "0", "1rem"),
    userSelect: "none",
    boxSizing: "border-box",
    fontFamily: tokens.fontFamilyBase,
    fontSize: "0.9rem",
    color: "#aaaaaa",
    backgroundColor: "transparent",
    ...shorthands.borderRight("1px", "solid", "#2a2a2a"),
    cursor: "pointer",
    "&:hover": {
      "& button": { visibility: "visible" },
      backgroundColor: "#2a2a2a"
    }
  },

  focusedTab: {
    backgroundColor: "#202020"
  },
  
  activeTab: {
    color: "white",
    ...shorthands.borderTop("1px", "solid", "#1e90ff")
  }
});