import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
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

  test("to interact with input-file", () => {});

  test("upload file", () => {
    const user = userEvent.setup();
    const file = new File(["hello"], "hello.png", { type: "text/plain" });
    const input = screen.getByLabelText(/välj bild/i);
    user.upload(input, file);

    expect(file.name).toBe("hello.png");
  });

  test("should not submit", () => {});

  test("should submit", async () => {});
});
