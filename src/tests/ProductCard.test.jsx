import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ProductCard from "../components/ProductCard";

const product = {
  _id: "123",
  name: "Notebook",
  price: 1500,
};

const renderWithProviders = (user = null, handleDelete = vi.fn()) => {
  render(
    <MemoryRouter>
      <AuthContext.Provider value={{ user }}>
        <ProductCard product={product} handleDelete={handleDelete} />
      </AuthContext.Provider>
    </MemoryRouter>,
  );

  return handleDelete;
};

describe("ProductCard", () => {
  it("Deberia mostrar name y price", () => {
    renderWithProviders();

    expect(screen.getByText("Notebook")).toBeInTheDocument();
    expect(screen.getByText("$ 1500")).toBeInTheDocument();
  });
});
