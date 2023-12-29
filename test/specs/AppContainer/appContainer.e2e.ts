import { browser } from "@wdio/globals";

describe("AppContainer", () => {
  afterEach(async () => {
    await browser.reloadSession();
  });

  it("should minimize the window", async () => {
    const minimizeButton = await browser.$("#minimize");

    const windowId = await browser.electron.execute((electron) => {
      const window = electron.BrowserWindow.getFocusedWindow();
      return window?.id ?? -1;
    });
    expect(windowId).toBeGreaterThan(0);

    let isMinimized = await browser.electron.execute((electron, id) => {
      const window = electron.BrowserWindow.fromId(id);
      return window?.isMinimized();
    }, windowId);
    expect(isMinimized).toBe(false);

    await minimizeButton.click();

    isMinimized = await browser.electron.execute((electron, id) => {
      const window = electron.BrowserWindow.fromId(id);
      return window?.isMinimized();
    }, windowId);
    expect(isMinimized).toBe(true);
  });

  it("should maximize the window", async () => {
    const maximizeButton = await browser.$("#maximize");

    const windowId = await browser.electron.execute((electron) => {
      const window = electron.BrowserWindow.getFocusedWindow();
      return window?.id ?? -1;
    });
    expect(windowId).toBeGreaterThan(0);

    let isMaximized = await browser.electron.execute((electron, id) => {
      const window = electron.BrowserWindow.fromId(id);
      return window?.isMaximized();
    }, windowId);
    expect(isMaximized).toBe(false);

    await maximizeButton.click();

    isMaximized = await browser.electron.execute((electron, id) => {
      const window = electron.BrowserWindow.fromId(id);
      return window?.isMaximized();
    }, windowId);
    expect(isMaximized).toBe(true);
  });

  it("should close the window", async () => {
    const closeButton = await browser.$("#close");
    const appContainer = await browser.$("#app-container");
    await closeButton.click();
    expect(appContainer).not.toBeExisting();
  });
});
