import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Loading from "../components/ui/Loading";

describe("Muestra un texto por pantalla", () => {
  it("Muestra un texto", () => {
    render(<Loading text="Prueba Cargando..." />);

    expect(screen.getByText("Prueba Cargando...")).toBeInTheDocument();
  });
});
