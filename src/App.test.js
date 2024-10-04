import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders App component with NavBar, image banner, and Footer", async () => {
  render(<App />);

  // image banner is rendered
  const banner = screen.getByTestId("image-banner");
  expect(banner).toBeInTheDocument();

  expect(banner).toHaveProperty(
    "src",
    "https://www.instacart.com/company/wp-content/uploads/2022/11/cooking-statistics-hero.jpg"
  ); // test image banner src property

  expect(banner).toHaveProperty("alt", "banner"); // test image banner alt property

  ////////////////////////////////////////////////
  // Navbar h3 is rendered
  const navTitle = screen.getByTestId("my-recipe");
  expect(navTitle).toBeInTheDocument();

  expect(navTitle.innerHTML).toBe("My Recipe"); // test h3 element on Navbar with text "My Recipe"

  // Form is rendered
  const form = screen.getByTestId("form-search");
  expect(form).toBeInTheDocument();

  //////////////////////////////////////////////
  // Footer text is rendered
  const footerText = screen.getByTestId("footer-text");
  expect(footerText).toBeInTheDocument();

  expect(footerText.innerHTML).toBe(
    "© 2024 Company, Inc. All rights reserved."
  ); // test p element with text "© 2024 Company, Inc. All rights reserved."

  // Facebook icon is rendered
  const facebook = screen.getByTestId("link-facebook");
  expect(facebook).toBeInTheDocument();

  expect(facebook).toHaveAttribute("href", "https://facebook.com"); // test href anchor facebook

  // X icon is rendered
  const x = screen.getByTestId("link-x");
  expect(x).toBeInTheDocument();

  expect(x).toHaveAttribute("href", "https://x.com"); // test href anchor X

  // Instagram icon is rendered
  const instagram = screen.getByTestId("link-instagram");
  expect(instagram).toBeInTheDocument();

  expect(instagram).toHaveAttribute("href", "https://instagram.com/"); // test href anchor instagram
});
