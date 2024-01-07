import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./Styles/Fonts.css";
import {
  FluentProvider,
  BrandVariants,
  Theme,
  createDarkTheme,
} from "@fluentui/react-components";

const root = document.getElementById("root");
if (root === null) throw new Error("Root element not found");

const aVermilionDollars: BrandVariants = {
  10: "#080102",
  20: "#2D0B11",
  30: "#4D0819",
  40: "#66021D",
  50: "#7D0022",
  60: "#950025",
  70: "#AC0727",
  80: "#C01A2A",
  90: "#D32D2E",
  100: "#E34234",
  110: "#F1573C",
  120: "#FB6D48",
  130: "#FF865C",
  140: "#FF9F77",
  150: "#FFB692",
  160: "#FFCBAF",
};

const theme: Theme = {
  ...createDarkTheme(aVermilionDollars),
  fontFamilyBase: "Josefin Sans",
};

createRoot(root).render(
  <FluentProvider theme={theme}>
    <App />
  </FluentProvider>,
);
