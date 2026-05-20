import ProductList from "./ProductList";
import { useProducts } from "../hooks/useProducts";
import Loading from "./ui/Loading";
import ErrorMessage from "./ui/ErrorMessage";
import SuccessMessage from "./ui/SuccessMessage";
import Button from "./ui/Button";
import Counter from "./ui/Counter";

function Home() {
  const { products, success, loading, error, handleDelete } = useProducts();

  if (loading) {
    return <Loading text="Cargando productos..." />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <section>
      <h2>Listado de productos</h2>

      <Button>Probando...</Button>
      <Loading>Probando...</Loading>
      <Counter />

      {success && <SuccessMessage message={success} />}

      {products.length == 0 && (
        <p className="message">No hay productos disponibles</p>
      )}

      <ProductList products={products} handleDelete={handleDelete} />

      <p>Cantidad: {products.length}</p>
    </section>
  );
}

export default Home;
