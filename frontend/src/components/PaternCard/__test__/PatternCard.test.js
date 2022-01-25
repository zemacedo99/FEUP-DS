import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";

import PatternCard from "..";

import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup); // Cleanup so there aren't multiple renders at the same time

const MockPatternCard = () => {
  return (
    <Router>
      <PatternCard
        id={0}
        title={"Mock Title"}
        favorite={false}
        saved={false}
        image={"Mock Image"}
        updatePattern={() => {}}
        setFavoriteIds={() => {}}
        setBookmarkIds={() => {}}
      />
    </Router>
  );
};

it("Renders PatternCard without crashing", () => {
  render(<MockPatternCard />);
});

it("Renders PatternCard with relevant elements", () => {
  const { getAllByRole, getAllByText } = render(<MockPatternCard />);
  expect(getAllByRole("img")).toHaveLength(1);
  expect(getAllByRole("button")).toHaveLength(4);
  expect(getAllByText("Mock Title")).toHaveLength(1);
});
