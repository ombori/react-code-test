import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders users header", () => {
  const { getByText } = render(<App />);
  const usersHeader = getByText(/users/i);
  expect(usersHeader).toBeInTheDocument();
});
