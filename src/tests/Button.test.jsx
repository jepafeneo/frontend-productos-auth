import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "../components/ui/Button";

describe("Button", () => {
  it("muestra un texto", () => {
    render(<Button>Guardar</Button>);

    expect(screen.getByText("Guardar")).toBeInTheDocument();
  });
});
