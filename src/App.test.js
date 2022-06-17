import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);

  // find an element with a role of button and text of "Change to blue"
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text to be "Change to red"
  expect(colorButton.textContent).toBe("Change to red");
});

test("initial conditions", () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});

test("switch button disabled or enabled", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue"});

  const checkBox = screen.getByRole("checkbox");

  // click checkBox
  fireEvent.click(checkBox);

  // expect button will be disabled
  expect(colorButton).toBeDisabled();

  // second clcik checkBox
  fireEvent.click(checkBox);

  // expect button will be enabled
  expect(colorButton).toBeEnabled();
})