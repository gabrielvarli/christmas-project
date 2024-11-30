import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../pages/Home";
import { MemoryRouter } from "react-router-dom";

describe("Home Page", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const renderResult = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    container = renderResult.container;
  });

  it("renders a call-to-action link with text 'Visit Shop'", () => {
    const link = screen.getByRole("link", { name: /Visit Shop/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/products"); // Kontrollera att länken har rätt URL
  });

  it("renders a call-to-action link with 'About Us'", () => {
    const link = screen.getByRole("link", { name: /About us/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/about"); // Kontrollera att länken har rätt URL
  });

  it("renders the hero section with the correct title", () => {
    const heading = screen.getByRole("heading", {
      name: /Skapa en magisk Julstämning/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders an image of a Christmas decoration", () => {
    const imgElement = screen.getByRole("img", {
      name: /christmas santa claus/i,
    });
    expect(imgElement).toHaveAttribute("src", "/images/santaclausremovebg.png");
  });

  it("renders countdown timer", () => {
    const countdown = screen.getByText(/Days/i);
    expect(countdown).toBeInTheDocument();
  });

  it("matches the snapshot", () => {
    expect(container).toMatchSnapshot();
  });
});
