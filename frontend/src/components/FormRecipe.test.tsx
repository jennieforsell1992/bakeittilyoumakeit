import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";
// import { fireEvent, render, screen } from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";
// import { FormRecipe } from "./FormRecipe";

describe("render the Header component", () => {
  //   beforeEach(() => {
  //     render(
  //       <BrowserRouter>
  //         <FormRecipe />
  //       </BrowserRouter>
  //     );
  //   });

  test("to interact with input-tags", () => {
    // const user = userEvent.setup();
    // const inputLabel = screen.getByLabelText(/Vad heter bakelsen?/i);
    // const inputTag = screen.getByPlaceholderText(/t.ex kladdkaka.../i);
    // const checkbox = screen.getByRole("checkbox");
    // const formElement = screen.getByRole("form", inputTag);
    // const inputElement = screen.getByRole("textbox", {
    //   name: /t.ex kladdkaka.../i,
    // });
    // user.click(inputTag);
    // expect(inputLabel).toBeInTheDocument();
    // expect(inputTag).toBeInTheDocument();
    // expect(formElement).toBeInTheDocument();
    // expect(checkbox).not.toBeChecked();
  });

  test("upload file", () => {
    // const user = userEvent.setup();
    // const file = new File(['hello'], 'hello.png', {type: 'image/png'})
    // user.upload(screen.getByText(/välj fil/i), file)
    // expect(screen.getByText(/välj fil/i).files[0]).toEqual(file)
  });
});
