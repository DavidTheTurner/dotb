import { browser } from "@wdio/globals";

describe("AppContainer", () => {
  afterEach(async () => {
    await browser.reloadSession();
  });

  it("should minimize the window", async () => {
    const minimizeButton = await browser.$("#minimize");
    await minimizeButton.click();
    expect(await browser.$("#app-container")).toHaveAttr("minimized");
  });

  it("should maximize the window", async () => {
    const maximizeButton = await browser.$("#maximizes");
    expect(maximizeButton).toExist();
    await maximizeButton.click();
    expect(await browser.$("#app-container")).toHaveAttr("maximized");
    await maximizeButton.click();
    expect(await browser.$("#app-container")).not.toHaveAttr("maximized");
  });

  it("should close the window", async () => {
    const closeButton = await browser.$("#close");
    const appContainer = await browser.$("#app-container");
    await closeButton.click();
    expect(appContainer).not.toBeExisting();
  });
});
