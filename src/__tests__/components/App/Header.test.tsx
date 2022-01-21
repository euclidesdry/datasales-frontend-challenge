import React from "react";
import { render, screen } from "@testing-library/react";

import { Header } from "../../../components/App/Header";

describe("Header", () => {
  test("should be rendered", () => {
    render(<Header />);
    const linkElement = screen.getByTestId("header-app");
    expect(linkElement).toBeInTheDocument();
  });
});
