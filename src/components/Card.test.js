import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "./Card";

const el = {
  image: "https://via.placeholder.com/150",
  name: "Test Recipe",
  rating: 4.5,
  tags: ["Tag1", "Tag2", "Tag3"],
  id: 1,
};

test("renders the component Card & given props", () => {
  render(<Card el={el} />);

  // img is rendered
  const img = screen.getByTestId(`img-recipe-${el.id}`);
  expect(img).toBeInTheDocument();

  expect(img).toHaveAttribute("alt", el.name); // test img attr alt with el.name

  // title is rendered
  const title = screen.getByTestId(`title-recipe-${el.id}`);
  expect(title).toBeInTheDocument();

  expect(title.innerHTML).toBe(el.name); // test title h5 element with text "el.name"

  // rating is rendered
  const rating = screen.getByTestId(`rating-recipe-${el.id}`);
  expect(rating).toBeInTheDocument();

  expect(rating.innerHTML).toBe(el.rating.toString()); // test rating p element with text "el.rating"

  // rating is rendered
  const link = screen.getByTestId(`link-recipe-${el.id}`);
  expect(link).toBeInTheDocument();

  expect(link).toHaveAttribute(
    "href",
    `https://dummyjson.com/recipes/${el.id}`
  ); // test link anchor element with href "https://dummyjson.com/recipes/${el.id}"
});
