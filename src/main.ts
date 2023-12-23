const { app, BrowserWindow, ipcMain, nativeImage } = require("electron");
const { session } = require("electron");
const path = require("node:path");

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
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
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
            "default-src 'self'; style-src 'self' 'unsafe-inline'",
          ],
        },
      });
    }
  );

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
