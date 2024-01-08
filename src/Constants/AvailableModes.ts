import { DiffChecker, JsonToTypescript } from "../Components";
import DiffCheckerIcon from "../Assets/Images/DiffCheckerIcon.png";
import JsonToTypescriptIcon from "../Assets/Images/JsonToTsIcon.png";

export type Mode = {
  displayName: string;
  component: React.FC;
  icon: string;
  iconAlt: string;
};
type AvailableModesType = Array<Mode>;

export const AvailableModes: AvailableModesType = [
  {
    displayName: "Diff Checker",
    component: DiffChecker,
    icon: DiffCheckerIcon,
    iconAlt: "Diff Checker",
  },
  {
    displayName: "JSON To TypeScript",
    component: JsonToTypescript,
    icon: JsonToTypescriptIcon,
    iconAlt: "JSON to TypeScript",
  },
] as const;
