import React from "react";
import { expect } from "@wdio/globals";
import { render, screen } from "@testing-library/react";

import { AppContainer } from "../../../src/Layouts";

describe("React Component Tests", () => {
  it("should test component with Testing Library", async () => {
    render(
      <AppContainer>
        <div data-testid="test-div" />
      </AppContainer>,
    );
    const component = screen.getByTestId("test-div");
    expect(component).toBePresent();
  });
});
