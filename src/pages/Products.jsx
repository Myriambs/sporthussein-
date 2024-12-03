import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function Products() {
  return (
    <main className="products-page">
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}

export default Products