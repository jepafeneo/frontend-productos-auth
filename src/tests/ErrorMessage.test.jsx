import { describe, it, expect } from "vitest";
import ErrorMessage from "../components/ui/ErrorMessage";
import { render, screen } from "@testing-library/react";

describe("ErrorMessage", () => {
  it("deberia muestrar un mensaje de error predeterminado", () => {
    render(<ErrorMessage />);

    expect(screen.getByText("Ocurrió un error")).toBeInTheDocument();
  });

  it("deberia de retornar un mensaje de error", () => {
    render(<ErrorMessage error="ocurriò un error" />);

    expect(screen.getByText("ocurriò un error")).toBeInTheDocument();
  });
});
