import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { FormRecipe } from "./FormRecipe";
// import { jest } from "@jest/globals";

describe("render the Header component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <FormRecipe />
      </BrowserRouter>
    );
  });

  test("to interact with input-file", () => {
    // const inputTag = screen.getByPlaceholderText(/t.ex kladdkaka.../i);
    // fireEvent.change(inputTag, { target: { value: "muffins" } });
    // expect(inputTag).toBeInTheDocument();
    // expect(inputTag.value).toBe("muffins");
  });

  test("upload file", () => {
    const user = userEvent.setup();
    const file = new File(["hello"], "hello.png", { type: "text/plain" });
    const input = screen.getByLabelText(/välj bild/i);
    user.upload(input, file);

    expect(file.name).toBe("hello.png");
    // expect().toBe(1);
    // user.upload(screen.getByText(/välj fil/i), file)
    // expect(screen.getByText(/välj fil/i).files[0]).toEqual(file)
  });

  test("should not submit", () => {
    //  const onSubmit = jest.fn();
  });

  test("should submit", async () => {
    // render(<FormRecipe />);
    // const submitButton = jest.fn();
    // const handleSubmit = jest.fn();
    // render(<form onSubmit={handleSubmit} />);
    // const user = userEvent.setup();
    // const inputTitle = screen.getByPlaceholderText(/t.ex kladdkaka.../i);
    // const inputBakingTime = screen.getByPlaceholderText(/t.ex 30 minuter/i);
    // const inputIngredientOne = screen.getByTestId(/ingredientOne/i);
    // const inputIngredientTwo = screen.getByTestId(/ingredientTwo/i);
    // const inputDescriptionOne = screen.getByTestId(/stepOne/i);
    // const inputDescriptionTwo = screen.getByTestId(/stepTwo/i);
    // // const submitButton = screen.getByTestId(/submit-button/i);
    // const file = new File(["hello"], "hello.png", { type: "text/plain" });
    // const input = screen.getByLabelText(/välj bild/i);
    // user.upload(input, file);
    // fireEvent.change(inputTitle, { target: { value: "muffins" } });
    // fireEvent.change(inputBakingTime, { target: { value: "20 minuter" } });
    // fireEvent.change(inputIngredientOne, { target: { value: "2dl mjölk" } });
    // fireEvent.change(inputIngredientTwo, { target: { value: "3dl mjöl" } });
    // fireEvent.change(inputDescriptionOne, {
    //   target: { value: "Sätt på ugnen på 200 grader" },
    // });
    // fireEvent.change(inputDescriptionTwo, {
    //   target: { value: "blanda ihop alla ingredienser" },
    // });
    // // fireEvent.click(screen.getByText("Lägg till recept"));
    // expect(file.name).toBe("hello.png");
    // expect(inputTitle.value).toBe("muffins");
    // expect(inputBakingTime.value).toBe("20 minuter");
    // expect(inputIngredientOne.value).toBe("2dl mjölk");
    // expect(inputIngredientTwo.value).toBe("3dl mjöl");
    // expect(inputDescriptionOne.value).toBe("Sätt på ugnen på 200 grader");
    // expect(inputDescriptionTwo.value).toBe("blanda ihop alla ingredienser");
    // expect(handleSubmit).toHaveBeenCalled();
  });
});
