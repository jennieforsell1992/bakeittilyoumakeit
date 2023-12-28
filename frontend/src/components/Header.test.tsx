import "@testing-library/jest-dom";
import { Header } from "./Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("render the Header component", () => {
  test("render Logo", () => {
    //   render(<Header />);
    //   expect(screen.findByTestId("header")).toHaveAttribute("header");
    //   expect(screen.getByText("Bake it til you make it")).toBeInTheDocument();
    // expect(screen.("link")).
  });
  test("navigation hook", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const ptag = getByText(/Bake it til you make it/i);
    expect(ptag).toBeInTheDocument();
    fireEvent.click(ptag);
  });
});
