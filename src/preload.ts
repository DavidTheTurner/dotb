const { contextBridge, ipcRenderer } = require("electron");
const isPreloadDev = require("./electron-is-dev");
if (isPreloadDev) {
  require("wdio-electron-service/preload");
}

contextBridge.exposeInMainWorld("AppControls", {
  close: () => ipcRenderer.invoke("AppControls:close"),
  maximize: () => ipcRenderer.invoke("AppControls:maximize"),
  minimize: () => ipcRenderer.invoke("AppControls:minimize"),
});
