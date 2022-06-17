import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";

test("button has correct initial color", () => {
  render(<App />);

  // find an element with a role of button and text of "Change to blue"
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

  // expect the button text to be "Change to red"
  expect(colorButton).toHaveTextContent("Change to MediumVioletRed");
});

test("initial conditions", () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});

test("switch button disabled or enabled", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });

  const checkBox = screen.getByRole("checkbox", { name: "Disabled button" });

  // click checkBox
  fireEvent.click(checkBox);

  // expect button will be disabled
  expect(colorButton).toBeDisabled();

  // second clcik checkBox
  fireEvent.click(checkBox);

  // expect button will be enabled
  expect(colorButton).toBeEnabled();
});

test("click checkBox desabled button that button will switch red to gray color", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });

  const checkBox = screen.getByRole("checkbox", { name: "Disabled button" });

  fireEvent.click(checkBox);

  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkBox);

  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("click checkBox desabled button that button will switch blue to gray color", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: "Change to MidnightBlue",
  });
  const checkBox = screen.getByRole("checkbox", { name: "Disabled button" });

  fireEvent.click(colorButton);

  fireEvent.click(checkBox);

  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkBox);

  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
