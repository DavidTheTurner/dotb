const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("AppControls", {
  close: () => ipcRenderer.invoke("AppControls:close"),
  maximize: () => ipcRenderer.invoke("AppControls:maximize"),
  minimize: () => ipcRenderer.invoke("AppControls:minimize"),
});
