import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import App from "../App";
// Pepperoni checkbox
test("checkbox is initially unchecked", () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  expect(addPepperoni).not.toBeChecked();
});
test("checkbox appears as checked when user clicks it", () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  userEvent.click(addPepperoni);
  expect(addPepperoni).toBeChecked();
});
test("checkbox appears as unchecked when user clicks a second time", () => {
  render(<App />);
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  userEvent.click(addPepperoni);
  expect(addPepperoni).toBeChecked();
  userEvent.click(addPepperoni);
  expect(addPepperoni).not.toBeChecked();
});

// Size select element
test("Size select element initially displays `Small`", () => {
  render(<App />)
  const selectSize = screen.getByLabelText(/select size/i)
  expect(selectSize).toHaveDisplayValue("Small")
})

// "Your Selection" text

// "Contact Info" text box
// Submit Order button