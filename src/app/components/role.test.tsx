import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Role } from "./role";

describe("Role Test Suite", () => {
  it("role 별로 요소 찾아보기", () => {
    render(<Role />);

    const a = screen.getByRole("link");
    expect(a).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();

    // const h1 = screen.getByRole("heading");
  });
});
