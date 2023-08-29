import Cart from "./components/Cart";
import Product from "./components/Product";
import products from "./data/products.json";
import './App.css'

const App = () => {
  return (
    <>
      <section>
        <Cart />
      </section>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};

export default App;
