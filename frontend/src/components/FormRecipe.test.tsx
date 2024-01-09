import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { FormRecipe } from "./FormRecipe";

describe("render the Header component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <FormRecipe />
      </BrowserRouter>
    );
  });

  test("to interact with input-file", () => {
    const inputTag = screen.getByPlaceholderText(/t.ex kladdkaka.../i);
    fireEvent.change(inputTag, { target: { value: "muffins" } });

    expect(inputTag).toBeInTheDocument();
    expect(inputTag.value).toBe("muffins");
  });

  test("upload file", () => {
    // const onSubmit = jest.fn();
    const user = userEvent.setup();
    const file = new File(["hello"], "hello.png", { type: "image/png" });
    const input = screen.getByLabelText(/välj bild/i);
    const uploaded = user.upload(input, file);

    expect(file.name).toBe("hello.png");
    // expect().toBe(1);
    // user.upload(screen.getByText(/välj fil/i), file)
    // expect(screen.getByText(/välj fil/i).files[0]).toEqual(file)
  });

  test("should submit", () => {});
});
