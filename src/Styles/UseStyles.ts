import { makeStyles, tokens } from "@fluentui/react-components";

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
});
