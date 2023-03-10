import data from './data';

function App() {
  return (
    <div>
      <header className="App-header">
        <a href="/">amazing</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/Rs{product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a href={`/product/Rs{product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>Rs{product.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
