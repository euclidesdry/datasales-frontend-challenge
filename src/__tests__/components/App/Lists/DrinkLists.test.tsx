import React from "react";
import { render, screen } from "@testing-library/react";

import { DrinkList } from "../../../../components/App/Lists/DrinkList";

describe("Header", () => {
  test("should be rendered", () => {
    render(<DrinkList />);
    const linkElement = screen.getByTestId("list-app");
    expect(linkElement).toBeInTheDocument();
  });
});
