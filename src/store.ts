import { configureStore } from "@reduxjs/toolkit";
import fs from "fs";
import path from "path";
const initialState = {
  //initial state goes here
};

const rootReducer = (state = { count: 0 }, action: any) => {
  switch (action) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export function loadState() {
  try {
    const rawData = fs.readFileSync("pathtostate.json", "utf-8");
    const parsedState = JSON.parse(rawData);
    return parsedState;
  } catch (e) {
    console.error("Failed to load state, initializing with default state", e);
    return initialState;
  }
}

const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),
});

export const saveState = () => {
  try {
    const state = JSON.stringify(store.getState());
    fs.writeFileSync(path.resolve(__dirname, "state.json"), state);
  } catch (err) {
    console.error("Failed to save state:", err);
  }
};

export default store;
