import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/ui/Counter";

describe("Counter", () => {
  it("deberia incrementar el contador", () => {
    render(<Counter />);

    const button = screen.getByText("Incrementar");

    fireEvent.click(button);

    expect(screen.getByText("Counter: 1")).toBeDefined();
  });
});
