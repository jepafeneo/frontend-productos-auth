import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ProductList from "../components/ProductList";

const products = [
  {
    _id: "1",
    name: "Mouse",
    price: 100,
  },
  {
    _id: "2",
    name: "Teclado",
    price: 200,
  },
];

describe("ProductList", () => {
  it("deberia mostar una lista de productos", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={{ user: null }}>
          <ProductList products={products} handleDelete={vi.fn()} />
        </AuthContext.Provider>
      </MemoryRouter>,
    );

    expect(screen.getByText("Mouse")).toBeInTheDocument();
    expect(screen.getByText("Teclado")).toBeInTheDocument();
  });
});
