import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useStyles = makeStyles({
  root: {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorNeutralForeground1,
    fontFamily: tokens.fontFamilyBase,
  },
  appContentContainer: {
    position: "relative",
    width: "100vw",
    height: "calc(100vh - 30px)",
  },
  cardContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    height: "9rem",
    width: "7rem",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    alignItems: "center",
    ...shorthands.borderRadius("10px"),
    ...shorthands.padding("0.75rem"),
    backgroundColor: tokens.colorBrandBackground2,
  },
  cardIconContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  cardIcon: {
    width: "4rem",
    height: "4rem",
  },
});
