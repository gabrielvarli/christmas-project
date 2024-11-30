// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import Products from "../../pages/Products";
// import { createMemoryRouter, RouterProvider } from "react-router-dom";

// describe("Products page", () => {
//   beforeEach(() => {
//     const router = createMemoryRouter([{ path: "/", element: <Products /> }], {
//       initialEntries: ["/"],
//     });
//     render(<RouterProvider router={router} />);
//   });

//   it('should have a title heading stating "Vi erbjuder allt från Klassiska julgranar"', () => {
//     const heading: HTMLElement = screen.getByRole("heading", {
//       name: /Vi erbjuder allt från/i,
//     });
//     expect(heading).toBeInTheDocument();
//   });
//   it('should have a subtitle heading stating "Klassiska julgranar"', () => {
//     const heading: HTMLElement = screen.getByRole("heading", {
//       name: /Klassiska julgranar/i,
//     });
//     expect(heading).toBeInTheDocument();
//   });
// });

// testat med snapshot

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Products from "../../pages/Products";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

describe("Products page", () => {
  let container: HTMLElement;

  beforeEach(() => {
    const router = createMemoryRouter([{ path: "/", element: <Products /> }], {
      initialEntries: ["/"],
    });

    const renderResult = render(<RouterProvider router={router} />);
    container = renderResult.container; // Spara containern för snapshot-test
  });

  it('renders the title heading stating "Vi erbjuder allt från Klassiska julgranar"', () => {
    const heading = screen.getByRole("heading", {
      name: /Vi erbjuder allt från/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the subtitle heading stating "Klassiska julgranar"', () => {
    const heading = screen.getByRole("heading", {
      name: /Klassiska julgranar/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("matches the snapshot", () => {
    expect(container).toMatchSnapshot();
  });
});
