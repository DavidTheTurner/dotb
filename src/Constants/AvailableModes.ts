import { DiffChecker } from "../Components";
import DiffCheckerIcon from "../Assets/Images/DiffCheckerIcon.png";

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
] as const;
