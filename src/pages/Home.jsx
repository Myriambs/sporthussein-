import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function Home() {
  return (
    <main>
      <Hero />
      <section id="featured-products">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home