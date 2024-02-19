import store, { saveState, loadState } from "./store";
const { app, BrowserWindow, ipcMain, nativeImage } = require("electron");
const { session } = require("electron");
const path = require("node:path");
const isDev = require("./electron-is-dev");
if (isDev) {
  require("wdio-electron-service/main");
}

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

const createWindow = () => {
  const image = nativeImage.createFromPath("src/Assets/Images/B_Logo.png");
  const win = new BrowserWindow({
    width: 800,
    minWidth: 800,
    height: 600,
    minHeight: 600,
    backgroundColor: "black",
    useContentSize: true,
    frame: false,
    title: "Dot-B",
    icon: image,
    webPreferences: {
      sandbox: !isDev,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  win.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  return win;
};

app.whenReady().then(() => {
  const win = createWindow();

  ipcMain.handle("AppControls:close", () => {
    win.close();
  });
  ipcMain.handle("AppControls:maximize", () => {
    if (win.isMaximized()) {
      win.restore();
    } else {
      win.maximize();
    }
  });
  ipcMain.handle("AppControls:minimize", () => {
    win.minimize();
  });

  session.defaultSession.webRequest.onHeadersReceived(
    (details: any, callback: any) => {
      callback({
        responseHeaders: {
          ...details.responseHeaders,
          "Content-Security-Policy": [
            "default-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self' *;",
          ],
        },
      });
    },
  );

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      loadState();
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    saveState();
    app.quit();
  }
});
