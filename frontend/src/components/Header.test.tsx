import "@testing-library/jest-dom";
import { Header } from "./Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("render the Header component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  test("header", () => {
    expect(screen.getByRole("banner")).toBeInTheDocument();
    //   const { header } = render(<Header />);

    //   const headerElement = header.querySelector("header");
    // render(<Header />);
    //   render(<Header />);
    //   expect(screen.findByTestId("header")).toHaveAttribute("header");
    //   expect(screen.getByText("Bake it til you make it")).toBeInTheDocument();
    // expect(screen.("link")).
    // expect(screen.getByTestI("header", "")).toBeInTheDocument():

    //   expect(headerElement).toBeInTheDocument();
  });
  test("navigation hook to Home", () => {
    const ptag = screen.getByText(/Bake it til you make it/i);
    expect(ptag).toBeInTheDocument();
    fireEvent.click(ptag);
  });

  test("navigation to /searchrecipe", () => {
    const url = window.location.pathname + "searchrecipe";
    fireEvent.click(screen.getByTestId("search-icon"));
    expect(url).toBe("/searchrecipe");
  });
  test("navigation to /likedrecipe", () => {
    const url = window.location.pathname + "likedrecipe";
    fireEvent.click(screen.getByTestId("heart-icon"));
    expect(url).toBe("/likedrecipe");
  });

  test("icons in header", () => {
    const iconHeart = screen.getByTestId("heart-icon");
    const iconSearch = screen.getByTestId("search-icon");
    expect(iconHeart).toBeInTheDocument();
    expect(iconHeart).toHaveClass("material-symbols-outlined");
    expect(iconSearch).toBeInTheDocument();
    expect(iconSearch).toHaveClass("material-symbols-outlined");
  });
});
