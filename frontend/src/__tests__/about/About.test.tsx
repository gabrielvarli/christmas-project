//funkar

// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import About from "../../pages/About";

// describe("About page", () => {
//   it("should have a title stating 'Din destination för julshopping 🎄'", () => {
//     render(<About />);
//     const heading: HTMLElement = screen.getByRole("heading", {
//       name: /Din destination för julshopping 🎄/i,
//     });
//     expect(heading).toBeInTheDocument();
//   });

//   it("should have a picture of the about", () => {
//     render(<About />);
//     const imgElement: HTMLElement = screen.getByRole("img", {
//       name: /about/i,
//     });
//     expect(imgElement).toHaveAttribute("src", "/images/about.png");
//   });
// });

// // 1 error

// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import About from "../../pages/About";

// describe("About Page", () => {
//   let container: HTMLElement;

//   beforeEach(() => {
//     const renderResult = render(<About />);
//     container = renderResult.container; // Spara hela renderade outputen för snapshot
//   });

//   it("renders the title 'Din destination för julshopping 🎄'", () => {
//     const heading = screen.getByRole("heading", {
//       name: /Din destination för julshopping 🎄/i,
//     });
//     expect(heading).toBeInTheDocument();
//   });

//   it("displays the about image with the correct alt text and source", () => {
//     const imgElement = screen.getByRole("img", { name: /about image/i });
//     expect(imgElement).toBeInTheDocument();
//     expect(imgElement).toHaveAttribute("src", "/images/about.png");
//   });

//   it("matches the snapshot", () => {
//     expect(container).toMatchSnapshot(); // Jämför det renderade resultatet med tidigare snapshot
//   });
// });

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../../pages/About";

describe("About Page", () => {
  it("displays the about image with the correct alt text and source", () => {
    render(<About />);

    const imgElement = screen.getByRole("img", { name: /about/i });
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "/images/about.png");
  });

  it("displays the main heading correctly", () => {
    render(<About />);

    const headingElement = screen.getByRole("heading", {
      name: /Din destination för julshopping 🎄/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it("renders the reasons to choose Christmas Shopping", () => {
    render(<About />);

    const reasons = screen.getByText(/Varför välja oss\? 🎁/i);
    expect(reasons).toBeInTheDocument();
  });

  it("displays the closing message", () => {
    render(<About />);

    const closingMessage = screen.getByText(
      /Tack för att du låter oss vara en del av dina jultraditioner\./i
    );
    expect(closingMessage).toBeInTheDocument();
  });
});
