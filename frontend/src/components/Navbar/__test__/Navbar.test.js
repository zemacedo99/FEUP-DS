import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";

import {
  NavbarCustomDesktop,
  NavbarCustomTablet,
  NavbarCustomMobile,
} from "..";

import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup); // Cleanup so there aren't multiple renders at the same time

it("Renders NavbarDesktop without crashing", () => {
  render(
    <Router>
      <NavbarCustomDesktop />
    </Router>
  );
});

it("Renders NavbarTablet without crashing", () => {
  render(
    <Router>
      <NavbarCustomTablet />
    </Router>
  );
});

it("Renders NavbarDesktop without crashing", () => {
  render(
    <Router>
      <NavbarCustomMobile />
    </Router>
  );
});

it("Renders NavbarDesktop with relevant elements", () => {
  const { getByTestId, getAllByRole } = render(
    <Router>
      <NavbarCustomDesktop />
    </Router>
  );
  const navbar = getByTestId("navbar_desktop");
  expect(navbar).toHaveTextContent("About");
  expect(navbar).toHaveTextContent("Patterns");
  expect(navbar).toHaveTextContent("Bookmarks");
  // expect(navbar).toHaveTextContent("Favourites");
  expect(getAllByRole("link")).toHaveLength(4);
});

it("Renders NavbarTablet with relevant elements", () => {
  const { getByTestId, getAllByRole } = render(
    <Router>
      <NavbarCustomTablet />
    </Router>
  );
  const navbar = getByTestId("navbar_tablet");
  expect(navbar).not.toHaveTextContent("About");
  expect(navbar).not.toHaveTextContent("Patterns");
  expect(navbar).not.toHaveTextContent("Bookmarks");
  // expect(navbar).not.toHaveTextContent("Favourites");
  expect(getAllByRole("link")).toHaveLength(3);
});

it("Renders NavbarMobile with relevant elements", () => {
  const { getByTestId, getAllByRole } = render(
    <Router>
      <NavbarCustomMobile />
    </Router>
  );
  const navbar = getByTestId("navbar_mobile");
  expect(navbar).not.toHaveTextContent("About");
  expect(navbar).not.toHaveTextContent("Patterns");
  expect(navbar).not.toHaveTextContent("Bookmarks");
  // expect(navbar).toHaveTextContent("Favourites");
  expect(getAllByRole("link")).toHaveLength(4);
});
