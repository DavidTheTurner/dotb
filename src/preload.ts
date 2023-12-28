const { contextBridge, ipcRenderer } = require("electron");
require("wdio-electron-service/preload");
if (process.env.NODE_ENV === "test") {
}

contextBridge.exposeInMainWorld("AppControls", {
  close: () => ipcRenderer.invoke("AppControls:close"),
  maximize: () => ipcRenderer.invoke("AppControls:maximize"),
  minimize: () => ipcRenderer.invoke("AppControls:minimize"),
});
