const { app, BrowserWindow } = require("electron");
const { session } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    minWidth: 800,
    height: 600,
    minHeight: 600,
    backgroundColor: "black",
    useContentSize: true,
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();

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
