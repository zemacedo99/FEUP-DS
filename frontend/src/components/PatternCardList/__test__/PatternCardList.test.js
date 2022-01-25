import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";

import PatternCardList from "..";

import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup); // Cleanup so there aren't multiple renders at the same time

const MockPatternCardList = ({ patterns }) => {
  return (
    <Router>
      <PatternCardList
        patterns={patterns}
        updatePattern={() => {}}
        updatePattern={() => {}}
        setFavoriteIds={() => {}}
        setBookmarkIds={() => {}}
      />
    </Router>
  );
};

const getMockPatterns = () => {
  return [
    { id: 0, title: "0", favorite: false, saved: false, image: "mock" },
    { id: 1, title: "1", favorite: false, saved: false, image: "mock" },
  ];
};

it("Renders PatternCardList without crashing", () => {
  render(<MockPatternCardList patterns={[]} />);
});

it("Renders empty PatternCardList", () => {
  const { container } = render(<MockPatternCardList patterns={[]} />);
  expect(container.getElementsByClassName("col-6").length).toBe(0);
});

it("Renders empty PatternCardList", () => {
  const { container } = render(
    <MockPatternCardList patterns={getMockPatterns()} />
  );
  expect(container.getElementsByClassName("col-6").length).toBe(2);
});
